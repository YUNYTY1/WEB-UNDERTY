import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '../lib/whatsapp'

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hablemos por WhatsApp"
      className="fixed bottom-4 right-4 z-30 flex h-14 items-center gap-3 rounded-full bg-mint px-4 text-ink shadow-lg shadow-black/40 transition-transform hover:scale-[1.03] sm:bottom-6 sm:right-6 sm:h-[68px] sm:px-6"
    >
      <MessageCircle size={26} aria-hidden="true" />
      <span className="hidden font-mono text-[11px] uppercase tracking-[0.12em] sm:inline">Hablemos por WhatsApp</span>
    </a>
  )
}
