import { ArrowDown, ArrowUpRight } from 'lucide-react'
import Button from '../components/Button'
import { hero } from '../data/site'

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px bg-line lg:block" aria-hidden="true" />
      <div className="container-x relative grid min-h-[calc(100vh-89px)] items-center py-12 lg:py-0">
        
        {/* Estructura en dos columnas */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* Columna Izquierda: Títulos y botones */}
          <div className="relative z-10 lg:col-span-7">
            
            {/* Mini tarjeta de etiqueta con estilo lila */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#b1a0e8]/40 bg-[#b1a0e8]/10 shadow-sm mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#b1a0e8] animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#b1a0e8] font-semibold">
                Grupo Underty
              </span>
            </div>

            <h1 className="display text-[clamp(2.6rem,7.5vw,7.5rem)] leading-[0.9]">
              <span className="block">{hero.lines[0]}</span>
              <span className="block">{hero.lines[1]}</span>
              <span className="block">
                <span className="text-[#b1a0e8]">TECNOLOGÍA</span>
              </span>
            </h1>

            <p className="mt-10 max-w-[30rem] text-lg leading-relaxed text-mute lg:mt-12">{hero.text}</p>
            
            <div className="mt-10 flex flex-wrap gap-3">
              {/* Botón principal en color lila */}
              <a
                href="#contacto"
                className="inline-flex items-center gap-3 rounded-full bg-[#b1a0e8] px-7 py-4 font-display text-sm font-bold uppercase tracking-wide text-ink transition-all hover:bg-[#c4b6f5] hover:scale-[1.02] shadow-[0_10px_30px_rgba(177,160,232,0.3)]"
              >
                <span>{hero.primaryCta}</span>
                <ArrowUpRight size={18} />
              </a>

              <Button href="#servicios" size="lg" variant="outline" icon={ArrowDown} className="pr-7">{hero.secondaryCta}</Button>
            </div>
          </div>

          {/* Columna Derecha: Tarjeta con el video incorporado */}
          <div className="relative mx-auto w-[95%] max-w-[520px] lg:col-span-5 lg:mx-0 lg:max-w-none">
            <div className="relative overflow-hidden rounded-3xl border border-[#b1a0e8] bg-gradient-to-br from-surface via-[#121412] to-[#0d0f0d] p-3 shadow-[0_20px_50px_rgba(177,160,232,0.15)] group">
              
              <div className="absolute -right-16 -top-16 pointer-events-none opacity-25 z-0" aria-hidden="true">
                <div className="relative flex items-center justify-center">
                  <div className="absolute h-72 w-72 rounded-full border border-line" />
                  <div className="absolute h-52 w-52 rounded-full border border-line" />
                </div>
              </div>

              <div className="relative z-10 overflow-hidden rounded-2xl bg-[#141614] aspect-[4/3] sm:aspect-square flex items-center justify-center">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                >
                  <source src={hero.video} type="video/mp4" />
                  Tu navegador no soporta la reproducción de videos.
                </video>
              </div>

            </div>

            {hero.tag && (
              <p className="label-mono absolute -bottom-4 right-4 rounded-full border border-line bg-ink/90 px-4 py-2 text-[10px] text-mute shadow-lg z-20">
                <span className="mr-2 text-[#b1a0e8]">•</span>{hero.tag}
              </p>
            )}
          </div>

        </div>

      </div>
    </section>
  )
}