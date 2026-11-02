import { ArrowUpRight } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import SectionTitle from '../components/SectionTitle'
import { about } from '../data/site'

export default function About() {
  return (
    <section id="nosotros" className="section-pad">
      <div className="container-x">
        <SectionLabel>Nosotros</SectionLabel>
        <div className="mt-10 grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-start">
          <SectionTitle parts={about.title} className="text-[clamp(2.4rem,5.6vw,5rem)]" />
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="flex flex-col rounded-2xl border border-line bg-surface p-7">
              <p className="label-mono text-[10px] text-lilac">{about.studio.label}</p>
              <p className="mt-5 text-[15px] leading-[1.85] text-mute">{about.studio.text}</p>
              <a href="#metodologia" className="label-mono mt-6 inline-flex items-center gap-2 text-[10px] text-mint hover:text-cream">
                {about.studio.link} <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </article>
            <article className="relative overflow-hidden rounded-2xl border border-line bg-plum p-7 min-h-[220px]">
              <div className="absolute -right-10 -top-10 grid h-36 w-36 place-items-center rounded-full bg-white/5" aria-hidden="true">
                <div className="grid h-24 w-24 place-items-center rounded-full bg-white/5"><div className="h-12 w-12 rounded-full bg-[#9db291]" /></div>
              </div>
              <p className="label-mono relative text-[10px] text-lilac">{about.point.label}</p>
              <p className="relative mt-14 font-display text-xl font-bold uppercase leading-tight tracking-[-0.03em] sm:mt-16">
                {about.point.title} <span className="text-lilac">{about.point.accent}</span>
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
