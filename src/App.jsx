import NavBar from './components/NavBar'
import WhatsAppButton from './components/WhatsAppButton'
import Hero from './sections/Hero'
import About from './sections/About'
import Solutions from './sections/Solutions'
import Projects from './sections/Projects'
import Process from './sections/Process'
import DemoCTA from './sections/DemoCTA'
import HowWeWork from './sections/HowWeWork'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <About />
        <Solutions />
        <Projects />
        <Process />
        <DemoCTA />
        <HowWeWork />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
