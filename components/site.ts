export const WHATSAPP_NUMBER = "50253541465";

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hola, me interesa el proyecto residencial, quisiera más información"
)}`;

export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
