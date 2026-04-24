"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ITEMS = [
  { href: "/", label: "Home" },
  { href: "/coffee", label: "Coffee" },
  { href: "/people", label: "People" },
  { href: "/store", label: "Store" },
  { href: "/visit", label: "Visit" },
];

export function MobileNav() {
  const pathname = usePathname();
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
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
