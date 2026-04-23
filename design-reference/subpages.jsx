// Javaholics — inner-page components
// SecondaryHero (reusable across Coffee / People / Store / Visit)
// Sub-page specific sections

// ─────────────────────────────────────────────────────────
// SECONDARY HERO — a calmer, shorter page header
// ─────────────────────────────────────────────────────────
const SecondaryHero = ({ eyebrow, title, titleItalic, lede, tag }) => (
  <section style={{
    position: 'relative',
    background: 'var(--bg)',
    color: 'var(--ink)',
    minHeight: 460,
    display: 'flex', flexDirection: 'column',
    borderBottom: '1px solid var(--line)',
    overflow: 'hidden',
  }}>
    <Nav current={tag} absolute={true} />

    {/* Subtle field of beans in background, ornamental */}
    <div aria-hidden style={{
      position: 'absolute', inset: 0, opacity: 0.08, pointerEvents: 'none',
      color: 'var(--crema)',
    }}>
      <div style={{ position: 'absolute', top: '30%', left: '8%', transform: 'rotate(-18deg)' }}>
        <Bean size={120} variant={1} color="currentColor" fill="none" strokeWidth={1} />
      </div>
      <div style={{ position: 'absolute', top: '55%', right: '10%', transform: 'rotate(24deg)' }}>
        <Bean size={160} variant={3} color="currentColor" fill="none" strokeWidth={1} />
      </div>
      <div style={{ position: 'absolute', top: '20%', right: '28%', transform: 'rotate(8deg)' }}>
        <Bean size={90} variant={0} color="currentColor" fill="none" strokeWidth={1} />
      </div>
    </div>

    <div style={{
      position: 'relative', zIndex: 1,
      maxWidth: 1280, width: '100%', margin: '0 auto',
      padding: '180px 48px 96px',
      display: 'grid', gridTemplateColumns: '1fr auto', gap: 48, alignItems: 'end',
    }}>
      <div>
        <div className="jv-caps" style={{ opacity: 0.55, color: 'var(--crema)', marginBottom: 24 }}>
          {eyebrow}
        </div>
        <h1 className="jv-display" style={{
          fontSize: 'clamp(44px, 6vw, 92px)', lineHeight: 1.02, margin: 0,
          fontWeight: 400,
        }}>
          {title} <span style={{ fontStyle: 'italic', color: 'var(--crema)' }}>{titleItalic}</span>
        </h1>
      </div>
      {lede && (
        <div style={{ maxWidth: 340, fontSize: 15, lineHeight: 1.6, color: 'var(--ink-soft)', paddingBottom: 8 }}>
          {lede}
        </div>
      )}
    </div>

    {/* Bottom breadcrumb row */}
    <div style={{
      position: 'relative', zIndex: 1,
      borderTop: '1px solid var(--line)',
      padding: '16px 48px',
      display: 'flex', justifyContent: 'space-between',
      fontSize: 12,
    }} className="jv-mono jv-caps">
      <div style={{ display: 'flex', gap: 24 }}>
        <a href="Javaholics Landing Page.html" style={{ opacity: 0.5, textDecoration: 'none', color: 'var(--ink)' }}>Javaholics</a>
        <span style={{ opacity: 0.35 }}>/</span>
        <span style={{ opacity: 0.9, color: 'var(--crema)' }}>{tag}</span>
      </div>
      <div style={{ opacity: 0.45 }}>Fairview, Dublin 3</div>
    </div>
  </section>
);

// ─────────────────────────────────────────────────────────
// COFFEE — bag carousel
// ─────────────────────────────────────────────────────────
const BAGS = [
  { id: 0, name: 'Kochere',   origin: 'Ethiopia',   notes: 'Peach, Bergamot, Honeycomb',     roast: 'Light',       price: '€16', bean: 0, bagColor: 'var(--ember)' },
  { id: 1, name: 'La Palma',  origin: 'Colombia',   notes: 'Red apple, Caramel, Cocoa',       roast: 'Medium',      price: '€14', bean: 1, bagColor: 'var(--crema)' },
  { id: 2, name: 'Sitio',     origin: 'Brazil',     notes: 'Hazelnut, Dark choc, Brown sugar',roast: 'Medium dark', price: '€14', bean: 2, bagColor: 'var(--roast)' },
  { id: 3, name: 'House',     origin: 'Blend',      notes: 'Toffee, Stone fruit, Milk choc',  roast: 'Medium',      price: '€13', bean: 3, bagColor: 'var(--ember-soft)' },
  { id: 4, name: 'Decaf Sur', origin: 'Colombia',   notes: 'Cola, Raisin, Cocoa',             roast: 'Medium',      price: '€15', bean: 4, bagColor: 'var(--ink-soft)' },
];

const BagCarousel = () => {
  const scrollRef = React.useRef(null);
  const [active, setActive] = React.useState(0);

  const scrollBy = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 360, behavior: 'smooth' });
  };

  return (
    <section style={{ background: 'var(--bg)', color: 'var(--ink)', padding: '120px 0 120px', position: 'relative' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', alignItems: 'end', gap: 48, marginBottom: 48 }}>
          <div>
            <div className="jv-caps" style={{ opacity: 0.55, color: 'var(--crema)', marginBottom: 20 }}>The bar today</div>
            <h2 className="jv-display" style={{ fontSize: 'clamp(36px, 4.8vw, 64px)', margin: 0, lineHeight: 1.04, fontWeight: 400 }}>
              Bags to take <span style={{ fontStyle: 'italic', color: 'var(--crema)' }}>home.</span>
            </h2>
          </div>
          <div style={{ maxWidth: 280, fontSize: 14, lineHeight: 1.55, color: 'var(--ink-soft)' }}>
            Roasted on Thursdays. Ground to your kit, or whole bean.
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button onClick={() => scrollBy(-1)} aria-label="Previous" style={subCarouselBtn}>←</button>
            <button onClick={() => scrollBy(1)} aria-label="Next" style={subCarouselBtn}>→</button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="jv-hide-scrollbar"
        style={{
          display: 'flex', gap: 24, overflowX: 'auto', scrollSnapType: 'x mandatory',
          padding: '8px 48px 40px',
        }}
      >
        {BAGS.map((b, i) => (
          <BagCard key={b.id} bag={b} index={i} />
        ))}
        <div style={{ flex: '0 0 1px' }} />
      </div>
    </section>
  );
};

const BagCard = ({ bag, index }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        flex: '0 0 340px', scrollSnapAlign: 'start',
        background: 'var(--bg-2)',
        border: '1px solid var(--line)',
        borderColor: hover ? 'var(--line-strong)' : 'var(--line)',
        display: 'flex', flexDirection: 'column',
        transition: 'all 300ms',
      }}
    >
      {/* Bag illustration */}
      <div style={{
        height: 320, position: 'relative', overflow: 'hidden',
        background: 'var(--bg-3)',
        display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
        borderBottom: '1px solid var(--line)',
      }}>
        {/* background bean, large + faint */}
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: 0.12, color: bag.bagColor,
          transition: 'all 400ms cubic-bezier(.2,.7,.3,1)',
          transform: hover ? 'scale(1.12) rotate(-6deg)' : 'scale(1) rotate(0)',
        }}>
          <Bean size={260} variant={bag.bean} color="currentColor" fill="none" strokeWidth={1.2} />
        </div>

        {/* Bag silhouette */}
        <svg viewBox="0 0 200 260" width="180" height="234" style={{
          position: 'relative',
          transition: 'transform 400ms cubic-bezier(.2,.7,.3,1)',
          transform: hover ? 'translateY(-6px)' : 'none',
          filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.25))',
        }}>
          {/* Bag shape */}
          <path d="M 28 40 L 172 40 L 172 248 Q 172 252 168 252 L 32 252 Q 28 252 28 248 Z"
                fill="var(--bg)" stroke="var(--line-strong)" strokeWidth="1.2" />
          {/* Top fold (pinched) */}
          <path d="M 28 40 L 40 24 L 160 24 L 172 40 Z" fill="var(--ink-mute)" opacity="0.3" />
          <line x1="40" y1="24" x2="160" y2="24" stroke="var(--line-strong)" strokeWidth="1.2" />
          {/* Valve circle */}
          <circle cx="100" cy="110" r="8" fill="none" stroke="var(--line-strong)" strokeWidth="1" />
          <circle cx="100" cy="110" r="3" fill="var(--ink-soft)" opacity="0.5" />
          {/* Label block */}
          <rect x="44" y="140" width="112" height="78" fill={bag.bagColor} opacity="0.18" />
          <text x="100" y="170" textAnchor="middle"
            style={{
              fontFamily: '"Fraunces", serif', fontSize: 22, fontStyle: 'italic',
              fill: 'var(--ink)', fontWeight: 400,
            }}>{bag.name}</text>
          <text x="100" y="190" textAnchor="middle"
            style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 9, letterSpacing: 1.5, fill: 'var(--ink-soft)', textTransform: 'uppercase' }}>
            {bag.origin}
          </text>
          <text x="100" y="208" textAnchor="middle"
            style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 8, letterSpacing: 1, fill: 'var(--ink-mute)', textTransform: 'uppercase' }}>
            250g · {bag.roast}
          </text>
        </svg>
      </div>

      {/* Info */}
      <div style={{ padding: '24px 26px 26px', display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <div className="jv-display" style={{ fontSize: 26, fontWeight: 400 }}>{bag.name}</div>
          <div className="jv-mono" style={{ fontSize: 14, color: 'var(--crema)' }}>{bag.price}</div>
        </div>
        <div style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--ink-soft)' }}>{bag.notes}</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 6, paddingTop: 14, borderTop: '1px solid var(--line)' }}>
          <div className="jv-mono jv-caps" style={{ opacity: 0.55, fontSize: 11 }}>{bag.roast} · 250g</div>
          <button className="btn btn-ghost" style={{ padding: '8px 16px', fontSize: 12 }}>Add to bag</button>
        </div>
      </div>
    </div>
  );
};

const subCarouselBtn = {
  width: 44, height: 44, borderRadius: '50%',
  border: '1px solid var(--line-strong)', background: 'transparent',
  color: 'var(--ink)', fontSize: 16, cursor: 'pointer',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  transition: 'all 200ms',
};

// ─────────────────────────────────────────────────────────
// IN STORE PRICE LIST
// ─────────────────────────────────────────────────────────
const MENU = [
  { group: 'Espresso bar', items: [
    { name: 'Espresso', price: '3.20', note: 'Single or double' },
    { name: 'Americano', price: '3.50', note: '' },
    { name: 'Flat white', price: '3.80', note: '' },
    { name: 'Cappuccino', price: '3.80', note: '' },
    { name: 'Latte', price: '3.90', note: 'Oat, almond +30c' },
    { name: 'Cortado', price: '3.60', note: '' },
  ]},
  { group: 'Slow bar', items: [
    { name: 'V60 pour-over', price: '4.50', note: 'Rotating single origin' },
    { name: 'Aeropress', price: '4.50', note: '' },
    { name: 'Batch filter', price: '3.30', note: 'Free refill before 11am' },
    { name: 'Cold brew', price: '4.20', note: 'Summer only' },
  ]},
  { group: 'Everything else', items: [
    { name: 'Matcha latte', price: '4.30', note: 'Ceremonial grade' },
    { name: 'Hot chocolate', price: '4.00', note: 'Single origin cacao' },
    { name: 'Chai', price: '4.00', note: 'House blend' },
    { name: 'Sparkling water', price: '2.80', note: 'Local, Kerry Spring' },
  ]},
];

const SectionMenu = () => (
  <section style={{ background: 'var(--bg-2)', color: 'var(--ink)', padding: '120px 48px' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'end', gap: 48, marginBottom: 72 }}>
        <div>
          <div className="jv-caps" style={{ opacity: 0.55, color: 'var(--crema)', marginBottom: 20 }}>In store</div>
          <h2 className="jv-display" style={{ fontSize: 'clamp(36px, 4.8vw, 64px)', margin: 0, lineHeight: 1.04, fontWeight: 400 }}>
            Prices at <span style={{ fontStyle: 'italic', color: 'var(--crema)' }}>the bar.</span>
          </h2>
        </div>
        <div style={{ maxWidth: 280, fontSize: 13, lineHeight: 1.5, color: 'var(--ink-soft)' }}>
          Bring your own cup, 30c off. Always.
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 64 }}>
        {MENU.map((g, i) => (
          <div key={i}>
            <div className="jv-mono jv-caps" style={{ opacity: 0.55, marginBottom: 20, paddingBottom: 14, borderBottom: '1px solid var(--line)' }}>
              {g.group}
            </div>
            {g.items.map((it, j) => (
              <div key={j} style={{
                display: 'grid', gridTemplateColumns: '1fr auto', gap: 12,
                padding: '14px 0',
                borderBottom: j === g.items.length - 1 ? 'none' : '1px dotted var(--line)',
                alignItems: 'baseline',
              }}>
                <div>
                  <div style={{ fontSize: 16, marginBottom: it.note ? 3 : 0 }}>{it.name}</div>
                  {it.note && (
                    <div style={{ fontSize: 12, color: 'var(--ink-mute)', fontStyle: 'italic', fontFamily: '"Fraunces", serif' }}>
                      {it.note}
                    </div>
                  )}
                </div>
                <div className="jv-mono" style={{ fontSize: 15, color: 'var(--crema)' }}>€{it.price}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─────────────────────────────────────────────────────────
// ROASTERY — earth to cup
// ─────────────────────────────────────────────────────────
const ROAST_STEPS = [
  { n: '01', title: 'The farm', text: 'We buy direct from 6 farms across Ethiopia, Colombia, Brazil, Kenya, Guatemala, Rwanda. Same farmers, year on year. We know their names.' },
  { n: '02', title: 'Green', text: 'Greens land in Dublin port, cross the Liffey, and get stored at 16 degrees in our space on East Wall Road. Cupped before they ever see heat.' },
  { n: '03', title: 'The roast', text: 'Every Thursday on a 12kg Giesen. Light for filter, medium for flat whites, one dark for the folks who like it that way. No chaff, no shortcuts.' },
  { n: '04', title: 'Rest', text: 'Beans rest for 7 to 10 days in valved bags. It matters more than you\'d think. Espresso peaks around day 10.' },
  { n: '05', title: 'The cup', text: 'We dial in every morning. Every origin gets its own recipe card. If it\'s not right, we pull it, re-grind, and start again.' },
];

const SectionRoastery = () => {
  const [active, setActive] = React.useState(0);
  return (
    <section style={{ background: 'var(--bg)', color: 'var(--ink)', padding: '120px 48px', position: 'relative' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'end', gap: 48, marginBottom: 72 }}>
          <div>
            <div className="jv-caps" style={{ opacity: 0.55, color: 'var(--crema)', marginBottom: 20 }}>The roastery</div>
            <h2 className="jv-display" style={{ fontSize: 'clamp(36px, 4.8vw, 64px)', margin: 0, lineHeight: 1.04, fontWeight: 400 }}>
              From the farm <span style={{ fontStyle: 'italic', color: 'var(--crema)' }}>to your cup.</span>
            </h2>
          </div>
          <div style={{ maxWidth: 280, fontSize: 14, lineHeight: 1.55, color: 'var(--ink-soft)' }}>
            A short walk from the cafe, on East Wall Road. Tours on Saturdays, by email only.
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'flex-start' }}>
          {/* Left: numbered steps */}
          <div>
            {ROAST_STEPS.map((s, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                style={{
                  display: 'block', width: '100%', textAlign: 'left',
                  padding: '28px 0',
                  borderTop: i === 0 ? '1px solid var(--line)' : 'none',
                  borderBottom: '1px solid var(--line)',
                  borderLeft: 'none', borderRight: 'none',
                  background: 'transparent',
                  cursor: 'pointer',
                  color: active === i ? 'var(--ink)' : 'var(--ink-mute)',
                  transition: 'all 250ms', fontFamily: 'inherit',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 20 }}>
                  <span className="jv-mono" style={{ fontSize: 13, opacity: 0.55, minWidth: 32 }}>{s.n}</span>
                  <span className="jv-display" style={{
                    fontSize: 32, fontWeight: 400,
                    fontStyle: active === i ? 'italic' : 'normal',
                    color: active === i ? 'var(--crema)' : 'inherit',
                    transition: 'all 250ms',
                  }}>{s.title}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Right: sticky illustrated pane */}
          <div style={{ position: 'sticky', top: 80 }}>
            <div style={{
              background: 'var(--bg-2)', border: '1px solid var(--line)',
              padding: '48px 44px', minHeight: 400,
              display: 'flex', flexDirection: 'column', gap: 32,
            }}>
              {/* Large numeric display */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="jv-display" style={{ fontSize: 96, lineHeight: 1, color: 'var(--roast)', fontWeight: 400, fontStyle: 'italic' }}>
                  {ROAST_STEPS[active].n}
                </div>
                <div style={{ color: 'var(--crema)', opacity: 0.4 }}>
                  <Bean size={80} variant={active % 5} color="currentColor" fill="none" strokeWidth={1.2} />
                </div>
              </div>

              {/* Text */}
              <div key={active} style={{ animation: 'jv-fadeup 400ms ease-out' }}>
                <div className="jv-display" style={{ fontSize: 34, lineHeight: 1.15, fontStyle: 'italic', fontWeight: 400, color: 'var(--ink)', marginBottom: 20 }}>
                  {ROAST_STEPS[active].title}
                </div>
                <div style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--ink-soft)' }}>
                  {ROAST_STEPS[active].text}
                </div>
              </div>

              {/* Progress */}
              <div style={{ marginTop: 'auto', display: 'flex', gap: 4 }}>
                {ROAST_STEPS.map((_, i) => (
                  <div key={i} style={{
                    flex: 1, height: 2,
                    background: i <= active ? 'var(--crema)' : 'var(--line)',
                    transition: 'background 400ms',
                  }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────
// PEOPLE PAGE — stories from the neighbourhood
// ─────────────────────────────────────────────────────────
const STORIES = [
  {
    name: 'Siobhán Ní Bhriain',
    since: 'Regular since 2020',
    role: 'Teacher, lives on North Strand',
    quote: 'It got me through lockdown, one takeaway flat white at a time.',
    story: 'When the world shut down in March 2020, Dara kept the hatch open. I\'d walk down from my flat on North Strand every morning for a flat white and a wave. Same 20-second chat, four feet apart. It was the only social contact I had some weeks.',
  },
  {
    name: 'Oisín Hughes',
    since: 'Regular since 2019',
    role: 'Software engineer, remote',
    quote: 'I get more work done here than in any office I\'ve worked in.',
    story: 'The back corner table with the good natural light is mine from 9 to 1 most weekdays. Niamh learnt my order on day three. I\'ve had more useful conversations with the people at the next table than I ever had in six years of open-plan offices.',
  },
  {
    name: 'Priya Sharma',
    since: 'Regular since 2021',
    role: 'Architect, Clontarf',
    quote: 'I walk past three other cafes on my way here. That says it all.',
    story: 'The walk from Clontarf is 20 minutes. There are at least three perfectly good coffee shops between my house and here. I don\'t go to them. Javaholics just feels like somewhere, instead of anywhere.',
  },
  {
    name: 'Conor Doyle',
    since: 'Regular since 2022',
    role: 'Park runner, D3 lifer',
    quote: 'Finish parkrun. Come here. The music is always right.',
    story: 'Saturday morning, 9:30am, I\'ve just run 5k around Fairview Park and I\'m sweating through the good t-shirt. Dara hands me a flat white and puts something slow and good on. It\'s a religion at this point.',
  },
  {
    name: 'Hannah Walsh',
    since: 'Regular since 2023',
    role: 'Just moved over from London',
    quote: 'First cafe that made me feel like I live in Dublin.',
    story: 'I moved from London in spring and spent the first few weeks feeling like a tourist in my own neighbourhood. Then I walked in here one Tuesday and Aoife asked how my day was in a way that made me believe she actually wanted to know. Something clicked.',
  },
  {
    name: 'Mark Kavanagh',
    since: 'Regular since 2019',
    role: 'Retired, day one customer',
    quote: 'A window seat, the house blend, an hour of peace.',
    story: 'I was here the morning they opened. I\'ve been here most mornings since. Half-nine, window seat, house blend, the paper. Some of the other regulars I\'ve known six years now. I wouldn\'t say we\'re friends. I\'d say we\'re neighbours.',
  },
];

const SectionStories = () => {
  return (
    <section style={{ background: 'var(--bg)', color: 'var(--ink)', padding: '120px 48px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div style={{ marginBottom: 72 }}>
          <div className="jv-caps" style={{ opacity: 0.55, color: 'var(--crema)', marginBottom: 20 }}>Stories</div>
          <h2 className="jv-display" style={{ fontSize: 'clamp(36px, 4.8vw, 64px)', margin: 0, lineHeight: 1.04, fontWeight: 400, maxWidth: 840 }}>
            Six people we see <span style={{ fontStyle: 'italic', color: 'var(--crema)' }}>more days than not.</span>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {STORIES.map((s, i) => (
            <StoryRow key={i} story={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StoryRow = ({ story, index }) => {
  const [open, setOpen] = React.useState(index === 0);
  return (
    <div style={{
      borderTop: '1px solid var(--line)',
      borderBottom: index === STORIES.length - 1 ? '1px solid var(--line)' : 'none',
      padding: '36px 0',
      display: 'grid',
      gridTemplateColumns: '90px 1fr auto',
      gap: 32,
      alignItems: 'start',
      cursor: 'pointer',
      transition: 'background 200ms',
    }}
    onClick={() => setOpen(o => !o)}
    >
      <div style={{
        width: 80, height: 80, borderRadius: '50%',
        background: 'var(--bg-2)',
        border: '1px solid var(--line)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: 'var(--crema)', flexShrink: 0,
      }}>
        <Bean size={50} variant={index % 5} color="currentColor" fill="none" strokeWidth={1.4} />
      </div>

      <div>
        <div style={{ display: 'flex', gap: 16, alignItems: 'baseline', flexWrap: 'wrap', marginBottom: 14 }}>
          <div className="jv-display" style={{ fontSize: 28, fontWeight: 400 }}>{story.name}</div>
          <div className="jv-mono jv-caps" style={{ opacity: 0.55, fontSize: 11 }}>{story.since}</div>
        </div>
        <div style={{
          fontFamily: '"Fraunces", serif', fontStyle: 'italic', fontSize: 22,
          lineHeight: 1.35, color: 'var(--crema)', marginBottom: 12, maxWidth: 640,
        }}>
          "{story.quote}"
        </div>
        <div style={{
          maxHeight: open ? 400 : 0,
          overflow: 'hidden',
          transition: 'max-height 500ms cubic-bezier(.2,.7,.3,1), opacity 400ms',
          opacity: open ? 1 : 0,
        }}>
          <div style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--ink-soft)', paddingTop: 6, maxWidth: 640 }}>
            {story.story}
          </div>
          <div className="jv-mono jv-caps" style={{ opacity: 0.4, fontSize: 11, marginTop: 18 }}>
            — {story.role}
          </div>
        </div>
      </div>

      <div style={{
        fontSize: 20, color: 'var(--crema)', opacity: 0.7,
        transform: open ? 'rotate(45deg)' : 'none',
        transition: 'transform 300ms',
        width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        +
      </div>
    </div>
  );
};

// Pull quotes for peopel page  — big visual interlude
const SectionPullQuote = () => (
  <section style={{ background: 'var(--bg-2)', color: 'var(--ink)', padding: '140px 48px', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
    <div style={{ maxWidth: 960, margin: '0 auto', textAlign: 'center' }}>
      <div style={{ color: 'var(--crema)', marginBottom: 40, display: 'flex', justifyContent: 'center', opacity: 0.7 }}>
        <Bean size={80} variant={2} color="currentColor" fill="none" strokeWidth={1.4} />
      </div>
      <div className="jv-display" style={{
        fontSize: 'clamp(28px, 3.6vw, 48px)', lineHeight: 1.25, fontWeight: 400,
        fontStyle: 'italic', color: 'var(--ink)', marginBottom: 32,
      }}>
        A cafe isn't a menu or a machine. It's the sum of the people who walk in, the ones who stay, and the ones behind the bar who remember how they take it.
      </div>
      <div className="jv-mono jv-caps" style={{ opacity: 0.55, fontSize: 12 }}>
        Dara O'Connell, founder
      </div>
    </div>
  </section>
);

// ─────────────────────────────────────────────────────────
// STORE — coming soon
// ─────────────────────────────────────────────────────────
const SectionStoreSoon = () => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => { setMounted(true); }, []);

  return (
    <section style={{
      background: 'var(--bg)', color: 'var(--ink)',
      minHeight: 'calc(100vh - 200px)',
      padding: '120px 48px 160px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Large rotating bean as centerpiece */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: 'var(--crema)', opacity: 0.06, pointerEvents: 'none',
      }}>
        <div style={{ animation: 'jv-spin 80s linear infinite' }}>
          <Bean size={720} variant={0} color="currentColor" fill="none" strokeWidth={0.8} />
        </div>
      </div>

      <div style={{
        position: 'relative', maxWidth: 900, margin: '0 auto', textAlign: 'center',
        paddingTop: 40,
      }}>
        <div className="jv-caps" style={{ opacity: 0.55, color: 'var(--crema)', marginBottom: 24, letterSpacing: 3 }}>
          Online store
        </div>

        <h2 className="jv-display" style={{
          fontSize: 'clamp(56px, 9vw, 140px)',
          margin: 0, lineHeight: 0.95, fontWeight: 400,
          transform: mounted ? 'none' : 'translateY(20px)',
          opacity: mounted ? 1 : 0,
          transition: 'all 900ms cubic-bezier(.2,.7,.3,1) 100ms',
        }}>
          Brewing
        </h2>
        <h2 className="jv-display" style={{
          fontSize: 'clamp(56px, 9vw, 140px)',
          margin: '0 0 56px', lineHeight: 0.95, fontWeight: 400, fontStyle: 'italic', color: 'var(--crema)',
          transform: mounted ? 'none' : 'translateY(20px)',
          opacity: mounted ? 1 : 0,
          transition: 'all 900ms cubic-bezier(.2,.7,.3,1) 280ms',
        }}>
          something good.
        </h2>

        <div style={{
          fontSize: 18, lineHeight: 1.6, maxWidth: 560, margin: '0 auto 56px',
          color: 'var(--ink-soft)',
        }}>
          An online shop for our beans, kit, and merch is on the way. Coffee, equipment, and a couple of t-shirts Dara designed at 2am.
        </div>

        {/* Countdown-ish pill row */}
        <div style={{
          display: 'inline-flex', gap: 32,
          padding: '20px 40px',
          border: '1px solid var(--line-strong)',
          marginBottom: 48,
        }}>
          <div>
            <div className="jv-mono jv-caps" style={{ opacity: 0.5, marginBottom: 6, fontSize: 11 }}>Expected</div>
            <div className="jv-display" style={{ fontSize: 22, fontStyle: 'italic' }}>Spring 2026</div>
          </div>
          <div style={{ width: 1, background: 'var(--line)' }} />
          <div>
            <div className="jv-mono jv-caps" style={{ opacity: 0.5, marginBottom: 6, fontSize: 11 }}>Shipping</div>
            <div className="jv-display" style={{ fontSize: 22, fontStyle: 'italic' }}>IE + UK</div>
          </div>
          <div style={{ width: 1, background: 'var(--line)' }} />
          <div>
            <div className="jv-mono jv-caps" style={{ opacity: 0.5, marginBottom: 6, fontSize: 11 }}>First up</div>
            <div className="jv-display" style={{ fontSize: 22, fontStyle: 'italic' }}>The bags</div>
          </div>
        </div>

        {/* Email capture */}
        <div style={{ maxWidth: 480, margin: '0 auto' }}>
          <div className="jv-mono jv-caps" style={{ opacity: 0.55, marginBottom: 14, fontSize: 12 }}>
            Be the first to know
          </div>
          <form onSubmit={(e) => e.preventDefault()} style={{
            display: 'flex', gap: 0,
            border: '1px solid var(--line-strong)',
          }}>
            <input
              type="email"
              placeholder="your@email.com"
              style={{
                flex: 1, background: 'transparent', border: 'none',
                padding: '16px 20px', color: 'var(--ink)', fontSize: 15,
                fontFamily: 'inherit', outline: 'none',
              }}
            />
            <button className="btn btn-primary" style={{ borderRadius: 0, padding: '0 28px' }}>
              Notify me
            </button>
          </form>
          <div className="jv-mono jv-caps" style={{ opacity: 0.4, fontSize: 10, marginTop: 14 }}>
            No spam. One email when we open.
          </div>
        </div>

        <div style={{
          marginTop: 72, paddingTop: 40,
          borderTop: '1px solid var(--line)',
          display: 'flex', justifyContent: 'center', gap: 40,
          fontSize: 13, color: 'var(--ink-soft)',
        }}>
          <span>In the meantime</span>
          <a href="Coffee.html" style={{ color: 'var(--crema)', textDecoration: 'none', borderBottom: '1px solid var(--crema)', paddingBottom: 2 }}>
            See our current beans →
          </a>
          <a href="Visit.html" style={{ color: 'var(--crema)', textDecoration: 'none', borderBottom: '1px solid var(--crema)', paddingBottom: 2 }}>
            Or come by the cafe →
          </a>
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────
// VISIT PAGE — hours, map, contact form
// ─────────────────────────────────────────────────────────
const SectionVisitContact = () => {
  return (
    <section style={{ background: 'var(--bg)', color: 'var(--ink)', padding: '100px 48px 140px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Top: hours + address + map */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 64, alignItems: 'stretch', marginBottom: 120 }}>
          {/* Left: info stack */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            <InfoBlock label="Address" body={<>Fairview Strand<br />Dublin 3, D03 N2X8</>} />
            <InfoBlock label="Hours"
              body={
                <div>
                  <HoursRow day="Mon – Fri" hours="7:30 – 18:00" />
                  <HoursRow day="Saturday" hours="8:30 – 18:00" />
                  <HoursRow day="Sunday" hours="8:30 – 17:00" />
                  <HoursRow day="Public holidays" hours="10:00 – 16:00" />
                </div>
              } />
            <InfoBlock label="Get in touch"
              body={<>
                <a href="mailto:hi@javaholics.ie" style={{ color: 'var(--crema)', textDecoration: 'none', borderBottom: '1px solid var(--crema)' }}>hi@javaholics.ie</a><br />
                <span style={{ color: 'var(--ink-soft)' }}>+353 1 555 0139</span>
              </>} />
            <InfoBlock label="Getting here"
              body={<>
                130 bus, Fairview stop<br />
                DART, Clontarf Road, 8 min walk<br />
                Bike stands outside, 4 of them
              </>} />
          </div>

          {/* Right: map */}
          <div style={{
            background: 'var(--bg-2)', position: 'relative', minHeight: 620,
            border: '1px solid var(--line)', overflow: 'hidden',
          }}>
            {/* Park area */}
            <div style={{ position: 'absolute', right: 0, top: 0, width: '58%', height: '72%', background: 'rgba(140,160,120,0.08)' }} />
            {/* Water */}
            <div style={{ position: 'absolute', left: 0, bottom: 0, width: '40%', height: '20%', background: 'rgba(120,150,180,0.06)' }} />
            {/* Roads */}
            <div style={{ position: 'absolute', left: '38%', top: 0, bottom: 0, width: 1, background: 'var(--line-strong)' }} />
            <div style={{ position: 'absolute', left: 0, top: '55%', right: 0, height: 1, background: 'var(--line-strong)' }} />
            <div style={{ position: 'absolute', left: 0, top: '75%', right: 0, height: 1, background: 'var(--line)' }} />
            <div style={{ position: 'absolute', left: '20%', top: 0, bottom: 0, width: 1, background: 'var(--line)' }} />
            <div style={{ position: 'absolute', left: '62%', top: 0, bottom: 0, width: 1, background: 'var(--line)' }} />

            {/* Grid texture */}
            <div aria-hidden style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'radial-gradient(circle at 1px 1px, var(--line) 1px, transparent 0)',
              backgroundSize: '30px 30px', opacity: 0.3,
            }} />

            {/* Pin */}
            <div style={{ position: 'absolute', left: '30%', top: '57%' }}>
              <div style={{
                width: 14, height: 14, borderRadius: '50%', background: 'var(--ember)',
                boxShadow: '0 0 0 8px rgba(216,120,80,0.18), 0 0 0 18px rgba(216,120,80,0.08), 0 0 0 32px rgba(216,120,80,0.04)',
                animation: 'jv-pin-pulse 2.4s ease-in-out infinite',
              }} />
            </div>
            <div className="jv-display" style={{
              position: 'absolute', left: 'calc(30% + 24px)', top: 'calc(57% - 30px)',
              fontSize: 22, fontStyle: 'italic', color: 'var(--ember)', whiteSpace: 'nowrap',
            }}>
              Javaholics
            </div>
            <div className="jv-mono jv-caps" style={{ position: 'absolute', left: 'calc(30% + 24px)', top: 'calc(57% + 18px)', opacity: 0.5, fontSize: 10 }}>
              53.362°N, 6.233°W
            </div>

            {/* Labels */}
            <div className="jv-mono jv-caps" style={{ position: 'absolute', right: 24, bottom: 24, opacity: 0.6, fontSize: 11 }}>Fairview Park</div>
            <div className="jv-mono jv-caps" style={{ position: 'absolute', left: 24, bottom: 44, opacity: 0.45, fontSize: 11 }}>North Strand</div>
            <div className="jv-mono jv-caps" style={{ position: 'absolute', left: 24, top: 24, opacity: 0.45, fontSize: 11 }}>Dublin 3</div>
            <div className="jv-mono jv-caps" style={{ position: 'absolute', left: 24, bottom: 14, opacity: 0.35, fontSize: 10 }}>River Liffey</div>

            {/* Corner CTA */}
            <a href="https://maps.google.com/?q=Fairview+Strand+Dublin" target="_blank" rel="noreferrer" style={{
              position: 'absolute', right: 20, top: 20,
              padding: '10px 18px', fontSize: 12,
              background: 'var(--bg)', border: '1px solid var(--line-strong)',
              color: 'var(--ink)', textDecoration: 'none',
              transition: 'all 200ms',
            }}>
              Open in Google Maps →
            </a>
          </div>
        </div>

        {/* Contact form */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 64, alignItems: 'start' }}>
          <div>
            <div className="jv-caps" style={{ opacity: 0.55, color: 'var(--crema)', marginBottom: 20 }}>Say hello</div>
            <h2 className="jv-display" style={{ fontSize: 'clamp(36px, 4.4vw, 56px)', margin: 0, lineHeight: 1.04, fontWeight: 400 }}>
              Got a <span style={{ fontStyle: 'italic', color: 'var(--crema)' }}>question?</span>
            </h2>
            <div style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-soft)', marginTop: 24, maxWidth: 360 }}>
              Events, wholesale, a lost jumper, an idea for a better playlist. We read everything.
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

const InfoBlock = ({ label, body }) => (
  <div style={{ paddingBottom: 32, borderBottom: '1px solid var(--line)' }}>
    <div className="jv-mono jv-caps" style={{ opacity: 0.55, marginBottom: 14, fontSize: 11 }}>{label}</div>
    <div style={{ fontSize: 16, lineHeight: 1.55 }}>{body}</div>
  </div>
);

const HoursRow = ({ day, hours }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', fontSize: 15 }}>
    <span>{day}</span>
    <span className="jv-mono" style={{ color: 'var(--crema)' }}>{hours}</span>
  </div>
);

const ContactForm = () => {
  const [sent, setSent] = React.useState(false);
  const [topic, setTopic] = React.useState('General');
  const topics = ['General', 'Events', 'Wholesale', 'Press'];

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div style={{
        border: '1px solid var(--line-strong)', padding: '64px 48px',
        background: 'var(--bg-2)', textAlign: 'center',
      }}>
        <div style={{ color: 'var(--crema)', marginBottom: 24, display: 'flex', justifyContent: 'center' }}>
          <Bean size={60} variant={1} color="currentColor" fill="none" strokeWidth={1.4} />
        </div>
        <div className="jv-display" style={{ fontSize: 36, fontStyle: 'italic', marginBottom: 14, fontWeight: 400 }}>
          Thanks, talk soon.
        </div>
        <div style={{ fontSize: 14, color: 'var(--ink-soft)' }}>
          We read every message. Usually reply within a day.
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} style={{
      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24,
    }}>
      <div style={{ gridColumn: '1 / -1', marginBottom: 8 }}>
        <div className="jv-mono jv-caps" style={{ opacity: 0.55, marginBottom: 12, fontSize: 11 }}>What's it about</div>
        <div style={{ display: 'flex', gap: 0, flexWrap: 'wrap' }}>
          {topics.map((t) => (
            <button
              key={t} type="button" onClick={() => setTopic(t)}
              style={{
                padding: '10px 20px', fontSize: 13,
                background: topic === t ? 'var(--crema)' : 'transparent',
                color: topic === t ? 'var(--bg)' : 'var(--ink)',
                border: '1px solid',
                borderColor: topic === t ? 'var(--crema)' : 'var(--line-strong)',
                cursor: 'pointer', fontFamily: 'inherit', marginRight: -1,
                transition: 'all 200ms',
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <Field label="Your name" placeholder="Jane O'Neill" />
      <Field label="Email" placeholder="you@email.com" type="email" />

      <div style={{ gridColumn: '1 / -1' }}>
        <Field label="Message" placeholder="Tell us..." textarea />
      </div>

      <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="jv-mono jv-caps" style={{ opacity: 0.45, fontSize: 11 }}>
          We'll reply within a working day
        </div>
        <button type="submit" className="btn btn-primary">Send message</button>
      </div>
    </form>
  );
};

const Field = ({ label, placeholder, type = 'text', textarea }) => (
  <label style={{ display: 'block' }}>
    <div className="jv-mono jv-caps" style={{ opacity: 0.55, marginBottom: 10, fontSize: 11 }}>{label}</div>
    {textarea ? (
      <textarea
        rows={5}
        placeholder={placeholder}
        style={{
          width: '100%', background: 'transparent',
          border: '1px solid var(--line-strong)',
          padding: '14px 16px', color: 'var(--ink)', fontSize: 15,
          fontFamily: 'inherit', outline: 'none', resize: 'vertical',
          transition: 'border-color 200ms',
        }}
      />
    ) : (
      <input
        type={type}
        placeholder={placeholder}
        style={{
          width: '100%', background: 'transparent',
          border: '1px solid var(--line-strong)',
          padding: '14px 16px', color: 'var(--ink)', fontSize: 15,
          fontFamily: 'inherit', outline: 'none',
          transition: 'border-color 200ms',
        }}
      />
    )}
  </label>
);

Object.assign(window, {
  SecondaryHero,
  BagCarousel, SectionMenu, SectionRoastery,
  SectionStories, SectionPullQuote,
  SectionStoreSoon,
  SectionVisitContact,
});
