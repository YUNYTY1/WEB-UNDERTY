export default function Logo({ footer = false }) {
  return (
    <a href="#inicio" aria-label="Grupo Underty, ir al inicio" className="flex items-center gap-3.5">
      {/* h-14 en móvil para caber en el header de 72px; h-20 desde escritorio */}
      <img 
        src="/LOGO.png" 
        alt="Grupo Underty Logo" 
        className="h-14 w-auto rounded-xl object-contain shadow-md lg:h-20" 
      />
      
      <span className="leading-none">
        <span className="block font-mono text-[10px] tracking-[0.3em] text-mute">GRUPO</span>
        <span className="mt-1 block font-display text-xl font-bold tracking-[0.2em]">UNDERTY</span>
      </span>
    </a>
  )
}