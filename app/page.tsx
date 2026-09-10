import { CaseStudies } from "@/components/case-studies";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { TopNav } from "@/components/top-nav";
import { portfolio } from "@/data/site";

export default function HomePage() {
  return (
    <div className="page-wrap">
      <div className="grain" aria-hidden />
      <header className="site-header reveal">
        <a href="#top" className="brand">
          {portfolio.name}
        </a>
        <TopNav />
      </header>

      <main>
        <Hero />
        <CaseStudies />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>

      <footer className="site-footer">
        <p>{new Date().getFullYear()} Khant Htoo Naing</p>
      </footer>
    </div>
  );
}
