import { useEffect, useState } from 'react'

export default function Preloader() {
  const [loading, setLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Inicia el desvanecimiento a los 1.5 segundos
    const timerFade = setTimeout(() => {
      setFadeOut(true)
    }, 500)

    // Oculta y remueve el preloader por completo a los 2 segundos exactos
    const timerRemove = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => {
      clearTimeout(timerFade)
      clearTimeout(timerRemove)
    }
  }, [])

  if (!loading) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0d0d0d] transition-opacity duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center gap-6">
        <img
          src="/LOGO.png"
          alt="Cargando..."
          className="h-64 w-auto animate-pulse rounded-3xl object-contain shadow-2xl"
        />

        <div className="h-1.5 w-48 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-full origin-left animate-[pulse_1.5s_ease-in-out_infinite] bg-lilac" />
        </div>

        <span className="font-mono text-xs tracking-[0.3em] text-mute uppercase">
          Cargando experiencias...
        </span>
      </div>
    </div>
  )
}