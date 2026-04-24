"use client";

import { useEffect, useState } from "react";
import { Bean } from "./bean";

const STORAGE_KEY = "jv-entered";

export function SiteGate() {
  const [shown, setShown] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) {
      setShown(false);
    }
  }, []);

  if (!shown) return null;

  const handleEnter = () => {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {}
    window.dispatchEvent(new CustomEvent("jv:enter"));
    setFading(true);
    setTimeout(() => setShown(false), 700);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Welcome to Javaholics"
      style={{
        position: "fixed",
        inset: 0,
        background: "var(--bg)",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 36,
        padding: 32,
        textAlign: "center",
        opacity: fading ? 0 : 1,
        pointerEvents: fading ? "none" : "auto",
        transition: "opacity 700ms cubic-bezier(.2,.7,.3,1)",
      }}
    >
      <div
        style={{
          color: "var(--ember)",
          animation: "jv-gate-bean 6s ease-in-out infinite alternate",
        }}
      >
        <Bean size={110} variant={1} color="var(--ember)" strokeWidth={1.5} />
      </div>

      <div>
        <div
          className="jv-mono jv-caps"
          style={{ opacity: 0.55, color: "var(--crema)", marginBottom: 14 }}
        >
          Est. 2019 · Fairview, Dublin
        </div>
        <div
          className="jv-display"
          style={{
            fontSize: "clamp(48px, 8vw, 88px)",
            fontWeight: 400,
            color: "var(--ink)",
            fontStyle: "italic",
            lineHeight: 1,
          }}
        >
          Javaholics
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 15,
            color: "var(--ink-soft)",
            maxWidth: 420,
          }}
        >
          Coffee, community, and house vibes across from the park.
        </div>
      </div>

      <button
        className="btn btn-primary"
        onClick={handleEnter}
        autoFocus
        style={{ minWidth: 160 }}
      >
        Enter →
      </button>
    </div>
  );
}
