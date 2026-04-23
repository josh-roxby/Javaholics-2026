import Link from "next/link";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Coffee", href: "/coffee" },
  { label: "People", href: "/people" },
  { label: "Store", href: "/store" },
  { label: "Visit", href: "/visit" },
];

type NavProps = {
  current?: string;
  absolute?: boolean;
};

export function Nav({ current = "Home", absolute = true }: NavProps) {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "22px 48px",
        position: absolute ? "absolute" : "relative",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
      }}
    >
      <Link
        href="/"
        style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}
      >
        <svg width="28" height="28" viewBox="0 0 60 80">
          <path
            d="M 30 10 Q 52 18 52 40 Q 52 62 30 70 Q 8 62 8 40 Q 8 18 30 10 Z"
            fill="none"
            stroke="var(--ember)"
            strokeWidth="2.5"
          />
          <path
            d="M 30 14 Q 25 30 30 40 Q 35 50 30 66"
            fill="none"
            stroke="var(--ember)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
        <div
          style={{
            fontFamily: '"Fraunces", serif',
            fontSize: 22,
            fontStyle: "italic",
            color: "var(--ink)",
          }}
        >
          Javaholics
        </div>
      </Link>

      <div style={{ display: "flex", gap: 32, fontSize: 14, fontWeight: 400 }}>
        {NAV_ITEMS.map((item) => {
          const isActive = item.label === current;
          return (
            <Link
              key={item.label}
              href={item.href}
              style={{
                opacity: isActive ? 1 : 0.7,
                color: isActive ? "var(--crema)" : "var(--ink)",
                cursor: "pointer",
                textDecoration: "none",
                position: "relative",
                paddingBottom: 4,
                borderBottom: isActive ? "1px solid var(--crema)" : "1px solid transparent",
                transition: "all 200ms",
              }}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      <div className="jv-mono jv-caps" style={{ opacity: 0.55 }}>
        Open today, 7:30 to 18:00
      </div>
    </nav>
  );
}
