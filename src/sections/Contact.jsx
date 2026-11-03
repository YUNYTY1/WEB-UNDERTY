import { useEffect, useState } from 'react'
import { ArrowUpRight, MessageCircle } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { whatsappLink } from '../lib/whatsapp'
import { contact } from '../data/site'

export default function Contact() {
  const [selected, setSelected] = useState(contact.options[0].id)
  const option = contact.options.find((o) => o.id === selected)

  // Permite que el modal de Soluciones preseleccione una opción
  useEffect(() => {
    const onSelect = (e) => contact.options.some((o) => o.id === e.detail) && setSelected(e.detail)
    window.addEventListener('underty:select-contact', onSelect)
    return () => window.removeEventListener('underty:select-contact', onSelect)
  }, [])

  return (
    <section id="contacto" className="section-pad">
      <div className="container-x">
        {/* Gran tarjeta contenedora con fondo estilizado y círculos decorativos */}
        <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-surface via-[#121412] to-[#0d0f0d] p-6 md:p-12 shadow-2xl">
          
          {/* Círculos decorativos sutiles en la esquina superior derecha */}
          <div className="absolute -right-16 -top-16 pointer-events-none opacity-20" aria-hidden="true">
            <div className="relative flex items-center justify-center">
              <div className="absolute h-72 w-72 rounded-full border border-line" />
              <div className="absolute h-52 w-52 rounded-full border border-line" />
              <div className="absolute h-32 w-32 rounded-full border border-line" />
            </div>
          </div>

          <div className="relative z-10">
            {/* Mini tarjeta de etiqueta con el color verde menta */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-mint/40 bg-mint/10 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-mint animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-mint font-semibold">
                Contacto
              </span>
            </div>

            <div className="mt-8 grid gap-12 lg:mt-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <SectionTitle parts={contact.title} mutedClass="text-mint" className="!font-light text-[clamp(2.5rem,5vw,5.5rem)] !leading-[0.9]" />
                <p className="mt-10 max-w-[18rem] text-[15px] leading-relaxed text-mute">{contact.text}</p>
              </div>
              <div className="lg:pt-2">
                <p className="label-mono text-[10px] text-mint uppercase tracking-widest" id="empieza">Empieza por aquí</p>
                <div role="radiogroup" aria-labelledby="empieza" className="mt-4 grid gap-3 sm:grid-cols-2">
                  {contact.options.map((o) => {
                    const on = o.id === selected
                    return (
                      <button
                        key={o.id}
                        type="button"
                        role="radio"
                        aria-checked={on}
                        onClick={() => setSelected(o.id)}
                        className={`flex items-center gap-4 rounded-xl border p-5 text-left transition-colors ${on ? 'border-mint/80 bg-[#1e281e]' : 'border-line bg-surface hover:border-mute/50'}`}
                      >
                        <span className={`grid h-4 w-4 shrink-0 place-items-center rounded-full border ${on ? 'border-mint' : 'border-dim'}`}>
                          {on && <span className="h-2 w-2 rounded-full bg-mint" />}
                        </span>
                        <span className="flex-1">
                          <span className="block font-mono text-xs font-bold uppercase text-cream">{o.title}</span>
                          <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.08em] text-mute">{o.sub}</span>
                        </span>
                        <ArrowUpRight size={14} className="text-mute" aria-hidden="true" />
                      </button>
                    )
                  })}
                </div>
                {/* Botón de WhatsApp conectado a la opción seleccionada */}
                <a
                  href={whatsappLink(option.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-live="polite"
                  className="group mt-5 flex items-center gap-4 rounded-2xl bg-mint p-3 pl-6 text-ink transition-colors hover:bg-[#c7e0b6] shadow-lg"
                >
                  <MessageCircle size={22} aria-hidden="true" />
                  <span className="flex-1 font-display text-lg font-semibold uppercase tracking-[-0.03em] sm:text-2xl">{option.cta}</span>
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-ink text-cream transition-transform group-hover:rotate-12 sm:h-14 sm:w-14">
                    <ArrowUpRight size={20} aria-hidden="true" />
                  </span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}