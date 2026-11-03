import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/site'

export default function Projects() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const offset = direction === 'left' ? -clientWidth / 2 : clientWidth / 2
      scrollRef.current.scrollTo({ left: scrollLeft + offset, behavior: 'smooth' })
    }
  }

  return (
    <section id="proyectos" className="section-pad">
      <div className="container-x">
        {/* Gran tarjeta contenedora con el contorno lila y fondo estilizado */}
        <div className="relative overflow-hidden rounded-3xl border border-[#b1a0e8] bg-gradient-to-br from-surface via-[#121412] to-[#0d0f0d] p-6 md:p-12 shadow-2xl">
          
          {/* Círculos decorativos sutiles en la esquina superior derecha */}
          <div className="absolute -right-16 -top-16 pointer-events-none opacity-20" aria-hidden="true">
            <div className="relative flex items-center justify-center">
              <div className="absolute h-72 w-72 rounded-full border border-line" />
              <div className="absolute h-52 w-52 rounded-full border border-line" />
              <div className="absolute h-32 w-32 rounded-full border border-line" />
            </div>
          </div>

          <div className="relative z-10">
            {/* Cabecera y botones de movilidad manual */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
              <div>
                {/* Mini tarjeta de etiqueta con enfoque lila */}
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#b1a0e8]/40 bg-[#b1a0e8]/10 shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#b1a0e8] animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-widest text-[#b1a0e8] font-semibold">
                    Proyectos
                  </span>
                </div>
                
                {/* Título directo con el color lila aplicado a "toman forma." */}
                <h2 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-[-0.03em] leading-[0.95]">
                  IDEAS QUE <br />
                  <span className="text-[#b1a0e8]">TOMAN FORMA.</span>
                </h2>

                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-mute">
                  Explora algunos de nuestros proyectos y experiencias digitales.
                </p>
              </div>
              
              {/* Botones de navegación manual con el color lila */}
              <div className="flex gap-3">
                <button
                  onClick={() => scroll('left')}
                  aria-label="Anterior proyecto"
                  className="grid h-12 w-12 place-items-center rounded-full border border-[#b1a0e8]/40 bg-[#141614] text-[#b1a0e8] hover:bg-[#b1a0e8] hover:text-ink transition-colors shadow-md"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() => scroll('right')}
                  aria-label="Siguiente proyecto"
                  className="grid h-12 w-12 place-items-center rounded-full border border-[#b1a0e8]/40 bg-[#141614] text-[#b1a0e8] hover:bg-[#b1a0e8] hover:text-ink transition-colors shadow-md"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Carrusel de proyectos manual con tarjetas individuales */}
            <div 
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto pb-4 pt-2 snap-x snap-mandatory scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {projects.map((p) => (
                <div 
                  key={p.name} 
                  className="min-w-[320px] sm:min-w-[380px] md:min-w-[420px] snap-start flex-shrink-0 rounded-2xl border border-line bg-[#141614] p-5 flex flex-col justify-between shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#b1a0e8]/50"
                >
                  <ProjectCard project={p} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}