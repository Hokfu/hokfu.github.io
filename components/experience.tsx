import { portfolio } from "@/data/site";
import { SectionHeading } from "@/components/section-heading";

export function Experience() {
  return (
    <section className="section reveal" id="experience">
      <SectionHeading eyebrow="Career" title="Experience" />
      <div className="timeline">
        {portfolio.experience.map((item) => (
          <article className="timeline-item" key={`${item.company}-${item.period}`}>
            <div className="timeline-head">
              <h3>{item.role}</h3>
              <p>{item.period}</p>
            </div>
            <p className="timeline-meta">
              {item.company}, {item.location}
            </p>
            <ul>
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
