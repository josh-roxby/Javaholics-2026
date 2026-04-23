// Javaholics — night-mode hero + reworked sections
// Hero fits 100vh, bean physics in lower half
// Calmer serif usage, smaller community, bean SVG people, lean footer

// ─────────────────────────────────────────────────────────
// NAV
// ─────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { label: 'Home', href: 'Javaholics Landing Page.html' },
  { label: 'Coffee', href: 'Coffee.html' },
  { label: 'People', href: 'People.html' },
  { label: 'Store', href: 'Store.html' },
  { label: 'Visit', href: 'Visit.html' },
];

const Nav = ({ current = 'Home', absolute = true }) => (
  <nav style={{
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '22px 48px',
    position: absolute ? 'absolute' : 'relative',
    top: 0, left: 0, right: 0, zIndex: 10,
  }}>
    <a href="Javaholics Landing Page.html" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
      <svg width="28" height="28" viewBox="0 0 60 80">
        <path d="M 30 10 Q 52 18 52 40 Q 52 62 30 70 Q 8 62 8 40 Q 8 18 30 10 Z" fill="none" stroke="var(--ember)" strokeWidth="2.5" />
        <path d="M 30 14 Q 25 30 30 40 Q 35 50 30 66" fill="none" stroke="var(--ember)" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      <div style={{ fontFamily: '"Fraunces", serif', fontSize: 22, fontStyle: 'italic', color: 'var(--ink)' }}>Javaholics</div>
    </a>
    <div style={{ display: 'flex', gap: 32, fontSize: 14, fontWeight: 400 }}>
      {NAV_ITEMS.map((item) => {
        const isActive = item.label === current;
        return (
          <a
            key={item.label}
            href={item.href}
            style={{
              opacity: isActive ? 1 : 0.7,
              color: isActive ? 'var(--crema)' : 'var(--ink)',
              cursor: 'pointer', textDecoration: 'none',
              position: 'relative', paddingBottom: 4,
              borderBottom: isActive ? '1px solid var(--crema)' : '1px solid transparent',
              transition: 'all 200ms',
            }}
          >{item.label}</a>
        );
      })}
    </div>
    <div className="jv-mono jv-caps" style={{ opacity: 0.55 }}>Open today, 7:30 to 18:00</div>
  </nav>
);

// ─────────────────────────────────────────────────────────
// HERO — fits viewport, bean field in lower half
// ─────────────────────────────────────────────────────────
const Hero = () => {
  const [mounted, setMounted] = React.useState(true);

  return (
    <section style={{
      position: 'relative', height: '100vh', minHeight: 640, maxHeight: 900,
      background: 'var(--bg)', color: 'var(--ink)',
      overflow: 'hidden', display: 'flex', flexDirection: 'column',
    }}>
      <Nav current="Home" />

      {/* Top half: statement */}
      <div style={{
        flex: '0 0 58%',
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        padding: '140px 48px 24px', textAlign: 'center', position: 'relative',
      }}>
        <div className="jv-mono jv-caps" style={{
          opacity: mounted ? 0.6 : 0, transition: 'opacity 700ms 200ms',
          color: 'var(--crema)', marginBottom: 24,
        }}>
          Fairview, Dublin, since 2019
        </div>
        <h1 className="jv-display" style={{
          fontSize: 'clamp(34px, 4.6vw, 68px)', lineHeight: 1.08, margin: '0 0 8px', 
          maxWidth: 1200, color: 'var(--ink)',
          transform: mounted ? 'none' : 'translateY(20px)',
          opacity: mounted ? 1 : 0,
          transition: 'all 1000ms cubic-bezier(.2,.7,.3,1) 150ms',
          fontWeight: 400,
          whiteSpace: 'nowrap',
        }}>
          A coffee shop for <span style={{ fontStyle: 'italic', color: 'var(--crema)' }}>the people</span><br />
          across the road.
        </h1>
        <div style={{
          maxWidth: 560, fontSize: 16, lineHeight: 1.55, color: 'var(--ink-soft)',
          marginTop: 28, opacity: mounted ? 0.9 : 0, transition: 'opacity 800ms 500ms',
        }}>
          Good beans, house music, sun across the park. Same faces every morning.
        </div>
        <div style={{
          display: 'flex', gap: 10, marginTop: 28,
          opacity: mounted ? 1 : 0, transition: 'opacity 800ms 700ms',
        }}>
          <button className="btn btn-primary">Visit the cafe</button>
          <button className="btn btn-ghost">Shop the roasts</button>
        </div>
      </div>

      {/* Bottom half: bean field */}
      <div style={{ flex: 1, position: 'relative', minHeight: 200 }}>
        {/* Fade line at top of field */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 40, zIndex: 2,
          background: 'linear-gradient(to bottom, var(--bg), transparent)',
          pointerEvents: 'none',
        }} />
        <BeanField height="100%" count={140} />
        {/* Hint */}
        <div className="jv-mono jv-caps" style={{
          position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)',
          color: 'var(--ink-mute)', zIndex: 2, pointerEvents: 'none',
          opacity: mounted ? 1 : 0, transition: 'opacity 800ms 1200ms',
        }}>
          move the cursor through the beans
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────
// MARQUEE
// ─────────────────────────────────────────────────────────
const Marquee = () => {
  const items = ['Single origin', 'Fairview, Dublin 3', 'House vibes', 'Roasted in house', 'Open every day', 'Neighbours welcome'];
  return (
    <div style={{
      background: 'var(--bg-2)', color: 'var(--crema)', padding: '18px 0',
      overflow: 'hidden', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)',
    }}>
      <div className="jv-marquee jv-display" style={{ fontSize: 28, fontStyle: 'italic', fontWeight: 400 }}>
        {[...items, ...items, ...items].map((x, i) => (
          <React.Fragment key={i}>
            <span>{x}</span>
            <span style={{ opacity: 0.35 }}>·</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// SPACE / ABOUT — rebalanced, visual symmetry
// ─────────────────────────────────────────────────────────
const SectionSpace = () => (
  <section style={{ background: 'var(--bg)', color: 'var(--ink)', padding: '140px 48px' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      {/* Header row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'end', gap: 48, marginBottom: 80 }}>
        <div>
          <div className="jv-caps" style={{ opacity: 0.55, color: 'var(--crema)', marginBottom: 20 }}>01 &nbsp;/&nbsp; The Space</div>
          <h2 className="jv-display" style={{ fontSize: 'clamp(44px, 6vw, 84px)', margin: 0, lineHeight: 1.02, maxWidth: 900, fontWeight: 400 }}>
            Across from the <span style={{ fontStyle: 'italic', color: 'var(--crema)' }}>park.</span>
          </h2>
        </div>
        <div className="jv-mono jv-caps" style={{ opacity: 0.45, whiteSpace: 'nowrap' }}>Fairview Strand, D03</div>
      </div>

      {/* 3-column balance: left copy / center portrait / right stats */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 56, alignItems: 'start' }}>
        <div style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--ink-soft)' }}>
          <p style={{ marginTop: 0 }}>
            We opened in a corner of Fairview that felt, for a long time, like it was waiting for something. A bus stop, a fence, a run of trees, and across the road, the park.
          </p>
          <p>
            Now we are the warm window on that corner. Come in wet from the rain and the room will know your name.
          </p>
        </div>

        {/* Centerpiece — image placeholder */}
        <div style={{
          aspectRatio: '3 / 4', background: 'var(--bg-2)', position: 'relative',
          border: '1px solid var(--line)', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at 50% 30%, rgba(216,120,80,0.12), transparent 60%)',
          }} />
          <div className="jv-mono jv-caps" style={{ position: 'absolute', top: 16, left: 16, opacity: 0.45 }}>Fig. 01</div>
          <div className="jv-mono jv-caps" style={{ position: 'absolute', bottom: 16, left: 16, right: 16, opacity: 0.45 }}>
            A morning, Fairview Strand
          </div>
          <div style={{
            position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--roast)', opacity: 0.4,
          }}>
            <Bean size={120} variant={1} />
          </div>
        </div>

        <div>
          <div style={{ fontFamily: '"Fraunces", Georgia, serif', fontStyle: 'italic', fontSize: 22, lineHeight: 1.4, color: 'var(--ink)', marginBottom: 32, fontWeight: 400 }}>
            "A good cafe is a small social engine. It makes the street around it work a little better."
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, paddingTop: 32, borderTop: '1px solid var(--line)' }}>
            {[
              { n: '2019', l: 'Opened' },
              { n: '7', l: 'Origins on tap' },
              { n: '01', l: 'Block from the park' },
              { n: '6am', l: 'First grind' },
            ].map((s, i) => (
              <div key={i}>
                <div className="jv-display" style={{ fontSize: 40, lineHeight: 1, color: 'var(--ink)', fontWeight: 400 }}>{s.n}</div>
                <div className="jv-mono jv-caps" style={{ opacity: 0.55, marginTop: 6 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ─────────────────────────────────────────────────────────
// COFFEE / ROASTS — rebalanced, calmer
// ─────────────────────────────────────────────────────────
const ROASTS = [
  { id: 0, name: 'Kochere', origin: 'Ethiopia, Yirgacheffe', notes: ['Peach', 'Bergamot', 'Honeycomb'], roast: 'Light', process: 'Washed', elevation: '1,950m', body: 2, acidity: 4, sweetness: 3, tagline: 'Bright and floral. Morning light in a cup.' },
  { id: 1, name: 'La Palma', origin: 'Colombia, Huila', notes: ['Red apple', 'Caramel', 'Cocoa'], roast: 'Medium', process: 'Washed', elevation: '1,780m', body: 3, acidity: 3, sweetness: 4, tagline: 'The everyday. The one that just works.' },
  { id: 2, name: 'Sitio', origin: 'Brazil, Minas Gerais', notes: ['Hazelnut', 'Dark chocolate', 'Brown sugar'], roast: 'Medium dark', process: 'Natural', elevation: '1,200m', body: 4, acidity: 2, sweetness: 4, tagline: 'Your flat white\'s best friend.' },
  { id: 3, name: 'House', origin: 'Ethiopia × Colombia', notes: ['Toffee', 'Stone fruit', 'Milk chocolate'], roast: 'Medium', process: 'Blend', elevation: 'Mixed', body: 3, acidity: 3, sweetness: 4, tagline: 'Ours. Named after the dog.' },
];

const SectionCoffee = ({ hideHeader = false, headerLabel = '02 \u00A0/\u00A0 The Coffee' }) => {
  const [active, setActive] = React.useState(0);
  const r = ROASTS[active];
  return (
    <section style={{ background: 'var(--bg-2)', color: 'var(--ink)', padding: '140px 48px', position: 'relative' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Header */}
        {!hideHeader && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'end', gap: 48, marginBottom: 72 }}>
            <div>
              <div className="jv-caps" style={{ opacity: 0.55, color: 'var(--crema)', marginBottom: 20 }}>{headerLabel}</div>
              <h2 className="jv-display" style={{ fontSize: 'clamp(44px, 6vw, 84px)', margin: 0, lineHeight: 1.02, fontWeight: 400 }}>
                Seven origins, <span style={{ fontStyle: 'italic', color: 'var(--crema)' }}>one room.</span>
              </h2>
            </div>
            <div style={{ maxWidth: 320, fontSize: 15, lineHeight: 1.55, color: 'var(--ink-soft)' }}>
              A rotating bar of single origins, plus our own house blend. Grab a bag on the way out, or sit with one.
            </div>
          </div>
        )}
        {hideHeader && (
          <div style={{ marginBottom: 56 }}>
            <div className="jv-caps" style={{ opacity: 0.55, color: 'var(--crema)', marginBottom: 14 }}>The bar today</div>
            <h2 className="jv-display" style={{ fontSize: 'clamp(30px, 3.8vw, 50px)', margin: 0, lineHeight: 1.04, fontWeight: 400 }}>
              What's <span style={{ fontStyle: 'italic', color: 'var(--crema)' }}>pouring.</span>
            </h2>
          </div>
        )}

        {/* Two-column: tabs + detail */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(260px, 320px) 1fr', gap: 56, alignItems: 'start' }}>
          {/* Tabs — vertical, quieter */}
          <div>
            {ROASTS.map((rr, i) => (
              <button key={i} onClick={() => setActive(i)} style={{
                display: 'block', width: '100%', textAlign: 'left',
                padding: '22px 0',
                background: 'transparent',
                border: 'none', borderTop: i === 0 ? '1px solid var(--line)' : 'none',
                borderBottom: '1px solid var(--line)',
                color: active === i ? 'var(--ink)' : 'var(--ink-mute)',
                cursor: 'pointer', transition: 'color 250ms',
                fontFamily: 'inherit',
              }}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12 }}>
                  <div style={{ minWidth: 0 }}>
                    <span className="jv-mono jv-caps" style={{ opacity: 0.6, marginRight: 12 }}>0{i + 1}</span>
                    <span className="jv-display" style={{ fontSize: 24, fontStyle: 'italic', fontWeight: 400, whiteSpace: 'nowrap' }}>{rr.name}</span>
                  </div>
                  <span style={{
                    fontSize: 14, opacity: active === i ? 1 : 0, transform: active === i ? 'translateX(0)' : 'translateX(-6px)',
                    transition: 'all 250ms', color: 'var(--ember)', flexShrink: 0,
                  }}>→</span>
                </div>
                <div style={{ fontSize: 13, opacity: 0.6, marginTop: 6 }}>{rr.origin}</div>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div key={active} style={{ animation: 'jv-fadeup 500ms ease-out' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 48, alignItems: 'start' }}>
              {/* Left: bean + tagline + specs */}
              <div>
                <div style={{ color: 'var(--roast)', marginBottom: 24 }}>
                  <Bean size={88} variant={active % 5} color="var(--crema)" fill="var(--roast)" strokeWidth={1.2} />
                </div>
                <div style={{ fontFamily: '"Fraunces", serif', fontStyle: 'italic', fontSize: 24, lineHeight: 1.35, color: 'var(--ink)', marginBottom: 32, fontWeight: 400, maxWidth: 380 }}>
                  "{r.tagline}"
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20, paddingTop: 24, borderTop: '1px solid var(--line)' }}>
                  {[['Roast', r.roast], ['Process', r.process], ['Elevation', r.elevation]].map(([k, v], i) => (
                    <div key={i}>
                      <div className="jv-mono jv-caps" style={{ opacity: 0.55, marginBottom: 6 }}>{k}</div>
                      <div style={{ fontSize: 14 }}>{v}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: notes + profile + CTA */}
              <div>
                <div className="jv-mono jv-caps" style={{ opacity: 0.55, marginBottom: 14 }}>Tasting notes</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
                  {r.notes.map((n, i) => (
                    <span key={i} style={{
                      padding: '6px 14px', borderRadius: 100,
                      border: '1px solid var(--line-strong)', fontSize: 13,
                      color: 'var(--ink)',
                    }}>{n}</span>
                  ))}
                </div>

                <div className="jv-mono jv-caps" style={{ opacity: 0.55, marginBottom: 16 }}>Profile</div>
                {[['Body', r.body], ['Acidity', r.acidity], ['Sweetness', r.sweetness]].map(([label, val], i) => (
                  <div key={i} style={{ marginBottom: 12 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 6 }}>
                      <span>{label}</span>
                      <span className="jv-mono" style={{ opacity: 0.55 }}>{val}/5</span>
                    </div>
                    <div style={{ height: 2, background: 'var(--line)', position: 'relative', overflow: 'hidden' }}>
                      <div style={{
                        position: 'absolute', left: 0, top: 0, height: '100%',
                        width: `${(val / 5) * 100}%`,
                        background: 'var(--crema)',
                        transition: 'width 600ms cubic-bezier(.2,.7,.3,1)',
                      }} />
                    </div>
                  </div>
                ))}

                <button className="btn btn-primary" style={{ marginTop: 28 }}>Shop 250g bag, €14</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────
// PEOPLE — bean-svg portraits, less copy
// ─────────────────────────────────────────────────────────
const PEOPLE = [
  { name: 'Dara', role: 'Owner, roaster, DJ', bean: 0 },
  { name: 'Niamh', role: 'Lead barista', bean: 1 },
  { name: 'Tomás', role: 'Roaster', bean: 2 },
  { name: 'Aoife', role: 'Barista, baker', bean: 3 },
  { name: 'Marcus', role: 'Weekend barista', bean: 4 },
  { name: 'Lola', role: 'Shop dog', bean: 1 },
];

const SectionPeople = () => {
  const scrollRef = React.useRef(null);
  const [hover, setHover] = React.useState(null);

  const scrollBy = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 340, behavior: 'smooth' });
  };

  return (
    <section style={{ background: 'var(--bg)', color: 'var(--ink)', padding: '140px 0 140px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', alignItems: 'end', gap: 48, marginBottom: 56 }}>
          <div>
            <div className="jv-caps" style={{ opacity: 0.55, color: 'var(--crema)', marginBottom: 20 }}>03 &nbsp;/&nbsp; The People</div>
            <h2 className="jv-display" style={{ fontSize: 'clamp(44px, 6vw, 84px)', margin: 0, lineHeight: 1.02, fontWeight: 400 }}>
              The faces <span style={{ fontStyle: 'italic', color: 'var(--crema)' }}>behind the bar.</span>
            </h2>
          </div>
          <div style={{ maxWidth: 280, fontSize: 15, lineHeight: 1.55, color: 'var(--ink-soft)' }}>
            Six humans and a dog. Most of us live around here.
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button onClick={() => scrollBy(-1)} aria-label="Previous" style={carouselBtn}>←</button>
            <button onClick={() => scrollBy(1)} aria-label="Next" style={carouselBtn}>→</button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        style={{
          display: 'flex', gap: 20, overflowX: 'auto', scrollSnapType: 'x mandatory',
          padding: '8px 48px 24px', scrollbarWidth: 'none',
        }}
        className="jv-hide-scrollbar"
      >
        {PEOPLE.map((p, i) => (
          <div
            key={i}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            style={{
              flex: '0 0 300px', height: 400, scrollSnapAlign: 'start',
              background: hover === i ? 'var(--bg-2)' : 'var(--bg-2)',
              border: '1px solid var(--line)',
              padding: '36px 28px 32px',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start',
              transition: 'all 300ms',
              borderColor: hover === i ? 'var(--line-strong)' : 'var(--line)',
            }}
          >
            <div className="jv-mono jv-caps" style={{ opacity: 0.55 }}>0{i + 1}</div>
            <div style={{
              alignSelf: 'center',
              color: hover === i ? 'var(--ember)' : 'var(--roast)',
              transition: 'all 400ms cubic-bezier(.2,.7,.3,1)',
              transform: hover === i ? 'translateY(-6px) rotate(-4deg)' : 'none',
            }}>
              <Bean size={130} variant={p.bean} color="var(--crema)" fill="currentColor" strokeWidth={1.2} />
            </div>
            <div>
              <div className="jv-display" style={{ fontSize: 32, lineHeight: 1, marginBottom: 8, fontWeight: 400 }}>{p.name}</div>
              <div className="jv-mono jv-caps" style={{ opacity: 0.6 }}>{p.role}</div>
            </div>
          </div>
        ))}
        {/* trailing spacer so last card can snap to start */}
        <div style={{ flex: '0 0 1px' }} />
      </div>
    </section>
  );
};

const carouselBtn = {
  width: 44, height: 44, borderRadius: '50%',
  border: '1px solid var(--line-strong)', background: 'transparent',
  color: 'var(--ink)', fontSize: 16, cursor: 'pointer',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  transition: 'all 200ms',
};

// ─────────────────────────────────────────────────────────
// COMMUNITY — softer, smaller, a grid of quiet cards
// ─────────────────────────────────────────────────────────
const QUOTES = [
  { name: 'Siobhán', note: 'Took me through lockdown, one takeaway flat white at a time.' },
  { name: 'Oisín', note: 'I get more done here than in any office I\'ve worked in.' },
  { name: 'Priya', note: 'I walk past three other cafes to get to this one.' },
  { name: 'Conor', note: 'Finish the park run, come here, the music is always right.' },
  { name: 'Hannah', note: 'First cafe that made me feel like I live in Dublin.' },
  { name: 'Mark', note: 'The house blend and a window seat is a full hour of peace.' },
  { name: 'Ellie', note: 'Dara knows my dog\'s name before he knows mine and I love it.' },
  { name: 'Rory', note: 'The Kochere on a filter, window seat, rain outside. Sorted.' },
  { name: 'Aine', note: 'Honestly the best playlist in Dublin. I shazam half of it.' },
  { name: 'Tom', note: 'Met my partner in the queue. Still come in every Sunday.' },
];

const SectionCommunity = () => {
  const [paused, setPaused] = React.useState(false);
  // Two interleaved rows, opposite directions for a richer marquee
  const row1 = QUOTES;
  const row2 = [...QUOTES].reverse();

  return (
    <section style={{ background: 'var(--bg-2)', color: 'var(--ink)', padding: '140px 0 140px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'end', gap: 48, marginBottom: 64 }}>
          <div>
            <div className="jv-caps" style={{ opacity: 0.55, color: 'var(--crema)', marginBottom: 20 }}>04 &nbsp;/&nbsp; The Community</div>
            <h2 className="jv-display" style={{ fontSize: 'clamp(40px, 5.5vw, 72px)', margin: 0, lineHeight: 1.02, fontWeight: 400 }}>
              In the words of <span style={{ fontStyle: 'italic', color: 'var(--crema)' }}>the regulars.</span>
            </h2>
          </div>
          <div className="jv-mono jv-caps" style={{ opacity: 0.45, whiteSpace: 'nowrap' }}>A few of the many</div>
        </div>
      </div>

      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
      >
        <QuoteMarquee quotes={row1} direction="left" duration={70} paused={paused} />
        <QuoteMarquee quotes={row2} direction="right" duration={85} paused={paused} offset={60} />
      </div>

      {/* edge fades */}
      <div style={{
        position: 'absolute', top: 0, bottom: 0, left: 0, width: 120, pointerEvents: 'none',
        background: 'linear-gradient(to right, var(--bg-2), transparent)', zIndex: 2,
      }} />
      <div style={{
        position: 'absolute', top: 0, bottom: 0, right: 0, width: 120, pointerEvents: 'none',
        background: 'linear-gradient(to left, var(--bg-2), transparent)', zIndex: 2,
      }} />
    </section>
  );
};

// One row of the community marquee. Duplicated content + keyframes = seamless loop.
const QuoteMarquee = ({ quotes, direction = 'left', duration = 60, paused, offset = 0 }) => {
  const animName = direction === 'left' ? 'jv-qm-left' : 'jv-qm-right';
  return (
    <div style={{ overflow: 'hidden', padding: '4px 0' }}>
      <div style={{
        display: 'inline-flex', gap: 20,
        paddingLeft: offset,
        animation: `${animName} ${duration}s linear infinite`,
        animationPlayState: paused ? 'paused' : 'running',
        whiteSpace: 'nowrap',
      }}>
        {[...quotes, ...quotes, ...quotes].map((q, i) => (
          <QuoteCard key={i} q={q} />
        ))}
      </div>
    </div>
  );
};

const QuoteCard = ({ q }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <figure
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        margin: 0, padding: '22px 24px',
        background: hover ? 'var(--bg)' : 'var(--bg-3)',
        border: '1px solid var(--line)',
        borderColor: hover ? 'var(--line-strong)' : 'var(--line)',
        width: 300, height: 180,
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        flex: '0 0 auto',
        whiteSpace: 'normal',
        transition: 'all 250ms',
        cursor: 'default',
      }}
    >
      <div style={{
        fontFamily: '"Fraunces", serif', fontSize: 17, lineHeight: 1.4, color: 'var(--ink)',
        fontStyle: 'italic', fontWeight: 400,
      }}>
        {q.note}
      </div>
      <figcaption style={{ display: 'flex', alignItems: 'center', gap: 10, paddingTop: 14, borderTop: '1px solid var(--line)' }}>
        <div style={{
          width: 26, height: 26, borderRadius: '50%',
          background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--crema)', fontSize: 12, fontFamily: '"Fraunces", serif', fontStyle: 'italic',
        }}>{q.name[0]}</div>
        <div style={{ fontSize: 13, color: 'var(--ink-soft)' }}>{q.name}</div>
      </figcaption>
    </figure>
  );
};

// ─────────────────────────────────────────────────────────
// VISIT — map + hours, calmer
// ─────────────────────────────────────────────────────────
const SectionVisit = () => (
  <section style={{ background: 'var(--bg)', color: 'var(--ink)', padding: '140px 48px' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 64, alignItems: 'start' }}>
        <div>
          <div className="jv-caps" style={{ opacity: 0.55, color: 'var(--crema)', marginBottom: 20 }}>05 &nbsp;/&nbsp; Visit</div>
          <h2 className="jv-display" style={{ fontSize: 'clamp(44px, 5.5vw, 76px)', margin: 0, lineHeight: 1.02, fontWeight: 400 }}>
            Come over. <br /><span style={{ fontStyle: 'italic', color: 'var(--crema)' }}>Stay a while.</span>
          </h2>
          <div style={{ marginTop: 40, fontSize: 15, lineHeight: 1.7 }}>
            <div style={{ marginBottom: 24 }}>
              <div className="jv-mono jv-caps" style={{ opacity: 0.55, marginBottom: 8 }}>Address</div>
              Fairview Strand, Dublin 3, D03 N2X8
            </div>
            <div style={{ marginBottom: 24 }}>
              <div className="jv-mono jv-caps" style={{ opacity: 0.55, marginBottom: 8 }}>Hours</div>
              Mon to Fri, 7:30 to 18:00<br />
              Sat to Sun, 8:30 to 18:00
            </div>
            <div>
              <div className="jv-mono jv-caps" style={{ opacity: 0.55, marginBottom: 8 }}>Getting here</div>
              130 bus, Fairview stop<br />
              DART, Clontarf Road, 8 min walk
            </div>
          </div>
          <button className="btn btn-ghost" style={{ marginTop: 36 }}>Open in maps</button>
        </div>

        {/* Map */}
        <div style={{
          background: 'var(--bg-2)', aspectRatio: '1.5 / 1', position: 'relative',
          border: '1px solid var(--line)', overflow: 'hidden',
        }}>
          {/* Park area */}
          <div style={{ position: 'absolute', right: 0, top: 0, width: '58%', height: '72%', background: 'rgba(140,160,120,0.10)' }} />
          {/* Road lines */}
          <div style={{ position: 'absolute', left: '38%', top: 0, bottom: 0, width: 1, background: 'var(--line-strong)' }} />
          <div style={{ position: 'absolute', left: 0, top: '55%', right: 0, height: 1, background: 'var(--line-strong)' }} />
          {/* Pin */}
          <div style={{ position: 'absolute', left: '30%', top: '57%' }}>
            <div style={{
              width: 12, height: 12, borderRadius: '50%', background: 'var(--ember)',
              boxShadow: '0 0 0 6px rgba(216,120,80,0.2), 0 0 0 14px rgba(216,120,80,0.1)',
            }} />
          </div>
          <div className="jv-display" style={{ position: 'absolute', left: 'calc(30% + 24px)', top: '52%', fontSize: 18, fontStyle: 'italic', color: 'var(--ember)' }}>
            Javaholics
          </div>
          {/* Labels */}
          <div className="jv-mono jv-caps" style={{ position: 'absolute', right: 24, bottom: 24, opacity: 0.6 }}>Fairview Park</div>
          <div className="jv-mono jv-caps" style={{ position: 'absolute', left: 24, bottom: 24, opacity: 0.45 }}>North Strand</div>
          <div className="jv-mono jv-caps" style={{ position: 'absolute', left: 24, top: 24, opacity: 0.45 }}>Dublin 3</div>
        </div>
      </div>
    </div>
  </section>
);

// ─────────────────────────────────────────────────────────
// FOOTER — minimal
// ─────────────────────────────────────────────────────────
const Footer = () => (
  <footer style={{ background: 'var(--bg-2)', color: 'var(--ink-soft)', padding: '56px 48px 32px', borderTop: '1px solid var(--line)' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ color: 'var(--ember)' }}>
            <Bean size={28} variant={0} color="var(--ember)" strokeWidth={2} />
          </div>
          <div className="jv-display" style={{ fontSize: 22, fontStyle: 'italic', color: 'var(--ink)' }}>Javaholics</div>
        </div>
        <div style={{ display: 'flex', gap: 28, fontSize: 14 }}>
          <a style={{ cursor: 'pointer' }}>Instagram</a>
          <a style={{ cursor: 'pointer' }}>Newsletter</a>
          <a style={{ cursor: 'pointer' }}>Shop</a>
          <a style={{ cursor: 'pointer' }}>Contact</a>
        </div>
      </div>
      <div style={{ height: 1, background: 'var(--line)', margin: '28px 0 20px' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, opacity: 0.55 }} className="jv-mono jv-caps">
        <span>© 2026 Javaholics, Fairview</span>
        <span>Made in Dublin</span>
      </div>
    </div>
  </footer>
);

Object.assign(window, { Nav, Hero, Marquee, SectionSpace, SectionCoffee, SectionPeople, SectionCommunity, SectionVisit, Footer });
