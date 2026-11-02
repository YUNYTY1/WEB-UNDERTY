# Grupo Underty – Sitio web

Vite + React + Tailwind CSS 3. Íconos con `lucide-react`, fuentes locales con `@fontsource`.

## Cómo correrlo
```bash
npm install
npm run dev      # desarrollo
npm run build    # producción (carpeta dist/)
```

## Estructura
```
src/
  data/        site.js → todos los textos, listas, links y el número de WhatsApp
  components/  Logo, NavBar, Button, SectionLabel, SectionTitle, ProjectCard, SolutionModal, WhatsAppButton
  sections/    Hero, About, Solutions, Projects, Process, DemoCTA, HowWeWork, Contact, Footer
  assets/      hero-orb.svg, solution-illustration.svg, project-1..6.svg (placeholders)
  lib/         whatsapp.js (arma el link de WhatsApp con mensaje)
  App.jsx      solo ordena las secciones
public/        favicon.svg, og-image.png
```

## Comportamiento clave
- **Proyectos:** carrusel infinito de derecha a izquierda; se pausa con cursor encima, foco o clic (otro clic reanuda).
- **Soluciones:** cada fila abre un modal (Esc, clic fuera o X para cerrar). Su botón lleva a Contacto con la opción relacionada preseleccionada.
- **Contacto:** al elegir una opción cambia el texto del botón "Hablemos sobre…" (debajo de las opciones).

## Pendientes antes de publicar
- [ ] Número real de WhatsApp en `src/data/site.js` (`WHATSAPP_NUMBER`).
- [ ] Links reales de LinkedIn e Instagram (`footer.social`) y confirmar el correo `hola@grupounderty.com`.
- [ ] Reemplazar `src/assets/hero-orb.svg` por la esfera 3D real (mismo nombre; si es .png/.jpg cambia el import en `Hero.jsx`).
- [ ] Reemplazar `project-1..6.svg` y los textos de `projects` por proyectos reales; enlazar cada "Ver proyecto" (`url`).
- [ ] Textos de las 5 soluciones distintas a CRM (`solutions` en `site.js`) son provisionales; confirmar.
- [ ] Confirmar el año del copyright (el diseño dice 2025).
- [ ] Cambiar `og:image` en `index.html` por la URL absoluta de tu dominio y reemplazar `public/og-image.png`.
- [ ] Decidir si el botón del Contacto y "Solicitar mi demo" siguen yendo a WhatsApp o se conectan a un backend/formulario (hay comentarios `TODO` en `Contact.jsx` y `DemoCTA.jsx`).
