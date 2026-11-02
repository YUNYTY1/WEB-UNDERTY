import SectionLabel from '../components/SectionLabel'
import SectionTitle from '../components/SectionTitle'
import { howWeWork } from '../data/site'

export default function HowWeWork() {
  return (
    <section id="como-trabajamos" className="section-pad">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1fr]">
        <div>
          <SectionLabel>Cómo trabajamos</SectionLabel>
          <SectionTitle parts={howWeWork.title} className="mt-12 text-[clamp(2.4rem,5.6vw,5rem)]" />
        </div>
        <ol className="border-t border-line lg:mt-2">
          {howWeWork.items.map((it, i) => (
            <li key={it.title} className="grid grid-cols-[2.5rem_1fr] gap-2 border-b border-line py-7 sm:grid-cols-[4.5rem_1fr]">
              <span className="pt-1 font-mono text-[10px] text-[#a8997a]">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="font-body text-base font-semibold uppercase tracking-[-0.01em]">{it.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-mute">{it.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
