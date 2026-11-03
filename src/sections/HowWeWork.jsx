import { howWeWork } from '../data/site'

export default function HowWeWork() {
  return (
    <section id="como-trabajamos" className="section-pad">
      <div className="container-x">
        {/* Gran tarjeta contenedora con fondo estilizado y círculos decorativos */}
        <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-surface via-[#121412] to-[#0d0f0d] p-6 md:p-12 shadow-2xl">
          
          {/* Círculos decorativos sutiles en la esquina superior derecha */}
          <div className="absolute -right-16 -top-16 pointer-events-none opacity-20" aria-hidden="true">
            <div className="relative flex items-center justify-center">
              <div className="absolute h-72 w-72 rounded-full border border-line" />
              <div className="absolute h-52 w-52 rounded-full border border-line" />
              <div className="absolute h-32 w-32 rounded-full border border-line" />
            </div>
          </div>

          <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 items-center">
            
            {/* Columna Izquierda: Etiqueta badge y Título con palabras en lila */}
            <div>
              {/* Mini tarjeta de etiqueta con enfoque lila */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#b1a0e8]/40 bg-[#b1a0e8]/10 shadow-sm mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-[#b1a0e8] animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#b1a0e8] font-semibold">
                  Cómo trabajamos
                </span>
              </div>

              {/* Título directo con las palabras clave en color lila */}
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[-0.03em] leading-[0.95] text-cream">
                NO SE TRATA <br />
                SOLO DE <br />
                <span className="text-[#b1a0e8]">DESARROLLAR.</span> <br />
                SE TRATA <br />
                <span className="text-[#b1a0e8]">DE RESOLVER.</span>
              </h2>
            </div>

            {/* Columna Derecha: Cada elemento (01 a 04) con borde lila fijo */}
            <ol className="flex flex-col gap-4">
              {howWeWork.items.map((it, i) => (
                <li 
                  key={it.title} 
                  className="rounded-2xl border border-[#b1a0e8] bg-[#141614]/80 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(177,160,232,0.25)] shadow-lg"
                >
                  <div className="flex items-center gap-4 mb-2">
                    <span className="font-mono text-xs font-semibold text-[#b1a0e8]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="h-[1px] flex-1 bg-line" />
                  </div>
                  <h3 className="font-body text-base font-bold uppercase tracking-[-0.01em] text-cream">
                    {it.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-mute">
                    {it.text}
                  </p>
                </li>
              ))}
            </ol>

          </div>
        </div>
      </div>
    </section>
  )
}