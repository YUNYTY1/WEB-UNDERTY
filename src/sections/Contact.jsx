import { useState } from 'react'
import { ArrowUpRight, MessageCircle } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import { WHATSAPP_NUMBER, contact } from '../data/site'

export default function Contact() {
  const [selectedOption, setSelectedOption] = useState(contact.options[0])

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(selectedOption.message)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank')
  }

  return (
    <section id="contacto" className="section-pad">
      <div className="container-x">
        {/* Gran tarjeta contenedora con el contorno verde lima */}
        <div className="relative overflow-hidden rounded-3xl border border-[#a3e635] bg-gradient-to-br from-surface via-[#121412] to-[#0d0f0d] p-6 md:p-12 shadow-2xl">
          
          {/* Círculos decorativos sutiles en la esquina superior derecha */}
          <div className="absolute -right-16 -top-16 pointer-events-none opacity-20" aria-hidden="true">
            <div className="relative flex items-center justify-center">
              <div className="absolute h-72 w-72 rounded-full border border-line" />
              <div className="absolute h-52 w-52 rounded-full border border-line" />
              <div className="absolute h-32 w-32 rounded-full border border-line" />
            </div>
          </div>

          <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16 items-center">
            
            {/* Columna Izquierda: Títulos y descripción */}
            <div>
              <SectionLabel>Contacto</SectionLabel>
              
              {/* Título principal con "PROYECTO AVANZAMOS?" en color verde limón */}
              <h2 className="mt-8 font-display text-[clamp(2.4rem,4.5vw,4.5rem)] font-bold uppercase tracking-[-0.03em] leading-[0.95] text-cream">
                ¿CON CUAL <br />
                <span className="text-[#a3e635]">PROYECTO AVANZAMOS?</span>
              </h2>

              <p className="mt-6 text-mute text-base leading-relaxed max-w-md">
                {contact.text}
              </p>
            </div>

            {/* Columna Derecha: Opciones y Botón interactivo de WhatsApp en verde */}
            <div className="flex flex-col gap-6">
              
              {/* Etiqueta superior de guía */}
              <span className="font-mono text-xs uppercase tracking-widest text-[#a3e635] font-semibold">
                Empieza por aquí
              </span>

              {/* Opciones de selección en cuadrícula */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contact.options.map((opt) => {
                  const isSelected = selectedOption.id === opt.id
                  return (
                    <div
                      key={opt.id}
                      onClick={() => setSelectedOption(opt)}
                      className={`cursor-pointer rounded-2xl border p-5 transition-all duration-300 flex flex-col justify-between ${
                        isSelected 
                          ? 'border-[#a3e635] bg-[#a3e635]/10 shadow-lg' 
                          : 'border-line bg-[#141614]/80 hover:border-[#a3e635]/50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className={`h-5 w-5 rounded-full border flex items-center justify-center ${isSelected ? 'border-[#a3e635] bg-[#a3e635]' : 'border-line'}`}>
                          {isSelected && <div className="h-2 w-2 rounded-full bg-ink" />}
                        </div>
                        <ArrowUpRight size={18} className={isSelected ? 'text-[#a3e635]' : 'text-mute'} />
                      </div>
                      <div>
                        <h4 className="font-display text-base font-bold uppercase tracking-wide text-cream">
                          {opt.title}
                        </h4>
                        <p className="text-xs text-mute mt-1">
                          {opt.sub}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Botón grande de acción conectado a WhatsApp en color verde lima */}
              <button
                onClick={handleWhatsAppClick}
                className="mt-2 group flex items-center justify-between rounded-2xl bg-[#a3e635] px-6 py-5 text-ink transition-all duration-300 hover:bg-[#bef264] hover:scale-[1.01] shadow-[0_10px_30px_rgba(163,230,53,0.25)] cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-[#a3e635]">
                    <MessageCircle size={20} />
                  </div>
                  <span className="font-display text-base sm:text-lg font-bold uppercase tracking-wide">
                    {selectedOption.cta}
                  </span>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-[#a3e635] transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowUpRight size={20} />
                </div>
              </button>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}