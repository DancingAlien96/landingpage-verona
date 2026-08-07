import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export const BedIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6" />
    <path d="M3 18h18" />
    <path d="M5 10V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3" />
    <path d="M7 10h4v0" />
  </svg>
);

export const BathIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M4 12h16v2a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-2Z" />
    <path d="M6 12V6a2 2 0 0 1 4 0" />
    <path d="M7 21l-1 1M17 21l1 1" />
  </svg>
);

export const DiningIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M7 3v7M4.5 3v4M9.5 3v4M7 10v11" />
    <path d="M16 3c-1.7 0-3 2-3 5 0 2 1 3 3 3v10" />
  </svg>
);

export const KitchenIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M4 10h16" />
    <circle cx="8.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
    <circle cx="12" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
    <path d="M9 14h6" />
  </svg>
);

export const LaundryIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <circle cx="12" cy="13" r="4.5" />
    <circle cx="12" cy="13" r="1.8" />
    <circle cx="7.5" cy="6" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

export const GardenIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 21v-7" />
    <path d="M12 14c0-3.5 2.5-6 6-6 0 3.5-2.5 6-6 6Z" />
    <path d="M12 12c0-3.5-2.5-6-6-6 0 3.5 2.5 6 6 6Z" />
    <path d="M5 21h14" />
  </svg>
);

export const CarIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M5 12l1.5-4.5A2 2 0 0 1 8.4 6h7.2a2 2 0 0 1 1.9 1.5L19 12" />
    <path d="M4 12h16a1 1 0 0 1 1 1v4h-2M3 17v-4a1 1 0 0 1 1-1" />
    <circle cx="7.5" cy="17" r="1.8" />
    <circle cx="16.5" cy="17" r="1.8" />
    <path d="M9.3 17h5.4" />
  </svg>
);

export const BalconyIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M4 21V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16" />
    <path d="M3 13h18" />
    <path d="M7 13v8M12 13v8M17 13v8" />
    <path d="M12 3v10" />
  </svg>
);

export const RulerIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <rect x="2.5" y="9" width="19" height="6" rx="1" transform="rotate(-20 12 12)" />
    <path d="M8 13.5l1-2.8M12 12l1-2.8M16 10.5l1-2.8" />
  </svg>
);

export const SofaIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M5 11V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3" />
    <path d="M3 13a2 2 0 0 1 4 0v1h10v-1a2 2 0 0 1 4 0v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3Z" />
    <path d="M5 18v2M19 18v2" />
  </svg>
);

export const CrownIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M4 17l-1.5-9L8 11l4-6 4 6 5.5-3L20 17H4Z" />
    <path d="M4 20h16" />
  </svg>
);

export const WhatsAppIcon = (props: IconProps) => (
  <svg width={22} height={22} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

export const PhoneIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);

export const MailIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 6 10-6" />
  </svg>
);

export const CheckIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const InfoIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 8h.01M12 11v5" />
  </svg>
);

export const RotateIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M21 12a9 9 0 1 1-2.64-6.36" />
    <path d="M21 3v6h-6" />
  </svg>
);

export const ArrowDownIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 4v16M5 13l7 7 7-7" />
  </svg>
);

export const FileIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
    <path d="M14 2v6h6" />
    <path d="M9 13h6M9 17h6" />
  </svg>
);
