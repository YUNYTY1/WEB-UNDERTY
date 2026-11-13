import { MessageCircle } from 'lucide-react'
import { WHATSAPP_NUMBER } from '../data/site'

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#a3e635] text-ink shadow-[0_10px_25px_rgba(163,230,53,0.3)] transition-all duration-300 hover:scale-110 hover:bg-[#bef264]"
    >
      <MessageCircle size={26} className="fill-ink/10" />
    </a>
  )
}