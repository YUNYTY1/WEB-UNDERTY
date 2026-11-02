import { Instagram, Linkedin, Mail } from 'lucide-react'
import Logo from '../components/Logo'
import { brand, footer, navLinks } from '../data/site'

const icons = { LinkedIn: Linkedin, Instagram }

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] pb-28 pt-12">
      <div className="container-x">
        <div className="label-mono flex flex-col justify-between gap-2 text-[10px] text-mute sm:flex-row">
          <p>{footer.left}</p>
          <p>{footer.right}</p>
        </div>
        <div className="mt-8 grid gap-10 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo footer />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-mute">{footer.description}</p>
            <a href={`mailto:${brand.email}`} className="label-mono mt-6 inline-flex items-center gap-2 text-[10px] hover:text-lilac">
              {brand.email} <Mail size={16} aria-hidden="true" />
            </a>
          </div>
          <nav aria-label="Pie de página">
            <h2 className="label-mono text-[10px] font-bold text-cream">Navegación</h2>
            <ul className="mt-6 space-y-3">
              {navLinks.map((l) => <li key={l.id}><a href={`#${l.id}`} className="label-mono text-[10px] text-mute hover:text-cream">{l.label}</a></li>)}
            </ul>
          </nav>
          <div>
            <h2 className="label-mono text-[10px] font-bold text-cream">Encuéntranos</h2>
            <ul className="mt-6 space-y-3">
              {footer.social.map((s) => {
                const Icon = icons[s.name]
                return (
                  <li key={s.name}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="label-mono inline-flex items-center gap-2 text-[10px] text-mute hover:text-cream">
                      {s.name} <Icon size={16} aria-hidden="true" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
          <div>
            <h2 className="label-mono text-[10px] font-bold text-cream">Espacio digital</h2>
            <p className="mt-6 text-sm leading-relaxed text-mute">{footer.copyright}<br />{footer.rights}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
