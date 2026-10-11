import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size = 18): SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
});

export const ArrowUpRight = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="M7 17 17 7M8 7h9v9" /></svg>
);
export const ChevronDown = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="m6 9 6 6 6-6" /></svg>
);
export const Menu = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const Close = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const Monitor = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></svg>
);
export const Layout = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>
);
export const Code = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="m9 8-4 4 4 4M15 8l4 4-4 4" /></svg>
);
export const PenTool = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.6 7.6" /><circle cx="11" cy="11" r="2" /></svg>
);
export const Sparkles = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z" /><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" /></svg>
);
export const Palette = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.6-.9 1.6-1.7 0-.9-.6-1.3-.6-2.1 0-.9.7-1.6 1.6-1.6H17a4 4 0 0 0 4-4c0-4.7-4-8.6-9-8.6z" /><circle cx="7.5" cy="11" r="1" /><circle cx="10" cy="7" r="1" /><circle cx="15" cy="7.5" r="1" /></svg>
);
export const Gem = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="M6 3h12l4 6-10 12L2 9z" /><path d="M2 9h20M12 21 8 9l4-6 4 6z" /></svg>
);
export const Megaphone = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="M3 11v2a1 1 0 0 0 1 1h3l7 5V5L7 10H4a1 1 0 0 0-1 1z" /><path d="M18 8a5 5 0 0 1 0 8" /></svg>
);
export const Camera = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="M4 7h3l2-3h6l2 3h3a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z" /><circle cx="12" cy="13" r="4" /></svg>
);
export const Users = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0" /><path d="M16 4.5a3.5 3.5 0 0 1 0 7M21.5 20a6.5 6.5 0 0 0-4-6" /></svg>
);
export const Handshake = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><rect x="3" y="4" width="18" height="14" rx="3" /><path d="M8 11l2.5 2.5L16 8" /><path d="M9 21h6" /></svg>
);
export const CheckCircle = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><circle cx="12" cy="12" r="9" /><path d="m8.5 12 2.5 2.5 4.5-5" /></svg>
);
export const TrendingUp = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="m3 17 6-6 4 4 8-8" /><path d="M15 7h6v6" /></svg>
);
export const ImageIcon = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-5-5L5 21" /></svg>
);
export const Message = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="M21 12a8.5 8.5 0 0 1-12.6 7.4L3 21l1.6-5.2A8.5 8.5 0 1 1 21 12z" /><path d="M9 10.5c.5 2 2 3.5 4 4" /></svg>
);
export const Mail = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
);
export const Phone = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg>
);
export const LinkedIn = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10v6M8 7.5v.01M12 16v-3.5a2 2 0 0 1 4 0V16M12 10v6" /></svg>
);
export const Instagram = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5v.01" /></svg>
);
export const XLogo = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="M4 4l16 16M20 4 4 20" /></svg>
);
export const Github = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" /></svg>
);
export const ArrowLeft = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
);
export const ArrowRight = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const Plus = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="M12 5v14M5 12h14" /></svg>
);
export const Check = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="m5 12 4.5 4.5L19 7" /></svg>
);
export const Search = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
);
export const Rocket = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1z" /><path d="M12 15l-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 0 1-4 2z" /><path d="M9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0M12 15v5s3-.6 4-2c1.1-1.6 0-5 0-5" /></svg>
);
export const LifeBuoy = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /><path d="m4.9 4.9 4.3 4.3M14.8 14.8l4.3 4.3M14.8 9.2l4.3-4.3M4.9 19.1l4.3-4.3" /></svg>
);
export const Compass = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5-5 2 2-5z" /></svg>
);
export const Building = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><rect x="4" y="3" width="16" height="18" rx="1.5" /><path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01M10 21v-3h4v3" /></svg>
);
export const Briefcase = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" /></svg>
);
export const Layers = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="m12 3 9 5-9 5-9-5z" /><path d="m3 13 9 5 9-5" /></svg>
);
export const Target = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></svg>
);
export const Clock = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);
export const Shield = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z" /><path d="m9 12 2 2 4-4" /></svg>
);
export const FileText = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><path d="M14 3v6h6M8 13h8M8 17h5" /></svg>
);
