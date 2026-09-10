import { portfolio } from "@/data/site";
import { SectionHeading } from "@/components/section-heading";

export function Contact() {
  return (
    <section className="section reveal" id="contact">
      <SectionHeading eyebrow="Get In Touch" title="Contact" />
      <article className="contact-card">
        <h3>{portfolio.name}</h3>
        <p>{portfolio.about}</p>
        <ul>
          <li>
            Email: <a href={`mailto:${portfolio.contact.email}`}>{portfolio.contact.email}</a>
          </li>
          <li>Phone: {portfolio.contact.phone}</li>
        </ul>
        <div className="socials">
          {portfolio.socials.map((social) => (
            <a href={social.href} key={social.label} rel="noreferrer" target="_blank">
              {social.label}
            </a>
          ))}
        </div>
      </article>
    </section>
  );
}
