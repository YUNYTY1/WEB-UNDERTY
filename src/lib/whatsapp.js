import { WHATSAPP_NUMBER } from '../data/site'

// Abre WhatsApp con un mensaje prellenado. Cambia esta función si luego conectan otro canal.
export const whatsappLink = (message = 'Hola, quiero información sobre sus servicios.') =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
