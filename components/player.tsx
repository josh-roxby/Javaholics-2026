"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { SPOTIFY_EMBED_URL } from "@/lib/config";

type PlayerCtx = {
  open: boolean;
  setOpen: (v: boolean) => void;
  toggle: () => void;
};

const PlayerContext = createContext<PlayerCtx | null>(null);

export function usePlayer() {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error("usePlayer must be used within PlayerProvider");
  return ctx;
}

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((o) => !o);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <PlayerContext.Provider value={{ open, setOpen, toggle }}>
      {children}
      <PlayerFab />
      <PlayerModal />
    </PlayerContext.Provider>
  );
}

function MusicIcon({ size = 20 }: { size?: number }) {
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

function PlayerFab() {
  const { open, toggle } = usePlayer();
  return (
    <button
      type="button"
      className={`jv-player-fab${open ? " active" : ""}`}
      aria-label="House playlist"
      aria-expanded={open}
      onClick={toggle}
    >
      <MusicIcon />
    </button>
  );
}

function PlayerModal() {
  const { open, setOpen } = usePlayer();

  // Lazy-load the iframe: only mount after first open.
  const [everOpened, setEverOpened] = useState(false);
  useEffect(() => {
    if (open) setEverOpened(true);
  }, [open]);

  return (
    <>
      <div
        className={`jv-player-backdrop${open ? " open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden
      />
      <aside
        className={`jv-player-modal${open ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="House playlist"
        aria-hidden={!open}
      >
        <div className="jv-player-head">
          <div>
            <div
              className="jv-mono jv-caps"
              style={{ opacity: 0.55, color: "var(--crema)" }}
            >
              On the speakers
            </div>
            <div
              className="jv-display"
              style={{
                fontSize: 18,
                fontStyle: "italic",
                color: "var(--ink)",
                marginTop: 4,
                fontWeight: 400,
              }}
            >
              House playlist
            </div>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close player"
            className="jv-player-close"
          >
            ×
          </button>
        </div>

        <div className="jv-player-frame-wrap">
          {everOpened && (
            <iframe
              src={SPOTIFY_EMBED_URL}
              width="100%"
              height="352"
              style={{ border: 0, borderRadius: 6, colorScheme: "normal" }}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="House playlist — Spotify"
            />
          )}
        </div>

        <div
          className="jv-mono jv-caps"
          style={{ opacity: 0.5, marginTop: 10, fontSize: 10 }}
        >
          Curated by Dara · opens on Spotify
        </div>
      </aside>
    </>
  );
}
