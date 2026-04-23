type BeanProps = {
  size?: number;
  variant?: number;
  color?: string;
  strokeWidth?: number;
  fill?: string;
};

const PATHS = [
  <g key="0">
    <ellipse cx="30" cy="40" rx="20" ry="28" />
    <path d="M 30 14 Q 26 40 30 66" fill="none" strokeLinecap="round" />
  </g>,
  <g key="1">
    <path d="M 30 12 Q 54 20 52 42 Q 50 66 30 70 Q 10 66 8 42 Q 6 20 30 12 Z" />
    <path d="M 30 16 Q 24 30 30 42 Q 36 54 30 66" fill="none" strokeLinecap="round" />
  </g>,
  <g key="2">
    <path d="M 30 8 Q 48 18 48 40 Q 48 64 30 72 Q 12 64 12 40 Q 12 18 30 8 Z" />
    <path d="M 30 12 L 30 68" fill="none" strokeLinecap="round" />
  </g>,
  <g key="3">
    <path d="M 28 10 Q 50 16 50 38 Q 50 62 32 70 Q 10 64 10 42 Q 10 18 28 10 Z" />
    <path d="M 28 14 Q 22 28 32 40 Q 42 52 30 66" fill="none" strokeLinecap="round" />
  </g>,
  <g key="4">
    <circle cx="30" cy="40" r="26" />
    <path d="M 30 16 Q 28 40 30 64" fill="none" strokeLinecap="round" />
  </g>,
];

export function Bean({
  size = 60,
  variant = 0,
  color = "currentColor",
  strokeWidth = 1.5,
  fill = "none",
}: BeanProps) {
  const shape = PATHS[variant % PATHS.length];
  return (
    <svg
      viewBox="0 0 60 80"
      width={size}
      height={size * 1.33}
      style={{ display: "block" }}
      fill={fill}
      stroke={color}
      strokeWidth={strokeWidth}
    >
      {shape}
    </svg>
  );
}
