export default function Logo({ footer = false }) {
  return (
    <a href="#inicio" aria-label="Grupo Underty, ir al inicio" className="flex items-center gap-3.5">
      {/* Subimos la altura a h-16 para que se vea mucho más grande */}
      <img 
        src="/LOGO.png" 
        alt="Grupo Underty Logo" 
        className="h-20 w-auto rounded-xl object-contain shadow-md" 
      />
      
      <span className="leading-none">
        <span className="block font-mono text-[10px] tracking-[0.3em] text-mute">GRUPO</span>
        <span className="mt-1 block font-display text-xl font-bold tracking-[0.2em]">UNDERTY</span>
      </span>
    </a>
  )
}