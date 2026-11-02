import { useState } from 'react'
import SectionLabel from '../components/SectionLabel'
import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/site'

export default function Projects() {
  // El carrusel avanza solo de derecha a izquierda; se detiene al pasar el cursor, enfocar o hacer clic (clic de nuevo = reanudar)
  const [paused, setPaused] = useState(false)

  return (
    <section id="proyectos" className="section-pad overflow-hidden">
      <div className="container-x">
        <SectionLabel>Proyectos</SectionLabel>
        <div className="mt-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle parts={[{ t: 'Ideas que', br: true }, { t: 'toman forma.', m: true }]} />
          <p className="max-w-[16rem] text-[15px] leading-relaxed text-mute">Explora algunos de nuestros proyectos y experiencias digitales.</p>
        </div>
      </div>
      <div
        className="mt-14 overflow-hidden motion-reduce:overflow-x-auto"
        role="region"
        aria-label="Carrusel de proyectos. Haz clic para pausar o reanudar."
        onClick={() => setPaused((p) => !p)}
      >
        <div
          className="flex w-max animate-marquee hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]"
          style={paused ? { animationPlayState: 'paused' } : undefined}
        >
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex gap-5 pr-5" aria-hidden={copy === 1 ? 'true' : undefined}>
              {projects.map((p) => (
                <li key={p.name}><ProjectCard project={p} /></li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}
