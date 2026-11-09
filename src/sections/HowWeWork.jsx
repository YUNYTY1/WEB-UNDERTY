import SectionLabel from '../components/SectionLabel'
import { howWeWork } from '../data/site'

export default function HowWeWork() {
  return (
    <section className="section-pad">
      <div className="container-x">
        {/* Gran tarjeta contenedora principal */}
        <div className="relative overflow-hidden rounded-3xl border border-[#b1a0e8] bg-gradient-to-br from-surface via-[#121412] to-[#0d0f0d] p-6 md:p-12 shadow-2xl">
          
          <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16 items-center">
            
            {/* Columna Izquierda: Título impactante */}
            <div>
              <SectionLabel>Cómo trabajamos</SectionLabel>
              
              <h2 className="mt-6 font-display text-[clamp(2.2rem,4vw,4rem)] font-bold uppercase tracking-[-0.03em] leading-[0.95] text-cream">
                NO SE TRATA <br />
                SOLO DE <br />
                <span className="text-[#b1a0e8]">DESARROLLAR.</span> <br />
                SE TRATA <br />
                DE <span className="text-[#b1a0e8]">RESOLVER.</span>
              </h2>
            </div>

            {/* Columna Derecha: Grid de 2x2 para las 4 tarjetas */}
            <div className="grid gap-4 sm:grid-cols-2">
              {howWeWork.items.map((item, index) => (
                <div 
                  key={item.title}
                  className="group relative flex flex-col justify-between rounded-2xl border border-[#b1a0e8]/30 bg-[#141614]/80 p-6 transition-all duration-300 hover:border-[#b1a0e8] hover:bg-[#181a18] hover:-translate-y-1 shadow-lg"
                >
                  <div>
                    {/* Número identificador */}
                    <span className="font-mono text-xs font-bold text-[#b1a0e8]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    
                    {/* Título de la tarjeta */}
                    <h3 className="font-display text-lg font-bold uppercase tracking-wide text-cream mt-3 group-hover:text-[#b1a0e8] transition-colors">
                      {item.title}
                    </h3>
                    
                    {/* Descripción */}
                    <p className="mt-3 text-xs sm:text-sm text-mute leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}