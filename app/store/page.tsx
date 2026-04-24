import Image from "next/image";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { Bean } from "@/components/bean";
import { MEDIA } from "@/lib/media";

export const metadata = { title: "Store" };

export default function StorePage() {
  return (
    <main
      style={{
        position: "relative",
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        background: "var(--bg)",
        color: "var(--ink)",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <Image
          src={MEDIA.machine}
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", opacity: 0.28 }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(10,18,32,0.65), rgba(10,18,32,0.92))",
          }}
        />
      </div>

      <Nav current="Store" />

      <section
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "var(--hero-top) var(--section-px) 60px",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ maxWidth: 680 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              color: "var(--ember)",
              marginBottom: 28,
            }}
          >
            <Bean
              size={72}
              variant={2}
              color="var(--ember)"
              fill="var(--bg-2)"
              strokeWidth={1.4}
            />
          </div>

          <div
            className="jv-caps"
            style={{ opacity: 0.55, color: "var(--crema)", marginBottom: 18 }}
          >
            Store
          </div>

          <h1
            className="jv-display jv-section-title"
            style={{
              fontSize: "clamp(40px, 5.6vw, 76px)",
              margin: 0,
              lineHeight: 1.04,
              fontWeight: 400,
            }}
          >
            Bags, merch,{" "}
            <span style={{ fontStyle: "italic", color: "var(--crema)" }}>coming soon.</span>
          </h1>

          <p
            style={{
              marginTop: 28,
              fontSize: 16,
              lineHeight: 1.6,
              color: "var(--ink-soft)",
              maxWidth: 520,
              marginInline: "auto",
            }}
          >
            The shop is in the works — 250g bags of every origin, the t-shirt everyone keeps
            asking for, and a small run of prints from local artists. Until then, grab a bag on
            your next visit.
          </p>

          <div
            style={{
              marginTop: 36,
              display: "flex",
              gap: 10,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a className="btn btn-primary" href="/visit">
              Visit the cafe
            </a>
            <a className="btn btn-ghost" href="/coffee">
              See the coffee
            </a>
          </div>
        </div>
      </section>

      <div style={{ position: "relative", zIndex: 1 }}>
        <Footer />
      </div>
    </main>
  );
}
