import SectionTitle from '../components/SectionTitle'
import { process } from '../data/site'

export default function Process() {
  return (
    <section id="metodologia" className="section-pad">
      <div className="container-x">
        {/* Gran tarjeta contenedora con diseño de círculos decorativos en la esquina */}
        <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-surface via-[#121412] to-[#0d0f0d] p-6 md:p-12 shadow-2xl">
          
          {/* Círculos decorativos sutiles en la esquina superior derecha */}
          <div className="absolute -right-16 -top-16 pointer-events-none opacity-20" aria-hidden="true">
            <div className="relative flex items-center justify-center">
              <div className="absolute h-72 w-72 rounded-full border border-line" />
              <div className="absolute h-52 w-52 rounded-full border border-line" />
              <div className="absolute h-32 w-32 rounded-full border border-line" />
            </div>
          </div>

          <div className="relative z-10 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 items-start">
            
            {/* Columna Izquierda: Títulos e intro */}
            <div>
              {/* Mini tarjeta de etiqueta con enfoque lila */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#b1a0e8]/40 bg-[#b1a0e8]/10 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#b1a0e8] animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#b1a0e8] font-semibold">
                  Metodología
                </span>
              </div>

              <div className="mt-6">
                <SectionTitle parts={process.title} />
              </div>
              <p className="mt-6 max-w-[17rem] text-[15px] leading-relaxed text-mute">
                {process.text}
              </p>
            </div>

            {/* Columna Derecha: Proceso con línea de tiempo y tarjetas por etapa */}
            <div className="lg:pt-8">
              {/* Línea animada decorativa en pantallas grandes */}
              <div className="relative hidden h-4 lg:block mb-8" aria-hidden="true">
                <div className="absolute inset-x-0 top-1/2 h-px bg-line" />
                <div className="absolute inset-x-0 top-1/2 h-px overflow-hidden">
                  <div className="h-px w-1/4 animate-sweep bg-gradient-to-r from-transparent via-[#b1a0e8] to-cream" />
                </div>
                {process.steps.map((s, i) => (
                  <span 
                    key={s.title} 
                    className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border border-[#b1a0e8] bg-ink" 
                    style={{ left: `${(i / (process.steps.length - 1)) * 100}%` }} 
                  />
                ))}
              </div>

              {/* Cuadrícula de tarjetas individuales para cada paso */}
              <ol className="grid gap-6 sm:grid-cols-2">
                {process.steps.map((s, i) => (
                  <li 
                    key={s.title}
                    className="rounded-2xl border border-line bg-[#141614]/80 p-5 flex flex-col justify-between transition-all duration-300 hover:border-[#b1a0e8]/60 hover:-translate-y-1 shadow-lg"
                  >
                    <div>
                      <span className="font-mono text-xs text-[#b1a0e8] font-semibold">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="mt-3 font-body text-base font-bold uppercase tracking-[-0.01em] text-cream">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-relaxed text-mute">
                        {s.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}