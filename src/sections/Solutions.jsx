import { useCallback, useState } from 'react'
import { ArrowUpRight, Plus } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import SectionTitle from '../components/SectionTitle'
import SolutionModal from '../components/SolutionModal'
import { solutions, solutionsIntro } from '../data/site'

export default function Solutions() {
  const [open, setOpen] = useState(null)
  const close = useCallback(() => setOpen(null), [])

  return (
    <section id="servicios" className="section-pad">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:gap-20">
        <div>
          <SectionLabel>Soluciones</SectionLabel>
          <SectionTitle parts={solutionsIntro.title} className="mt-8" />
          <p className="mt-8 max-w-xs text-[15px] leading-relaxed text-mute">{solutionsIntro.text}</p>
          <article className="mt-14 hidden max-w-[360px] rounded-2xl border border-line bg-gradient-to-br from-surface to-[#141614] p-6 lg:block">
            <p className="label-mono text-[10px] text-[#c9d89a]">{solutionsIntro.card.label}</p>
            <p className="mt-8 font-display text-3xl font-bold uppercase leading-[0.95] tracking-[-0.04em]">{solutionsIntro.card.title}</p>
            <p className="label-mono mt-6 flex gap-3 text-[10px] text-mute">
              <span className="text-mint">●</span>
              {solutionsIntro.card.tags.map((t) => <span key={t}>{t}</span>)}
            </p>
          </article>
        </div>
        <ul className="border-t border-line">
          {solutions.map((s, i) => (
            <li key={s.title} className="border-b border-line">
              <button
                type="button"
                onClick={() => setOpen(i)}
                aria-haspopup="dialog"
                aria-label={`Ver detalle de ${s.title}`}
                className="group flex w-full items-center gap-4 py-6 text-left sm:gap-6 sm:py-[31px]"
              >
                <span className="font-mono text-[10px] text-dim">{String(i + 1).padStart(2, '0')}</span>
                <span className="flex-1 font-body text-lg font-medium uppercase tracking-[-0.01em] text-cream/90 group-hover:text-cream sm:text-xl">{s.title}</span>
                <span className="label-mono hidden items-center gap-2 text-[10px] text-dim sm:flex">Ver detalle <ArrowUpRight size={14} aria-hidden="true" /></span>
                <span className="grid h-10 w-10 place-items-center rounded-full border border-dim/60 transition-colors group-hover:bg-cream group-hover:text-ink">
                  <Plus size={18} aria-hidden="true" />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      {open !== null && <SolutionModal solution={solutions[open]} index={open} total={solutions.length} onClose={close} />}
    </section>
  )
}
