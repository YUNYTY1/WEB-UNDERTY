import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react'
import Button from './Button'
import { solutionPoints } from '../data/site'

export default function SolutionModal({ solution, index, total, onClose }) {
  const closeRef = useRef(null)
  const num = (n) => String(n).padStart(2, '0')

  // Obtenemos el array de 3 imágenes de la solución (o respaldamos si solo hubiera una)
  const images = solution.images && solution.images.length > 0
    ? solution.images
    : [solution.image, solution.image, solution.image]

  const [currentIndex, setCurrentIndex] = useState(0)

  // Autoplay cada 3.5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3500)

    return () => clearInterval(timer)
  }, [images.length])

  const handleNext = (e) => {
    e.stopPropagation()
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const handlePrev = (e) => {
    e.stopPropagation()
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  const goContact = (e) => {
    e.preventDefault()
    onClose()
    // Preselecciona la opción relacionada en la sección Contacto
    window.dispatchEvent(new CustomEvent('underty:select-contact', { detail: solution.contactOption }))
    setTimeout(() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }), 60)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-3 backdrop-blur-sm sm:p-6" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="solucion-titulo"
        onClick={(e) => e.stopPropagation()}
        className="relative grid max-h-[92vh] w-full max-w-[950px] animate-pop overflow-y-auto rounded-3xl border border-[#b1a0e8] bg-surface md:grid-cols-2 shadow-2xl"
      >
   {/* Columna Izquierda: Carrusel de 3 imágenes completas sin recortes */}
        <div className="relative h-72 md:h-full md:min-h-[555px] w-full overflow-hidden bg-[#0a0c0a] flex items-center justify-center p-4 md:p-6 group">
          
          {/* Fondo difuminado sutil basado en la misma imagen para rellenar los espacios con elegancia */}
          <div className="absolute inset-0 opacity-20 filter blur-xl scale-110 pointer-events-none">
            <img 
              src={images[currentIndex]} 
              alt="" 
              className="w-full h-full object-cover" 
            />
          </div>

          {/* Imagen principal completa (sin recortes) */}
          <img 
            src={images[currentIndex]} 
            alt={`Ilustración de la solución ${solution.title} - ${currentIndex + 1}`} 
            className="relative z-10 max-h-full max-w-full object-contain rounded-xl shadow-2xl transition-all duration-500" 
          />

          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" aria-hidden="true" />
          
          {/* Indicador de qué punto de la lista estás viendo (ej. 01 / 06) */}
          <p className="absolute bottom-5 left-6 font-mono text-xs font-bold text-cream z-20 bg-black/70 px-2.5 py-1 rounded-md border border-white/10 backdrop-blur-md">
            {num(index + 1)} / {num(total)}
          </p>

          {/* Botones de navegación manual */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Imagen anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-cream border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity hover:border-[#b1a0e8] hover:bg-[#b1a0e8] hover:text-ink cursor-pointer z-20 backdrop-blur-md"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Siguiente imagen"
            className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-cream border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity hover:border-[#b1a0e8] hover:bg-[#b1a0e8] hover:text-ink cursor-pointer z-20 backdrop-blur-md"
          >
            <ChevronRight size={18} />
          </button>

          {/* Indicadores de puntos inferiores (para las 3 imágenes del carrusel) */}
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
    </div>
  )
}