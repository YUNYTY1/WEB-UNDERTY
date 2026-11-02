import SectionLabel from '../components/SectionLabel'
import SectionTitle from '../components/SectionTitle'
import { process } from '../data/site'

export default function Process() {
  return (
    <section id="metodologia" className="section-pad">
      <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <SectionLabel>Metodología</SectionLabel>
          <SectionTitle parts={process.title} className="mt-10" />
          <p className="mt-8 max-w-[17rem] text-[15px] leading-relaxed text-mute">{process.text}</p>
        </div>
        <div className="lg:pt-16">
          <div className="relative hidden h-4 lg:block" aria-hidden="true">
            <div className="absolute inset-x-0 top-1/2 h-px bg-line" />
            <div className="absolute inset-x-0 top-1/2 h-px overflow-hidden"><div className="h-px w-1/4 animate-sweep bg-gradient-to-r from-transparent via-lilac to-cream" /></div>
            {process.steps.map((s, i) => (
              <span key={s.title} className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border border-cream/70 bg-ink" style={{ left: `${i * 25}%` }} />
            ))}
          </div>
          <ol className="grid gap-8 sm:grid-cols-2 lg:mt-5 lg:grid-cols-4 lg:gap-6">
            {process.steps.map((s, i) => (
              <li key={s.title}>
                <span className="font-mono text-[10px] text-dim">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-5 font-body text-lg font-bold uppercase tracking-[-0.01em]">{s.title}</h3>
                <p className="mt-4 text-[13px] leading-relaxed text-mute">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
