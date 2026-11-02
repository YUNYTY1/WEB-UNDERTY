import { ArrowDown, ArrowUpRight } from 'lucide-react'
import Button from '../components/Button'
import orb from '../assets/hero-orb.svg'
import { hero } from '../data/site'

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px bg-line lg:block" aria-hidden="true" />
      <div className="container-x relative grid min-h-[calc(100vh-89px)] items-center py-12 lg:py-0">
        <div className="relative z-10">
          <h1 className="display text-[clamp(2.6rem,8.6vw,8.5rem)] leading-[0.9]">
            <span className="block">{hero.lines[0]}</span>
            <span className="block">{hero.lines[1]}</span>
            <span className="block">
              {/* Pintamos la última palabra "tecnología" de color lila */}
              <span className="text-lilac"></span>
              <span className="text-lilac">Tecnologia</span>
            </span>
          </h1>
          <p className="mt-10 max-w-[30rem] text-lg leading-relaxed text-mute lg:mt-20">{hero.text}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="#contacto" size="lg" icon={ArrowUpRight}>{hero.primaryCta}</Button>
            <Button href="#servicios" size="lg" variant="outline" icon={ArrowDown} className="pr-7">{hero.secondaryCta}</Button>
          </div>
        </div>
        <div className="relative mx-auto mt-10 w-[85%] max-w-[520px] lg:absolute lg:right-[-2%] lg:top-1/2 lg:mt-0 lg:w-[46%] lg:max-w-none lg:-translate-y-1/2">
          {/* Flota (animate-float) y gira en órbita sin parar (animate-orbit). Cambia la velocidad en tailwind.config.js: orbit: '30s' */}
          <div className="animate-float">
            <img
              src={orb}
              alt="Esfera 3D lila rodeada de una estructura de malla y órbitas (ilustración decorativa)"
              className="w-full animate-orbit"
            />
          </div>
          <p className="label-mono absolute bottom-0 right-0 rounded-full border border-line bg-ink/70 px-4 py-2 text-[10px] text-mute">
            <span className="mr-2 text-lilac">•</span>{hero.tag}
          </p>
        </div>
      </div>
    </section>
  )
}