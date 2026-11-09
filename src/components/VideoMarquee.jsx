import { useEffect, useRef } from 'react'
import videoSrc from '../assets/videounderty2.mp4'

export default function VideoMarquee() {
  const wrapRef = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const video = videoRef.current
    if (!wrap || !video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { rootMargin: '200px' }
    )

    observer.observe(wrap)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className="-my-6 overflow-hidden md:-my-8"
    >
      <style>{`
        @keyframes underty-pass {
          from { transform: translateX(100vw); }
          to   { transform: translateX(-100%); }
        }
        .underty-pass {
          animation: underty-pass 20s linear infinite;
        }
        .underty-pass:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .underty-pass {
            animation: none;
            transform: none;
            margin-inline: auto;
          }
        }
      `}</style>

      {/* Reducimos el tamaño a h-16 w-36 en móvil y h-20 w-44 en escritorio para que sea sutil y elegante */}
      <div className="underty-pass h-16 w-36 overflow-hidden rounded-xl border border-[#b1a0e8]/40 bg-[#141614] shadow-lg md:h-20 md:w-44">
        <video
          ref={videoRef}
          src={videoSrc}
          loop
          muted
          playsInline
          preload="metadata"
          tabIndex={-1}
          disablePictureInPicture
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  )
}