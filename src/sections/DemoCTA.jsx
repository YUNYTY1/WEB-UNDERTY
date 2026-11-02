import { ArrowUpRight, Check } from 'lucide-react'
import Button from '../components/Button'
import { whatsappLink } from '../lib/whatsapp'
import { demo } from '../data/site'

export default function DemoCTA() {
  return (
    <section id="demo" className="py-10 md:py-16">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-surface to-[#151715] p-7 sm:p-12 lg:p-[48px]">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[36px] border-white/[0.03]" aria-hidden="true" />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="label-mono text-[10px] text-lilac">{demo.label}</p>
              <h2 className="mt-5 font-display text-[clamp(2.2rem,4.6vw,3.75rem)] font-medium uppercase leading-[0.95] tracking-[-0.05em]">
                {demo.title}<br /><span className="text-dim">{demo.accent}</span>
              </h2>
              <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-mute">{demo.text}</p>
              {/* TODO: conectar a WhatsApp real o a un formulario/servicio de agenda */}
              <Button href={whatsappLink(demo.message)} target="_blank" rel="noopener noreferrer" mono icon={ArrowUpRight} className="mt-8 h-14">{demo.cta}</Button>
            </div>
            <ul className="border-t border-line lg:mr-16">
              {demo.checks.map((c) => (
                <li key={c} className="flex items-center gap-4 border-b border-line py-4 font-mono text-[11px] uppercase tracking-[0.06em] text-cream/80">
                  <Check size={16} className="text-lilac" aria-hidden="true" />{c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
