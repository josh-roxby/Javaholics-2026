"use client";

import { useEffect, useState } from "react";
import { Nav } from "../nav";
import { BeanField } from "../bean-field";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section
      className="jv-hero"
      style={{
        position: "relative",
        height: "100vh",
        minHeight: 640,
        maxHeight: 900,
        background: "var(--bg)",
        color: "var(--ink)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Nav current="Home" />

      <div
        className="jv-hero-text"
        style={{
          flex: "0 0 58%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding:
            "var(--hero-top) var(--section-px) var(--hero-bottom)",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          className="jv-mono jv-caps"
          style={{
            opacity: mounted ? 0.6 : 0,
            transition: "opacity 700ms 200ms",
            color: "var(--crema)",
            marginBottom: 24,
          }}
        >
          Fairview, Dublin, since 2019
        </div>

        <h1
          className="jv-display jv-hero-title"
          style={{
            fontSize: "clamp(30px, 4.6vw, 68px)",
            lineHeight: 1.08,
            margin: "0 0 8px",
            maxWidth: 1200,
            color: "var(--ink)",
            transform: mounted ? "none" : "translateY(20px)",
            opacity: mounted ? 1 : 0,
            transition: "all 1000ms cubic-bezier(.2,.7,.3,1) 150ms",
            fontWeight: 400,
          }}
        >
          A coffee shop for{" "}
          <span style={{ fontStyle: "italic", color: "var(--crema)" }}>the people</span>
          <br />
          across the road.
        </h1>

        <div
          style={{
            maxWidth: 560,
            fontSize: 16,
            lineHeight: 1.55,
            color: "var(--ink-soft)",
            marginTop: 28,
            opacity: mounted ? 0.9 : 0,
            transition: "opacity 800ms 500ms",
          }}
        >
          Good beans, house music, sun across the park. Same faces every morning.
        </div>

        <div
          style={{
            display: "flex",
            gap: 10,
            marginTop: 28,
            flexWrap: "wrap",
            justifyContent: "center",
            opacity: mounted ? 1 : 0,
            transition: "opacity 800ms 700ms",
          }}
        >
          <button className="btn btn-primary">Visit the cafe</button>
          <button className="btn btn-ghost">Shop the roasts</button>
        </div>
      </div>

      <div
        className="jv-hero-beans"
        style={{ flex: 1, position: "relative", minHeight: 200 }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 40,
            zIndex: 2,
            background: "linear-gradient(to bottom, var(--bg), transparent)",
            pointerEvents: "none",
          }}
        />
        <BeanField height="100%" count={140} />
        <div
          className="jv-mono jv-caps jv-hero-hint"
          style={{
            position: "absolute",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            color: "var(--ink-mute)",
            zIndex: 2,
            pointerEvents: "none",
            opacity: mounted ? 1 : 0,
            transition: "opacity 800ms 1200ms",
          }}
        >
          move the cursor through the beans
        </div>
      </div>
    </section>
  );
}
