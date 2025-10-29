// app/page.tsx
export default function Home(): JSX.Element {
  return (
    <main className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">
          MetaQuant<span className="accent">Pro</span>
        </h1>

        <p className="hero-sub">
          Your AI-powered Trading Assistant — combining live market insights,
          education, and analytics to help traders make smarter decisions.
        </p>

        <a className="hero-cta" href="#features" role="button">
          🚀 Explore Now
        </a>
      </div>

      {/* decorative animated circles */}
      <div className="particle p1" />
      <div className="particle p2" />
      <div className="particle p3" />
    </main>
  );
}
