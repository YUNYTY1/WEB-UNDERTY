import { useEffect, useRef } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import Button from './Button'
import illustration from '../assets/solution-illustration.svg'
import { solutionPoints } from '../data/site'

export default function SolutionModal({ solution, index, total, onClose }) {
  const closeRef = useRef(null)
  const num = (n) => String(n).padStart(2, '0')

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
        className="relative grid max-h-[92vh] w-full max-w-[950px] animate-pop overflow-y-auto rounded-2xl border border-line bg-surface md:grid-cols-2"
      >
        <div className="relative h-44 md:h-auto md:min-h-[555px]">
          <img src={illustration} alt={`Ilustración de la solución ${solution.title}`} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" aria-hidden="true" />
          <p className="absolute bottom-5 left-6 font-mono text-xs font-bold text-cream">{num(index + 1)} / {num(total)}</p>
        </div>
        <div className="relative flex flex-col justify-center p-6 pt-8 sm:p-10 md:p-[57px]">
          <button ref={closeRef} type="button" onClick={onClose} aria-label="Cerrar" className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-line hover:border-cream/60 md:right-5 md:top-5">
            <X size={18} aria-hidden="true" />
          </button>
          <p className="label-mono text-[10px] text-mint">Solución Underty</p>
          <h3 id="solucion-titulo" className="mt-5 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-normal leading-none tracking-[-0.05em]">{solution.title.toUpperCase()}</h3>
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-mute">{solution.text}</p>
          <ul className="mt-6 space-y-3 border-t border-line pt-6">
            {solutionPoints.map((p) => (
              <li key={p} className="font-mono text-[11px] font-bold uppercase tracking-[0.06em] text-cream/90">— {p}</li>
            ))}
          </ul>
          <Button href="#contacto" mono icon={ArrowUpRight} onClick={goContact} className="mt-8 self-start">Hablemos de tu proyecto</Button>
        </div>
      </div>
    </div>
  )
}
