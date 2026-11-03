import { useState } from 'react'
import { Plus } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import SolutionModal from '../components/SolutionModal'
import { solutionsIntro, solutions } from '../data/site'

export default function Solutions() {
  const [selectedSolution, setSelectedSolution] = useState(null)

  return (
    <section id="servicios" className="section-pad">
      <div className="container-x">
        {/* Gran tarjeta contenedora con borde lila */}
        <div className="relative overflow-hidden rounded-3xl border border-[#b1a0e8] bg-gradient-to-br from-surface via-[#121412] to-[#0d0f0d] p-6 md:p-12 shadow-2xl">
          
          {/* Círculos decorativos sutiles en la esquina superior derecha */}
          <div className="absolute -right-16 -top-16 pointer-events-none opacity-20" aria-hidden="true">
            <div className="relative flex items-center justify-center">
              <div className="absolute h-72 w-72 rounded-full border border-line" />
              <div className="absolute h-52 w-52 rounded-full border border-line" />
              <div className="absolute h-32 w-32 rounded-full border border-line" />
            </div>
          </div>

          <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16 items-start">
            
            {/* Columna Izquierda: Títulos y tarjeta interna */}
            <div>
              <SectionLabel>Soluciones</SectionLabel>
              
              {/* Título principal con "QUE SÍ MUEVE." en color lila */}
              <h2 className="mt-8 font-display text-[clamp(2.4rem,4.5vw,4.5rem)] font-bold uppercase tracking-[-0.03em] leading-[0.95] text-cream">
                LO DIGITAL <br />
                <span className="text-[#b1a0e8]">QUE SÍ MUEVE.</span>
              </h2>

              <p className="mt-6 text-mute text-base leading-relaxed max-w-md">
                {solutionsIntro.text}
              </p>

              {/* Tarjeta interna inferior */}
              <div className="mt-10 rounded-2xl border border-line bg-[#141614]/90 p-6 shadow-lg">
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#b1a0e8] font-semibold">
                  {solutionsIntro.card.label}
                </span>
                <h3 className="font-display text-xl font-bold uppercase tracking-wide text-cream mt-2">
                  {solutionsIntro.card.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {solutionsIntro.card.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-[#b1a0e8]/30 bg-[#b1a0e8]/10 px-3 py-1 font-mono text-xs text-[#b1a0e8]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Columna Derecha: Lista de soluciones */}
            <div className="flex flex-col">
              {solutions.map((item, index) => (
                <div
                  key={item.title}
                  onClick={() => setSelectedSolution(item)}
                  className="group flex items-center justify-between border-b border-line py-6 transition-colors hover:border-[#b1a0e8]/50 cursor-pointer"
                >
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-xs font-semibold text-[#b1a0e8]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h4 className="font-display text-lg sm:text-xl font-bold uppercase tracking-wide text-cream group-hover:text-[#b1a0e8] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-mute mt-1">
                        {item.text}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="hidden sm:inline font-mono text-xs tracking-wider text-mute uppercase group-hover:text-cream transition-colors">
                      Ver detalle ↗
                    </span>
                    <button className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-cream transition-all group-hover:border-[#b1a0e8] group-hover:bg-[#b1a0e8] group-hover:text-ink">
                      <Plus size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {selectedSolution && (
        <SolutionModal 
          solution={selectedSolution} 
          onClose={() => setSelectedSolution(null)} 
        />
      )}
    </section>
  )
}