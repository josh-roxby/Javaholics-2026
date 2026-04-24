"use client";

import { useState } from "react";

type Quote = { name: string; note: string };

const QUOTES: Quote[] = [
  { name: "Siobhán", note: "Took me through lockdown, one takeaway flat white at a time." },
  { name: "Oisín", note: "I get more done here than in any office I've worked in." },
  { name: "Priya", note: "I walk past three other cafes to get to this one." },
  { name: "Conor", note: "Finish the park run, come here, the music is always right." },
  { name: "Hannah", note: "First cafe that made me feel like I live in Dublin." },
  { name: "Mark", note: "The house blend and a window seat is a full hour of peace." },
  { name: "Ellie", note: "Dara knows my dog's name before he knows mine and I love it." },
  { name: "Rory", note: "The Kochere on a filter, window seat, rain outside. Sorted." },
  { name: "Aine", note: "Honestly the best playlist in Dublin. I shazam half of it." },
  { name: "Tom", note: "Met my partner in the queue. Still come in every Sunday." },
];

function QuoteCard({ q }: { q: Quote }) {
  const [hover, setHover] = useState(false);
  return (
    <figure
      className="jv-quote-card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        margin: 0,
        padding: "22px 24px",
        background: hover ? "var(--bg)" : "var(--bg-3)",
        border: "1px solid",
        borderColor: hover ? "var(--line-strong)" : "var(--line)",
        width: 300,
        height: 180,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flex: "0 0 auto",
        whiteSpace: "normal",
        transition: "all 250ms",
        cursor: "default",
      }}
    >
      <div
        style={{
          fontFamily: '"Fraunces", serif',
          fontSize: 17,
          lineHeight: 1.4,
          color: "var(--ink)",
          fontStyle: "italic",
          fontWeight: 400,
        }}
      >
        {q.note}
      </div>
      <figcaption
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          paddingTop: 14,
          borderTop: "1px solid var(--line)",
        }}
      >
        <div
          style={{
            width: 26,
            height: 26,
            borderRadius: "50%",
            background: "var(--bg)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--crema)",
            fontSize: 12,
            fontFamily: '"Fraunces", serif',
            fontStyle: "italic",
          }}
        >
          {q.name[0]}
        </div>
        <div style={{ fontSize: 13, color: "var(--ink-soft)" }}>{q.name}</div>
      </figcaption>
    </figure>
  );
}

type RowProps = {
  quotes: Quote[];
  direction?: "left" | "right";
  duration?: number;
  paused: boolean;
  offset?: number;
};

function QuoteMarquee({ quotes, direction = "left", duration = 60, paused, offset = 0 }: RowProps) {
  const animName = direction === "left" ? "jv-qm-left" : "jv-qm-right";
  return (
    <div style={{ overflow: "hidden", padding: "4px 0" }}>
      <div
        style={{
          display: "inline-flex",
          gap: 20,
          paddingLeft: offset,
          animation: `${animName} ${duration}s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
          whiteSpace: "nowrap",
        }}
      >
        {[...quotes, ...quotes, ...quotes].map((q, i) => (
          <QuoteCard key={i} q={q} />
        ))}
      </div>
    </div>
  );
}

type SectionCommunityProps = {
  eyebrow?: string;
};

export function SectionCommunity({
  eyebrow = "04  /  The Community",
}: SectionCommunityProps) {
  const [paused, setPaused] = useState(false);
  const row1 = QUOTES;
  const row2 = [...QUOTES].reverse();

  return (
    <section
      style={{
        background: "var(--bg-2)",
        color: "var(--ink)",
        padding: "var(--section-py) 0",
        position: "relative",
        overflow: "hidden",
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
            gridTemplateColumns: "1fr auto",
            alignItems: "end",
            gap: 48,
            marginBottom: 64,
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
                fontSize: "clamp(40px, 5.5vw, 72px)",
                margin: 0,
                lineHeight: 1.02,
                fontWeight: 400,
              }}
            >
              In the words of{" "}
              <span style={{ fontStyle: "italic", color: "var(--crema)" }}>the regulars.</span>
            </h2>
          </div>
          <div
            className="jv-mono jv-caps jv-grid-header-meta"
            style={{ opacity: 0.45, whiteSpace: "nowrap" }}
          >
            A few of the many
          </div>
        </div>
      </div>

      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        style={{ display: "flex", flexDirection: "column", gap: 20 }}
      >
        <QuoteMarquee quotes={row1} direction="left" duration={70} paused={paused} />
        <QuoteMarquee
          quotes={row2}
          direction="right"
          duration={85}
          paused={paused}
          offset={60}
        />
      </div>

      <div
        className="jv-edge-fade"
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: 120,
          pointerEvents: "none",
          background: "linear-gradient(to right, var(--bg-2), transparent)",
          zIndex: 2,
        }}
      />
      <div
        className="jv-edge-fade"
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          width: 120,
          pointerEvents: "none",
          background: "linear-gradient(to left, var(--bg-2), transparent)",
          zIndex: 2,
        }}
      />
    </section>
  );
}
