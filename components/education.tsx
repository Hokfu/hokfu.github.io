import { portfolio } from "@/data/site";
import { SectionHeading } from "@/components/section-heading";

export function Education() {
  return (
    <section className="section reveal" id="education">
      <SectionHeading eyebrow="Background" title="Education & Certificates" />
      <div className="edu-grid">
        <article className="edu-card">
          <h3>Education</h3>
          <ul className="stack-list">
            {portfolio.education.map((item) => (
              <li key={`${item.school}-${item.period}`}>
                <p>{item.school}</p>
                {item.detail ? <p className="muted">{item.detail}</p> : null}
                <p className="mono">{item.period}</p>
              </li>
            ))}
          </ul>
        </article>
        <article className="edu-card">
          <h3>Certificates</h3>
          <ul className="stack-list">
            {portfolio.certificates.map((item) => (
              <li key={item.label}>
                <p>
                  <a href={item.href} rel="noreferrer" target="_blank">
                    {item.label}
                  </a>
                </p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
