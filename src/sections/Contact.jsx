import { useEffect, useState } from 'react'
import { ArrowUpRight, MessageCircle } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
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
        <div className="flex items-center justify-between">
          <SectionLabel>Contacto</SectionLabel>
          <p className="label-mono flex items-center gap-3 text-[10px] text-mute">Colaboración directa <span className="h-2 w-2 rounded-full bg-mint" aria-hidden="true" /></p>
        </div>
        <div className="mt-12 grid gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionTitle parts={contact.title} mutedClass="text-mint" className="!font-light text-[clamp(3rem,7vw,6.5rem)] !leading-[0.9]" />
            <p className="mt-10 max-w-[18rem] text-[15px] leading-relaxed text-mute">{contact.text}</p>
          </div>
          <div className="lg:pt-10">
            <p className="label-mono text-[10px] text-mint" id="empieza">Empieza por aquí</p>
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
                      <span className="block font-mono text-xs font-bold uppercase">{o.title}</span>
                      <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.08em] text-mute">{o.sub}</span>
                    </span>
                    <ArrowUpRight size={14} className="text-mute" aria-hidden="true" />
                  </button>
                )
              })}
            </div>
            {/* TODO: aquí se puede cambiar WhatsApp por un formulario o backend; el texto ya cambia según la opción */}
            <a
              href={whatsappLink(option.message)}
              target="_blank"
              rel="noopener noreferrer"
              aria-live="polite"
              className="group mt-5 flex items-center gap-4 rounded-2xl bg-mint p-3 pl-6 text-ink transition-colors hover:bg-[#c7e0b6]"
            >
              <MessageCircle size={22} aria-hidden="true" />
              <span className="flex-1 font-display text-lg font-semibold uppercase tracking-[-0.03em] sm:text-2xl">{option.cta}</span>
              <span className="grid h-12 w-12 place-items-center rounded-full bg-ink text-cream transition-transform group-hover:rotate-12 sm:h-14 sm:w-14"><ArrowUpRight size={20} aria-hidden="true" /></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
