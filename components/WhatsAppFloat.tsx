import { WhatsAppIcon } from "./icons";
import { WHATSAPP_LINK } from "./site";

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-0 bg-gold-500 text-white shadow-[0_10px_30px_rgba(176,132,40,0.4)] transition-colors hover:bg-gold-600"
    >
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-300 group-hover:max-w-40 group-hover:pl-5">
        Escríbenos
      </span>
      <span className="flex h-13 w-13 items-center justify-center p-4">
        <WhatsAppIcon />
      </span>
    </a>
  );
}
