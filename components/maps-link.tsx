"use client";

import { useEffect, useState } from "react";

const ADDRESS = "Javaholics, Merville Ave, Fairview, Dublin 3, D03 XK52";
const GOOGLE_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;
const APPLE_URL = `https://maps.apple.com/?q=${encodeURIComponent(ADDRESS)}`;

type MapsLinkProps = {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

export function MapsLink({ className, style, children }: MapsLinkProps) {
  const [href, setHref] = useState(GOOGLE_URL);

  useEffect(() => {
    const ua = navigator.userAgent;
    const isApple = /iPhone|iPad|iPod|Macintosh/.test(ua) && !/Android/.test(ua);
    setHref(isApple ? APPLE_URL : GOOGLE_URL);
  }, []);

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} style={style}>
      {children}
    </a>
  );
}
