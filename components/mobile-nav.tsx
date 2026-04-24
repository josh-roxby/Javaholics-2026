"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePlayer } from "./player";

type IconProps = { size?: number };

function HomeIcon({ size = 18 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1v-9z" />
    </svg>
  );
}

function CoffeeIcon({ size = 18 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M6 9h11v5a4 4 0 0 1-4 4h-3a4 4 0 0 1-4-4V9z" />
      <path d="M17 11h2a2 2 0 0 1 0 4h-2" />
      <path d="M9 3v2M12 3v2M15 3v2" />
    </svg>
  );
}

function PeopleIcon({ size = 18 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="9" cy="9" r="3" />
      <path d="M3 20c0-3 3-5 6-5s6 2 6 5" />
      <circle cx="16" cy="10" r="2.4" />
      <path d="M14 15.5c3-0.5 6 1 7 4" />
    </svg>
  );
}

function StoreIcon({ size = 18 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 8h14l-1 12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1L5 8z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}

function PinIcon({ size = 18 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z" />
      <circle cx="12" cy="9" r="2.4" />
    </svg>
  );
}

function MusicIcon({ size = 18 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

const ITEMS = [
  { href: "/", label: "Home", Icon: HomeIcon },
  { href: "/coffee", label: "Coffee", Icon: CoffeeIcon },
  { href: "/people", label: "People", Icon: PeopleIcon },
  { href: "/store", label: "Store", Icon: StoreIcon },
  { href: "/visit", label: "Visit", Icon: PinIcon },
];

export function MobileNav() {
  const pathname = usePathname();
  const { open, toggle } = usePlayer();
  return (
    <nav className="jv-mnav" aria-label="Primary">
      <div className="jv-mnav-pill">
        {ITEMS.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`jv-mnav-item${active ? " active" : ""}`}
              aria-current={active ? "page" : undefined}
            >
              <span className="jv-mnav-circle">
                <item.Icon />
              </span>
              <span className="jv-mnav-label">{item.label}</span>
            </Link>
          );
        })}
        <button
          type="button"
          onClick={toggle}
          className={`jv-mnav-item${open ? " active" : ""}`}
          aria-label="House playlist"
          aria-expanded={open}
        >
          <span className="jv-mnav-circle">
            <MusicIcon />
          </span>
          <span className="jv-mnav-label">Music</span>
        </button>
      </div>
    </nav>
  );
}
