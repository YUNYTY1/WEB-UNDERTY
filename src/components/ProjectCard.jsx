import { ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ project }) {
  return (
    <article className="w-[85vw] shrink-0 sm:w-[380px] lg:w-[420px]">
      <div className="relative overflow-hidden rounded-2xl border border-line bg-ink/5">
        {/* Cambiamos la proporción a horizontal (aspect-video o aspect-[16/10]) y volvemos a object-cover */}
        <img 
          src={project.image} 
          alt={project.alt || project.name} 
          loading="lazy" 
          className="aspect-[16/10] w-full object-cover" 
        />
        
        <a 
          href={project.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-full bg-ink/90 px-4 py-2 font-body text-[10px] font-bold uppercase tracking-[0.12em] text-cream transition-colors hover:bg-ink"
        >
          Ver proyecto <ArrowUpRight size={13} aria-hidden="true" />
        </a>
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-3">
        <h3 className="font-display text-base font-semibold uppercase">{project.name}</h3>
        <span className="label-mono text-[9px] text-mute">{project.category}</span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-mute">{project.text}</p>
    </article>
  )
}