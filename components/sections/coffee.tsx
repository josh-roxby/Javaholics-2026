"use client";

import { useState } from "react";
import { Bean } from "../bean";
import { ROASTS, type Roast } from "@/lib/roasts";

type SectionCoffeeProps = {
  hideHeader?: boolean;
  headerLabel?: string;
};

function RoastDetail({
  roast,
  index,
  withHeader = false,
}: {
  roast: Roast;
  index: number;
  withHeader?: boolean;
}) {
  return (
    <>
      {withHeader && (
        <div
          style={{
            marginBottom: 24,
            paddingBottom: 16,
            borderBottom: "1px solid var(--line)",
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
            <span className="jv-mono jv-caps" style={{ opacity: 0.6 }}>
              0{index + 1}
            </span>
            <span
              className="jv-display"
              style={{ fontSize: 28, fontStyle: "italic", fontWeight: 400 }}
            >
              {roast.name}
            </span>
          </div>
          <div style={{ fontSize: 13, opacity: 0.6, marginTop: 6 }}>{roast.origin}</div>
        </div>
      )}

      <div
        className="jv-grid-stack"
        style={{
          gridTemplateColumns: "1.2fr 1fr",
          gap: 48,
          alignItems: "start",
        }}
      >
        <div>
          <div style={{ color: "var(--roast)", marginBottom: 24 }}>
            <Bean
              size={88}
              variant={index % 5}
              color="var(--crema)"
              fill="var(--roast)"
              strokeWidth={1.2}
            />
          </div>
          <div
            style={{
              fontFamily: '"Fraunces", serif',
              fontStyle: "italic",
              fontSize: 22,
              lineHeight: 1.35,
              color: "var(--ink)",
              marginBottom: 28,
              fontWeight: 400,
              maxWidth: 380,
            }}
          >
            &ldquo;{roast.tagline}&rdquo;
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 16,
              paddingTop: 20,
              borderTop: "1px solid var(--line)",
            }}
          >
            {(
              [
                ["Roast", roast.roast],
                ["Process", roast.process],
                ["Elevation", roast.elevation],
              ] as const
            ).map(([k, v], i) => (
              <div key={i}>
                <div className="jv-mono jv-caps" style={{ opacity: 0.55, marginBottom: 6 }}>
                  {k}
                </div>
                <div style={{ fontSize: 13 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="jv-mono jv-caps" style={{ opacity: 0.55, marginBottom: 14 }}>
            Tasting notes
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
            {roast.notes.map((n, i) => (
              <span
                key={i}
                style={{
                  padding: "6px 14px",
                  borderRadius: 100,
                  border: "1px solid var(--line-strong)",
                  fontSize: 13,
                  color: "var(--ink)",
                }}
              >
                {n}
              </span>
            ))}
          </div>

          <div className="jv-mono jv-caps" style={{ opacity: 0.55, marginBottom: 16 }}>
            Profile
          </div>
          {(
            [
              ["Body", roast.body],
              ["Acidity", roast.acidity],
              ["Sweetness", roast.sweetness],
            ] as const
          ).map(([label, val], i) => (
            <div key={i} style={{ marginBottom: 12 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 13,
                  marginBottom: 6,
                }}
              >
                <span>{label}</span>
                <span className="jv-mono" style={{ opacity: 0.55 }}>
                  {val}/5
                </span>
              </div>
              <div
                style={{
                  height: 2,
                  background: "var(--line)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    height: "100%",
                    width: `${(val / 5) * 100}%`,
                    background: "var(--crema)",
                    transition: "width 600ms cubic-bezier(.2,.7,.3,1)",
                  }}
                />
              </div>
            </div>
          ))}

          <button className="btn btn-primary" style={{ marginTop: 24 }}>
            Shop 250g bag, €14
          </button>
        </div>
      </div>
    </>
  );
}

export function SectionCoffee({
  hideHeader = false,
  headerLabel = "02  /  The Coffee",
}: SectionCoffeeProps) {
  const [active, setActive] = useState(0);
  const activeRoast = ROASTS[active];

  return (
    <section
      style={{
        background: "var(--bg-2)",
        color: "var(--ink)",
        padding: "var(--section-py) var(--section-px)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {!hideHeader && (
          <div
            className="jv-grid-stack"
            style={{
              gridTemplateColumns: "1fr auto",
              alignItems: "end",
              gap: 48,
              marginBottom: 72,
            }}
          >
            <div>
              <div
                className="jv-caps"
                style={{ opacity: 0.55, color: "var(--crema)", marginBottom: 20 }}
              >
                {headerLabel}
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
                Seven origins,{" "}
                <span style={{ fontStyle: "italic", color: "var(--crema)" }}>one room.</span>
              </h2>
            </div>
            <div
              style={{
                maxWidth: 320,
                fontSize: 15,
                lineHeight: 1.55,
                color: "var(--ink-soft)",
              }}
            >
              A rotating bar of single origins, plus our own house blend. Grab a bag on the way
              out, or sit with one.
            </div>
          </div>
        )}

        {hideHeader && (
          <div style={{ marginBottom: 56 }}>
            <div
              className="jv-caps"
              style={{ opacity: 0.55, color: "var(--crema)", marginBottom: 14 }}
            >
              The bar today
            </div>
            <h2
              className="jv-display"
              style={{
                fontSize: "clamp(30px, 3.8vw, 50px)",
                margin: 0,
                lineHeight: 1.04,
                fontWeight: 400,
              }}
            >
              What&apos;s{" "}
              <span style={{ fontStyle: "italic", color: "var(--crema)" }}>pouring.</span>
            </h2>
          </div>
        )}

        {/* Desktop: vertical tab list + detail panel */}
        <div
          className="jv-coffee-desktop"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(260px, 320px) 1fr",
            gap: 56,
            alignItems: "start",
          }}
        >
          <div>
            {ROASTS.map((rr, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  padding: "22px 0",
                  background: "transparent",
                  border: "none",
                  borderTop: i === 0 ? "1px solid var(--line)" : "none",
                  borderBottom: "1px solid var(--line)",
                  color: active === i ? "var(--ink)" : "var(--ink-mute)",
                  cursor: "pointer",
                  transition: "color 250ms",
                  fontFamily: "inherit",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    gap: 12,
                  }}
                >
                  <div style={{ minWidth: 0 }}>
                    <span
                      className="jv-mono jv-caps"
                      style={{ opacity: 0.6, marginRight: 12 }}
                    >
                      0{i + 1}
                    </span>
                    <span
                      className="jv-display"
                      style={{
                        fontSize: 24,
                        fontStyle: "italic",
                        fontWeight: 400,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {rr.name}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: 14,
                      opacity: active === i ? 1 : 0,
                      transform: active === i ? "translateX(0)" : "translateX(-6px)",
                      transition: "all 250ms",
                      color: "var(--ember)",
                      flexShrink: 0,
                    }}
                  >
                    →
                  </span>
                </div>
                <div style={{ fontSize: 13, opacity: 0.6, marginTop: 6 }}>{rr.origin}</div>
              </button>
            ))}
          </div>

          <div key={active} style={{ animation: "jv-fadeup 500ms ease-out" }}>
            <RoastDetail roast={activeRoast} index={active} />
          </div>
        </div>

        {/* Mobile: swipable carousel of full roast cards */}
        <div
          className="jv-coffee-mobile jv-hide-scrollbar"
          style={{
            gap: 14,
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            padding: "8px var(--section-px) 8px",
            margin: "0 calc(-1 * var(--section-px))",
          }}
        >
          {ROASTS.map((roast, i) => (
            <article
              key={roast.id}
              style={{
                flex: "0 0 calc(100vw - 56px)",
                maxWidth: 360,
                scrollSnapAlign: "center",
                scrollSnapStop: "always",
                background: "var(--bg-3)",
                border: "1px solid var(--line)",
                padding: "26px 22px",
              }}
            >
              <RoastDetail roast={roast} index={i} withHeader />
            </article>
          ))}
        </div>

        <div
          className="jv-coffee-mobile-hint jv-mono jv-caps"
          style={{
            marginTop: 18,
            textAlign: "center",
            color: "var(--ink-mute)",
          }}
        >
          swipe for more roasts
        </div>
      </div>
    </section>
  );
}
