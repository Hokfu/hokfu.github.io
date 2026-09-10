import { portfolio } from "@/data/site";
import { SectionHeading } from "@/components/section-heading";

export function Skills() {
  return (
    <section className="section reveal" id="skills">
      <SectionHeading eyebrow="Capabilities" title="Skills" />
      <div className="skill-grid">
        {Object.entries(portfolio.skills).map(([category, values]) => (
          <article className="skill-card" key={category}>
            <h3>{category}</h3>
            <ul>
              {values.map((value) => (
                <li key={`${category}-${value}`}>{value}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
