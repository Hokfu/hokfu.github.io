import { portfolio } from "@/data/site";

export function Hero() {
  return (
    <section className="hero reveal" id="top">
      <p className="kicker">{portfolio.role}</p>
      <h1>{portfolio.heroTitle}</h1>
      <p className="summary">{portfolio.heroSummary}</p>
      <div className="hero-actions">
        <a className="button button-primary" href="#work">
          View Work
        </a>
        <a className="button" href="#contact">
          Contact
        </a>
      </div>
    </section>
  );
}
