import { portfolio } from "@/data/site";
import { SectionHeading } from "@/components/section-heading";

export function CaseStudies() {
  return (
    <section className="section reveal" id="work">
      <SectionHeading eyebrow="Selected Work" title="Case Studies" />
      <div className="card-grid">
        {portfolio.caseStudies.map((item) => (
          <article className="card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <ul className="tag-list">
              {item.stack.map((tag) => (
                <li key={`${item.title}-${tag}`}>{tag}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
