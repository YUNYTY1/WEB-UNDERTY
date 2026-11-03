import { ArrowUpRight } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import { about } from '../data/site'

export default function About() {
  return (
    <section id="nosotros" className="section-pad">
      <div className="container-x">
        {/* Tarjeta contenedora con borde lila */}
        <div className="relative overflow-hidden rounded-3xl border border-[#b1a0e8] bg-gradient-to-br from-surface via-[#121412] to-[#0d0f0d] p-6 md:p-12 shadow-2xl">
          
          {/* Círculos decorativos sutiles */}
          <div className="absolute -right-16 -top-16 pointer-events-none opacity-20" aria-hidden="true">
            <div className="relative flex items-center justify-center">
              <div className="absolute h-72 w-72 rounded-full border border-line" />
              <div className="absolute h-52 w-52 rounded-full border border-line" />
              <div className="absolute h-32 w-32 rounded-full border border-line" />
            </div>
          </div>

          <div className="relative z-10">
            <SectionLabel>Nosotros</SectionLabel>
            
            <div className="mt-10 grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-start">
              
              {/* Título principal con las palabras DESTINO y PARA LLEGAR MÁS LEJOS en lila forzado */}
              <h2 className="font-display text-[clamp(2.4rem,4.5vw,4.5rem)] font-bold uppercase tracking-[-0.03em] leading-[0.95] text-cream">
                LA TECNOLOGÍA NO <br />
                ES EL <span className="text-[#b1a0e8]">DESTINO.</span> <br />
                ES EL CAMINO <br />
                <span className="text-[#b1a0e8]">PARA LLEGAR MÁS LEJOS.</span>
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                <article className="flex flex-col rounded-2xl border border-line bg-[#141614]/80 p-7">
                  <p className="label-mono text-[10px] text-[#b1a0e8]">{about.studio.label}</p>
                  <p className="mt-5 text-[15px] leading-[1.85] text-mute">{about.studio.text}</p>
                  <a href="#metodologia" className="label-mono mt-6 inline-flex items-center gap-2 text-[10px] text-[#a3e635] hover:text-cream">
                    {about.studio.link} <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                </article>

                <article className="relative overflow-hidden rounded-2xl border border-line bg-[#181524] p-7 min-h-[220px]">
                  <div className="absolute -right-10 -top-10 grid h-36 w-36 place-items-center rounded-full bg-white/5" aria-hidden="true">
                    <div className="grid h-24 w-24 place-items-center rounded-full bg-white/5"><div className="h-12 w-12 rounded-full bg-[#9db291]" /></div>
                  </div>
                  <p className="label-mono relative text-[10px] text-[#b1a0e8]">{about.point.label}</p>
                  <p className="relative mt-14 font-display text-xl font-bold uppercase leading-tight tracking-[-0.03em] sm:mt-16 text-cream">
                    {about.point.title} <span className="text-[#b1a0e8]">{about.point.accent}</span>
                  </p>
                </article>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}