import { useId } from 'react';

type Props = { size?: number; className?: string; glow?: boolean };

/** The BEYOND "b" mark: a tilted tile above a thick open ring. */
export default function BeyondMark({ size = 28, className, glow = false }: Props) {
  const id = useId().replace(/:/g, '');
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 200 200"
      aria-hidden="true"
      style={{ overflow: 'visible' }}
    >
      <defs>
        <linearGradient id={`tile-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6E7DFF" />
          <stop offset="1" stopColor="#7B3FE4" />
        </linearGradient>
        <linearGradient id={`ring-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7A4BFF" />
          <stop offset="0.55" stopColor="#A83CE8" />
          <stop offset="1" stopColor="#D843D8" />
        </linearGradient>
        {glow && (
          <filter id={`glow-${id}`} filterUnits="userSpaceOnUse" x="-80" y="-80" width="360" height="360">
            <feGaussianBlur stdDeviation="14" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        )}
      </defs>
      <g filter={glow ? `url(#glow-${id})` : undefined}>
        <rect
          x="58"
          y="10"
          width="52"
          height="78"
          rx="12"
          transform="rotate(20 84 49)"
          fill={`url(#tile-${id})`}
        />
        {/* open ring: outer r=62, inner r=22, gap at upper-left */}
        <path
          d="M110 70 A62 62 0 1 1 48 132 L88 132 A22 22 0 1 0 110 110 Z"
          fill={`url(#ring-${id})`}
        />
      </g>
    </svg>
  );
}
