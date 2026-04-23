const ITEMS = [
  "Single origin",
  "Fairview, Dublin 3",
  "House vibes",
  "Roasted in house",
  "Open every day",
  "Neighbours welcome",
];

export function Marquee() {
  return (
    <div
      style={{
        background: "var(--bg-2)",
        color: "var(--crema)",
        padding: "18px 0",
        overflow: "hidden",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div
        className="jv-marquee jv-display"
        style={{ fontSize: 28, fontStyle: "italic", fontWeight: 400 }}
      >
        {[...ITEMS, ...ITEMS, ...ITEMS].map((x, i) => (
          <span key={i} style={{ display: "inline-flex", gap: "3rem" }}>
            <span>{x}</span>
            <span style={{ opacity: 0.35 }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
