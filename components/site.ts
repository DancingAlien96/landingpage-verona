export const WHATSAPP_NUMBER = "50253541465";

// ID del formulario de Formspree (https://formspree.io).
// Crea una cuenta, crea un formulario y pega aquí el código que aparece
// en la URL del endpoint, p. ej. para https://formspree.io/f/mzzbqkdw
// el ID es "mzzbqkdw". Mientras esté vacío, el formulario de cotización
// abre WhatsApp y el newsletter solo muestra confirmación.
export const FORMSPREE_ID = "";

export const FORMSPREE_ENDPOINT = FORMSPREE_ID
  ? `https://formspree.io/f/${FORMSPREE_ID}`
  : "";

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hola, me interesa el proyecto residencial, quisiera más información"
)}`;

export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
