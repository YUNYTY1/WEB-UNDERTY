import Preloader from './components/Preloader'
import NavBar from './components/NavBar'
import WhatsAppButton from './components/WhatsAppButton'
import VideoMarquee from './components/VideoMarquee'
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
      {/* Pantalla de carga animada (3 segundos) */}
      <Preloader />

      <NavBar />
      <main>
        <Hero />
        <VideoMarquee />
        <About />
        <VideoMarquee />
        <Solutions />
        <VideoMarquee />
        <Projects />
        <VideoMarquee />
        <Process />
        <VideoMarquee />
        <DemoCTA />
        <VideoMarquee />
        <HowWeWork />
        <VideoMarquee />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}