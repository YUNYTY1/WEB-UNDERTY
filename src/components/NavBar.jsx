import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import Logo from './Logo'
import Button from './Button'
import { navLinks } from '../data/site'

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('inicio')

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' },
    )
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/85 backdrop-blur">
      <div className="container-x flex h-[72px] items-center justify-between lg:h-[89px]">
        <Logo />
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex gap-10">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  aria-current={active === l.id ? 'page' : undefined}
                  className={`border-b pb-1 text-[13px] font-semibold uppercase tracking-[0.14em] transition-colors ${active === l.id ? 'border-cream text-cream' : 'border-transparent text-mute hover:text-cream'}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Button href="#contacto" icon={ArrowUpRight} className="hidden h-12 lg:inline-flex">Hablemos de tu proyecto</Button>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-line lg:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>
      {open && (
        <nav id="menu-movil" aria-label="Menú móvil" className="border-t border-line bg-ink lg:hidden">
          <ul className="container-x flex flex-col py-4">
            {navLinks.map((l) => (
              <li key={l.id} className="border-b border-line last:border-0">
                <a href={`#${l.id}`} onClick={() => setOpen(false)} className="block py-4 text-sm font-semibold uppercase tracking-[0.14em]">{l.label}</a>
              </li>
            ))}
            <li className="pt-4"><Button href="#contacto" icon={ArrowUpRight} onClick={() => setOpen(false)} className="w-full">Hablemos de tu proyecto</Button></li>
          </ul>
        </nav>
      )}
    </header>
  )
}
