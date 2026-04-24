type WobblyRuleProps = {
  variant?: number;
  style?: React.CSSProperties;
  className?: string;
  color?: string;
};

const PATHS = [
  "M 0 2 Q 62 1.2 125 1.8 T 250 2.2 T 375 1.6 T 500 2.1 T 625 1.4 T 750 2.3 T 875 1.7 T 1000 2",
  "M 0 2.1 Q 55 2.7 110 2 T 230 1.5 T 360 2.3 T 490 1.7 T 620 2.1 T 780 1.9 T 890 2.2 T 1000 1.9",
  "M 0 1.9 Q 70 2.5 140 1.8 T 260 2.4 T 390 1.6 T 520 2 T 660 2.5 T 800 1.6 T 910 2.3 T 1000 2",
];

export function WobblyRule({
  variant = 0,
  style,
  className,
  color = "var(--line-strong)",
}: WobblyRuleProps) {
  return (
    <svg
      viewBox="0 0 1000 4"
      preserveAspectRatio="none"
      aria-hidden
      className={className}
      style={{
        display: "block",
        width: "100%",
        height: 3,
        color,
        ...style,
      }}
    >
      <path
        d={PATHS[variant % PATHS.length]}
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
