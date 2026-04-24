"use client";

import { useRef, useState } from "react";
import { Bean } from "../bean";

const PEOPLE = [
  { name: "Dara", role: "Owner, roaster, DJ", bean: 0 },
  { name: "Niamh", role: "Lead barista", bean: 1 },
  { name: "Tomás", role: "Roaster", bean: 2 },
  { name: "Aoife", role: "Barista, baker", bean: 3 },
  { name: "Marcus", role: "Weekend barista", bean: 4 },
  { name: "Lola", role: "Shop dog", bean: 1 },
];

const carouselBtn: React.CSSProperties = {
  width: 44,
  height: 44,
  borderRadius: "50%",
  border: "1px solid var(--line-strong)",
  background: "transparent",
  color: "var(--ink)",
  fontSize: 16,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 200ms",
};

type SectionPeopleProps = {
  eyebrow?: string;
};

export function SectionPeople({ eyebrow = "03  /  The People" }: SectionPeopleProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState<number | null>(null);

  const scrollBy = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section
      style={{
        background: "var(--bg)",
        color: "var(--ink)",
        padding: "var(--section-py) 0",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 var(--container-px)",
        }}
      >
        <div
          className="jv-grid-stack"
          style={{
            gridTemplateColumns: "1fr auto auto",
            alignItems: "end",
            gap: 48,
            marginBottom: 56,
          }}
        >
          <div>
            <div
              className="jv-caps"
              style={{ opacity: 0.55, color: "var(--crema)", marginBottom: 20 }}
            >
              {eyebrow}
            </div>
            <h2
              className="jv-display jv-section-title"
              style={{
                fontSize: "clamp(44px, 6vw, 84px)",
                margin: 0,
                lineHeight: 1.02,
                fontWeight: 400,
              }}
            >
              The faces{" "}
              <span style={{ fontStyle: "italic", color: "var(--crema)" }}>behind the bar.</span>
            </h2>
          </div>
          <div
            style={{ maxWidth: 280, fontSize: 15, lineHeight: 1.55, color: "var(--ink-soft)" }}
          >
            Six humans and a dog. Most of us live around here.
          </div>
          <div className="jv-people-arrows" style={{ display: "flex", gap: 10 }}>
            <button onClick={() => scrollBy(-1)} aria-label="Previous" style={carouselBtn}>
              ←
            </button>
            <button onClick={() => scrollBy(1)} aria-label="Next" style={carouselBtn}>
              →
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="jv-hide-scrollbar"
        style={{
          display: "flex",
          gap: 20,
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          padding: "8px var(--container-px) 24px",
          scrollbarWidth: "none",
        }}
      >
        {PEOPLE.map((p, i) => (
          <div
            key={i}
            className="jv-people-card"
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            style={{
              flex: "0 0 300px",
              height: 400,
              scrollSnapAlign: "start",
              background: "var(--bg-2)",
              border: "1px solid",
              borderColor: hover === i ? "var(--line-strong)" : "var(--line)",
              padding: "36px 28px 32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              transition: "all 300ms",
            }}
          >
            <div className="jv-mono jv-caps" style={{ opacity: 0.55 }}>
              0{i + 1}
            </div>
            <div
              style={{
                alignSelf: "center",
                color: hover === i ? "var(--ember)" : "var(--roast)",
                transition: "all 400ms cubic-bezier(.2,.7,.3,1)",
                transform: hover === i ? "translateY(-6px) rotate(-4deg)" : "none",
              }}
            >
              <Bean
                size={130}
                variant={p.bean}
                color="var(--crema)"
                fill="currentColor"
                strokeWidth={1.2}
              />
            </div>
            <div>
              <div
                className="jv-display"
                style={{ fontSize: 32, lineHeight: 1, marginBottom: 8, fontWeight: 400 }}
              >
                {p.name}
              </div>
              <div className="jv-mono jv-caps" style={{ opacity: 0.6 }}>
                {p.role}
              </div>
            </div>
          </div>
        ))}
        <div style={{ flex: "0 0 1px" }} />
      </div>
    </section>
  );
}
