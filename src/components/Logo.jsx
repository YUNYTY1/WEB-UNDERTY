export default function Logo({ footer = false }) {
  return (
    <a href="#inicio" aria-label="Grupo Underty, ir al inicio" className="flex items-center gap-3">
      <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-cream font-display text-lg font-bold text-ink">
        {footer ? <span className="h-3.5 w-3.5 rounded-[3px] border-2 border-ink" /> : 'U'}
        {!footer && <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-lilac" />}
      </span>
      <span className="leading-none">
        <span className="block font-mono text-[9px] tracking-[0.3em] text-mute">GRUPO</span>
        <span className="mt-1 block font-display text-lg font-bold tracking-[0.2em]">UNDERTY</span>
      </span>
    </a>
  )
}
