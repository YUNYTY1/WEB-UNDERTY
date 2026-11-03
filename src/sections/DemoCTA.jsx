import { ArrowUpRight, Check } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import { WHATSAPP_NUMBER, demo } from '../data/site'

export default function DemoCTA() {
  const handleDemoClick = () => {
    const text = encodeURIComponent(demo.message)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank')
  }

  return (
    <section className="section-pad">
      <div className="container-x">
        {/* Gran tarjeta contenedora con el contorno lila principal */}
        <div className="relative overflow-hidden rounded-3xl border border-[#b1a0e8] bg-gradient-to-br from-surface via-[#121412] to-[#0d0f0d] p-6 md:p-12 shadow-2xl">
          
          {/* Círculo decorativo sutil en la esquina derecha */}
          <div className="absolute -right-20 -top-20 pointer-events-none opacity-20" aria-hidden="true">
            <div className="relative flex items-center justify-center">
              <div className="absolute h-96 w-96 rounded-full border border-line" />
              <div className="absolute h-64 w-64 rounded-full border border-line" />
            </div>
          </div>

          <div className="relative z-10 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 items-center">
            
            {/* Columna Izquierda: Título y Botón */}
            <div>
              <SectionLabel>{demo.label}</SectionLabel>
              
              {/* Título principal con "SIN COMPROMISO." en color lila */}
              <h2 className="mt-6 font-display text-[clamp(2.4rem,4.5vw,4.5rem)] font-bold uppercase tracking-[-0.03em] leading-[0.95] text-cream">
                PIDE TU DEMO GRATIS. <br />
                <span className="text-[#b1a0e8]">SIN COMPROMISO.</span>
              </h2>

              <p className="mt-6 text-mute text-base leading-relaxed max-w-md">
                {demo.text}
              </p>

              {/* Botón "Solicitar mi demo" en color lila brillante */}
              <div className="mt-8">
                <button
                  onClick={handleDemoClick}
                  className="inline-flex items-center gap-3 rounded-full bg-[#b1a0e8] px-7 py-4 font-display text-sm font-bold uppercase tracking-wide text-ink transition-all hover:bg-[#c4b6f5] hover:scale-[1.02] shadow-[0_10px_30px_rgba(177,160,232,0.3)] cursor-pointer"
                >
                  <span>{demo.cta}</span>
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </div>

            {/* Columna Derecha: Lista de verificaciones (Checks) con contorno lila leve */}
            <div className="flex flex-col gap-4">
              {demo.checks.map((checkText) => (
                <div 
                  key={checkText}
                  className="flex items-center gap-4 rounded-2xl border border-[#b1a0e8]/30 bg-[#141614]/80 p-5 transition-colors hover:border-[#b1a0e8]/60 shadow-md"
                >
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#b1a0e8]/10 text-[#b1a0e8]">
                    <Check size={16} />
                  </div>
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cream">
                    {checkText}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}