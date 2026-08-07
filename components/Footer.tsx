import { MailIcon, PhoneIcon, WhatsAppIcon } from "./icons";
import { WHATSAPP_LINK } from "./site";

const NAV = [
  { label: "Inicio", href: "#hero" },
  { label: "Video", href: "#hero" },
  { label: "Beneficios", href: "#modelo" },
  { label: "Galería", href: "#hero" },
  { label: "Financiamiento", href: "#financiamiento" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950 text-white/70">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <span className="font-serif text-2xl text-white">Residencial</span>
            <p className="mt-4 text-sm leading-relaxed">
              Proyecto residencial exclusivo de solo seis viviendas.
              Arquitectura contemporánea, áreas verdes y financiamiento propio.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-white">
              Navegación
            </h4>
            <div className="mt-5 space-y-3">
              {NAV.map((n) => (
                <a
                  key={n.label}
                  href={n.href}
                  className="block text-sm transition-colors hover:text-gold-300"
                >
                  {n.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-white">
              Contacto
            </h4>
            <div className="mt-5 space-y-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm transition-colors hover:text-gold-300"
              >
                <WhatsAppIcon width={16} height={16} /> WhatsApp
              </a>
              <a
                href="tel:+50253541465"
                className="flex items-center gap-3 text-sm transition-colors hover:text-gold-300"
              >
                <PhoneIcon width={16} height={16} /> Llamar
              </a>
              <a
                href="mailto:info@residencial.com"
                className="flex items-center gap-3 text-sm transition-colors hover:text-gold-300"
              >
                <MailIcon width={16} height={16} /> Correo
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-white">
              Ubicación
            </h4>
            <p className="mt-5 text-sm">Guatemala, Guatemala</p>
            <p className="mt-1 text-sm">Zona residencial exclusiva</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs sm:flex-row">
          <p>© 2026 Proyecto Residencial. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-gold-300">
              Privacidad
            </a>
            <a href="#" className="transition-colors hover:text-gold-300">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
