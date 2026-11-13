import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, ChevronLeft, ChevronRight, X, RotateCcw, ZoomIn } from 'lucide-react'
import Button from './Button'
import { solutionPoints } from '../data/site'

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

export default function SolutionModal({ solution, index, total, onClose }) {
  const closeRef = useRef(null)
  const dialogRef = useRef(null)
  const zoomAreaRef = useRef(null)
  const lightboxCloseRef = useRef(null)
  const num = (n) => String(n).padStart(2, '0')

  const images = solution.images && solution.images.length > 0
    ? solution.images
    : [solution.image, solution.image, solution.image]

  const [currentIndex, setCurrentIndex] = useState(0)

  // Estados para el zoom general y movimiento (panning)
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })

  // Estado para abrir la imagen seleccionada en un visor grande (Lightbox modal)
  const [lightboxImg, setLightboxImg] = useState(null)

  // Autoplay cada 3.5 segundos (se pausa si el usuario hace zoom)
  useEffect(() => {
    if (scale > 1 || lightboxImg) return 
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3500)

    return () => clearInterval(timer)
  }, [images.length, scale, lightboxImg])

  // Resetear zoom al cambiar de imagen
  useEffect(() => {
    setScale(1)
    setPosition({ x: 0, y: 0 })
  }, [currentIndex])

  const handleNext = (e) => {
    e.stopPropagation()
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const handlePrev = (e) => {
    e.stopPropagation()
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  // Zoom con la rueda: listener no pasivo para poder bloquear el scroll de la página
  useEffect(() => {
    const el = zoomAreaRef.current
    if (!el) return
    const onWheel = (e) => {
      e.preventDefault()
      setScale((prev) => Math.min(4, Math.max(1, prev - e.deltaY * 0.001)))
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  // Al volver a escala 1 se recentra la imagen
  useEffect(() => {
    if (scale <= 1) setPosition({ x: 0, y: 0 })
  }, [scale])

  const handleMouseDown = (e) => {
    if (scale > 1) {
      setIsDragging(true)
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y })
    }
  }

  const handleMouseMove = (e) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const resetZoom = (e) => {
    e.stopPropagation()
    setScale(1)
    setPosition({ x: 0, y: 0 })
  }

  // Bloquea el scroll del fondo mientras el modal está abierto
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [])

  // Foco: botón cerrar del modal, o botón cerrar del visor ampliado
  useEffect(() => {
    if (lightboxImg) lightboxCloseRef.current?.focus()
    else closeRef.current?.focus()
  }, [lightboxImg])

  // Teclado: Esc cierra y Tab queda atrapado dentro del modal
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        if (lightboxImg) setLightboxImg(null)
        else onClose()
        return
      }
      if (e.key !== 'Tab') return
      if (lightboxImg) {
        e.preventDefault()
        lightboxCloseRef.current?.focus()
        return
      }
      const nodes = dialogRef.current?.querySelectorAll(FOCUSABLE)
      if (!nodes || nodes.length === 0) return
      const first = nodes[0]
      const last = nodes[nodes.length - 1]
      if (!dialogRef.current.contains(document.activeElement)) {
        e.preventDefault()
        first.focus()
      } else if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, lightboxImg])

  const goContact = (e) => {
    e.preventDefault()
    onClose()
    window.dispatchEvent(new CustomEvent('underty:select-contact', { detail: solution.contactOption }))
    setTimeout(() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }), 60)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-3 backdrop-blur-sm sm:p-6" onClick={onClose}>
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="solucion-titulo"
        onClick={(e) => e.stopPropagation()}
        className="relative grid max-h-[92vh] w-full max-w-[950px] animate-pop overflow-y-auto rounded-3xl border border-[#b1a0e8] bg-surface md:grid-cols-2 shadow-2xl"
      >
        {/* Columna Izquierda: Carrusel con Zoom */}
        <div 
          ref={zoomAreaRef}
          className="relative h-72 md:h-full md:min-h-[555px] w-full overflow-hidden bg-[#0a0c0a] flex items-center justify-center p-4 md:p-6 group cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Fondo difuminado sutil */}
          <div className="absolute inset-0 opacity-20 filter blur-xl scale-110 pointer-events-none">
            <img src={images[currentIndex]} alt="" className="w-full h-full object-cover" />
          </div>

          {/* Imagen interactiva (al hacer clic se abre en grande en el Lightbox) */}
          <div 
            role="button"
            tabIndex={0}
            aria-label="Ampliar imagen"
            onClick={() => setLightboxImg(images[currentIndex])}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setLightboxImg(images[currentIndex])
              }
            }}
            className="relative z-10 max-h-full max-w-full flex items-center justify-center cursor-zoom-in"
            title="Haz clic para ver la imagen más grande"
          >
            <img 
              src={images[currentIndex]} 
              alt={`Ilustración de la solución ${solution.title} ${currentIndex + 1}`} 
              style={{
                transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
                transition: isDragging ? 'none' : 'transform 0.1s ease-out'
              }}
              className="max-h-full max-w-full object-contain rounded-xl shadow-2xl pointer-events-none" 
            />
            {/* Pequeño indicador visual flotante de lupa al pasar el mouse */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center text-white font-mono text-xs gap-1.5 backdrop-blur-[2px]">
              <ZoomIn size={18} /> Click para ampliar
            </div>
          </div>

          {/* Botón flotante para restablecer el zoom interno */}
          {scale > 1 && (
            <button
              type="button"
              onClick={resetZoom}
              className="absolute top-5 left-6 z-30 flex items-center gap-1.5 bg-black/80 hover:bg-[#b1a0e8] hover:text-ink text-cream text-xs font-mono px-3 py-1.5 rounded-full border border-white/20 transition-colors backdrop-blur-md cursor-pointer"
            >
              <RotateCcw size={14} />
              <span>Restablecer zoom</span>
            </button>
          )}

          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" aria-hidden="true" />
          
          {/* Indicador de qué punto estás viendo */}
          <p className="absolute bottom-5 left-6 font-mono text-xs font-bold text-cream z-20 bg-black/70 px-2.5 py-1 rounded-md border border-white/10 backdrop-blur-md">
            {num(index + 1)} / {num(total)}
          </p>

          {/* Botones de navegación manual */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Imagen anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-cream border border-white/10 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity hover:border-[#b1a0e8] hover:bg-[#b1a0e8] hover:text-ink cursor-pointer z-20 backdrop-blur-md"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Siguiente imagen"
            className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-cream border border-white/10 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity hover:border-[#b1a0e8] hover:bg-[#b1a0e8] hover:text-ink cursor-pointer z-20 backdrop-blur-md"
          >
            <ChevronRight size={18} />
          </button>

          {/* Indicadores de puntos inferiores */}
          <div className="absolute bottom-5 right-6 flex gap-1.5 z-20 bg-black/70 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {images.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                aria-label={`Ir a imagen ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  currentIndex === idx ? 'w-5 bg-[#b1a0e8]' : 'w-1.5 bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Columna Derecha: Contenido y detalles */}
        <div className="relative flex flex-col justify-center p-6 pt-8 sm:p-10 md:p-[57px]">
          <button 
            ref={closeRef} 
            type="button" 
            onClick={onClose} 
            aria-label="Cerrar" 
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-line hover:border-[#b1a0e8] hover:bg-[#b1a0e8] hover:text-ink transition-colors md:right-5 md:top-5 cursor-pointer"
          >
            <X size={18} aria-hidden="true" />
          </button>

          <p className="label-mono text-[10px] text-[#b1a0e8]">Solución Underty</p>
          <h3 id="solucion-titulo" className="mt-5 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-normal leading-none tracking-[-0.05em]">
            {solution.title.toUpperCase()}
          </h3>
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-mute">{solution.text}</p>
          
          <ul className="mt-6 space-y-3 border-t border-line pt-6">
            {solutionPoints.map((p) => (
              <li key={p} className="font-mono text-[11px] font-bold uppercase tracking-[0.06em] text-cream/90">— {p}</li>
            ))}
          </ul>

          <Button href="#contacto" mono icon={ArrowUpRight} onClick={goContact} className="mt-8 self-start">
            Hablemos de tu proyecto
          </Button>
        </div>
      </div>

      {/* --- LIGHTBOX (VISOR DE IMAGEN AMPLIADA CON BOTÓN X MORADO) --- */}
      {lightboxImg && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setLightboxImg(null)}
        >
          {/* Botón flotante "X" en color morado */}
          <button
            ref={lightboxCloseRef}
            type="button"
            onClick={() => setLightboxImg(null)}
            aria-label="Cerrar zoom"
            className="absolute right-6 top-6 z-[110] flex h-12 w-12 items-center justify-center rounded-full bg-[#b1a0e8] text-ink shadow-2xl hover:scale-110 transition-transform cursor-pointer font-bold"
          >
            <X size={22} />
          </button>

          {/* Imagen en grande adaptada a la pantalla */}
          <img
            src={lightboxImg}
            alt="Vista detallada ampliada"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl border border-[#b1a0e8]/40"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}