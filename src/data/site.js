import ramen from '../assets/ramen.jpeg'
import gym from '../assets/gym.jpeg'
import barber from '../assets/barber.jpeg'
import fogon from '../assets/fogon.jpeg'
import videounderty from '../assets/videounderty.mp4'

// TODO (pendiente): reemplazar por el número real, con código de país y sin "+" (ej. 51987654321)
export const WHATSAPP_NUMBER = '51900000000'

export const brand = { name: 'Grupo Underty', email: 'hola@grupounderty.com' }

export const navLinks = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'nosotros', label: 'Nosotros' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'contacto', label: 'Contacto' },
]

export const hero = {
  lines: ['Ideas que se', 'convierten en', 'tecnología'],
  text: 'Desarrollamos experiencias digitales y soluciones tecnológicas que ayudan a las empresas a evolucionar, conectar y crecer.',
  primaryCta: 'Iniciar un proyecto',
  secondaryCta: 'Explorar nuestros servicios',
  tag: 'Diseño · Código · Datos',
  video: videounderty, // <--- Aquí pasamos la variable importada en lugar de la ruta en texto
}

export const about = {
  title: [
    { t: 'La tecnología no', br: true },
    { t: 'es el ' },
    { t: 'destino.', m: true, br: true }, // <--- 'm: true' aplica el color lila
    { t: 'es el camino', br: true },
    { t: 'para llegar más lejos.', m: true }, // <--- 'm: true' aplica el color lila
  ],
  studio: {
    label: 'El estudio',
    text: 'En Grupo Underty creemos que cada proyecto comienza con una idea y una oportunidad. Nuestro trabajo consiste en convertir esas ideas en soluciones digitales funcionales, intuitivas y preparadas para responder a las necesidades reales de cada negocio.',
    link: 'Conoce nuestro enfoque',
  },
  point: { label: 'Nuestro punto de partida', title: 'Transformamos ideas en', accent: 'soluciones digitales.' },
}

export const solutionsIntro = {
  title: [{ t: 'Lo digital', br: true }, { t: 'que sí mueve.', m: true }],
  text: 'Convertimos retos de negocio en herramientas simples, medibles y preparadas para crecer.',
  card: { label: 'Una mirada completa', title: 'De la idea al impacto.', tags: ['Diseño', 'Código', 'Datos'] },
}

export const solutions = [
  { title: 'CRM', contactOption: 'crm', text: 'Centraliza clientes, oportunidades y equipos comerciales en un solo lugar.' },
  { title: 'E-commerce', contactOption: 'tienda', text: 'Vende por internet con una tienda clara, rápida y lista para crecer.' },
  { title: 'Apps móviles', contactOption: 'app', text: 'Conecta con tus usuarios desde una app pensada para su día a día.' },
  { title: 'Sistemas a medida', contactOption: 'datos', text: 'Software hecho a la medida de tus procesos, sin adaptarte a plantillas.' },
  { title: 'Soluciones digitales', contactOption: 'datos', text: 'Herramientas digitales que simplifican la operación de tu negocio.' },
  { title: 'Datos y analítica', contactOption: 'datos', text: 'Convierte tus datos en decisiones con paneles claros y medibles.' },
]

export const solutionPoints = [
  'Diseño pensado para tu negocio',
  'Tecnología que puede crecer contigo',
  'Resultados claros para tu equipo',
]

export const projects = [
  { name: 'FOGON', category: 'Landing Page', text: 'Pagina informativa', image: fogon, alt: '', url: 'https://fogon-lyh3.vercel.app' },
  { name: "GYM GAIN", category: 'Pagina Web', text: 'Conexiones de trabajo diseñadas para crecer contigo.', image: gym, alt: '', url: 'https://nueva-pag-gym.vercel.app' },
  { name: 'Barber Future', category: 'Plataforma de datos', text: 'Una nueva perspectiva para equipos que toman decisiones.', image: barber, alt: '', url: 'https://web-barberia-one.vercel.app' },
  { name: 'Uri Ramen', category: 'Producto digital', text: 'Procesos simples para que las ideas avancen sin fricción.', image: ramen, alt: '', url: 'https://uri-ramen.vercel.app' },
]

export const process = {
  title: [{ t: 'De la idea', br: true }, { t: 'a la solución.', m: true }],
  text: 'Cuatro etapas que nos ayudan a convertir la incertidumbre en movimiento.',
  steps: [
    { title: 'Descubrir', text: 'Comprendemos la idea, el contexto y la oportunidad real.' },
    { title: 'Diseñar', text: 'Damos forma a una experiencia clara, útil y memorable.' },
    { title: 'Desarrollar', text: 'Convertimos el concepto en un producto sólido y escalable.' },
    { title: 'Evolucionar', text: 'Medimos, aprendemos y seguimos construyendo contigo.' },
  ],
}

export const demo = {
  label: 'Demo gratis',
  title: 'Pide tu demo gratis.',
  accent: 'Sin compromiso.',
  text: 'Te mostraremos cómo puedes transformar tu idea en práctica, una demostración guiada por lo que tu negocio necesita, sin costo y sin compromiso.',
  cta: 'Solicitar mi demo',
  message: 'Hola, quiero pedir una demo gratis.',
  checks: ['Recibida y guiada por la solución', 'Enfocada en tu proyecto y visión', 'Sin costo y sin compromiso'],
}

export const howWeWork = {
  title: [
    { t: 'No se trata', br: true }, { t: 'solo de', br: true },
    { t: 'desarrollar.', m: true, br: true },
    { t: 'Se trata', br: true }, { t: 'de resolver.', m: true },
  ],
  items: [
    { title: 'Soluciones a medida', text: 'Cada proyecto empieza entendiendo tu contexto y termina resolviendo una necesidad concreta.' },
    { title: 'Diseño centrado en las personas', text: 'Creamos experiencias que se sienten simples porque fueron pensadas a fondo.' },
    { title: 'Enfoque estratégico', text: 'Buscamos que cada decisión de producto tenga una razón y un impacto.' },
    { title: 'Evolución tecnológica', text: 'Usamos la tecnología como herramienta para hacer avanzar lo importante.' },
  ],
}

export const contact = {
  title: [{ t: '¿Con', br: true }, { t: 'cual', br: true }, { t: 'proyecto', m: true, br: true }, { t: 'avanzamos?', m: true }],
  text: 'Cuéntanos qué necesitas y te ayudamos a encontrar el siguiente paso.',
  options: [
    { id: 'crm', title: 'Un CRM', sub: 'Organizar clientes y ventas', cta: 'Demo de un CRM', message: 'Hola, quiero hablar sobre un CRM.' },
    { id: 'tienda', title: 'Una tienda online', sub: 'Vender por internet', cta: 'Demo de una tienda online', message: 'Hola, quisiera informacion sobre una demo para una tienda online.' },
    { id: 'app', title: 'Una app móvil', sub: 'Conectar con tus usuarios', cta: 'Demo de una app móvil', message: 'Hola, quisiera informacion sobre una demo para una app móvil.' },
    { id: 'datos', title: 'Un sistema o datos', sub: 'Mejorar tus procesos', cta: 'Demo de un sistema o datos', message: 'Hola, quisiera informacion sobre una demo para sistema o datos.' },
  ],
}

export const footer = {
  left: 'Construimos futuros posibles -',
  right: 'Soluciones digitales para empresas que avanzan',
  description: 'Estudio de tecnología y experiencias digitales. Diseño, estrategia y desarrollo para convertir ideas en movimiento.',
  social: [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { name: 'Instagram', href: 'https://www.instagram.com/' },
  ],
  copyright: '© 2025 Grupo Underty',
  rights: 'Todos los derechos reservados.',
}