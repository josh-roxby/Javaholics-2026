// Full landing page — night mode only
const LandingPage = () => {
  React.useEffect(() => {
    const els = document.querySelectorAll('.jv-reveal');
    const vh = window.innerHeight;
    els.forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.9) { el.classList.add('in'); }
      else { el.classList.add('jv-reveal-armed'); }
    });
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.remove('jv-reveal-armed');
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -80px 0px' });
    els.forEach(el => { if (!el.classList.contains('in')) io.observe(el); });
    return () => io.disconnect();
  }, []);

  return (
    <div style={{ background: 'var(--bg)' }}>
      <Hero />
      <Marquee />
      <div className="jv-reveal"><SectionSpace /></div>
      <div className="jv-reveal"><SectionCoffee /></div>
      <div className="jv-reveal"><SectionPeople /></div>
      <div className="jv-reveal"><SectionCommunity /></div>
      <Footer />
    </div>
  );
};

Object.assign(window, { LandingPage });
