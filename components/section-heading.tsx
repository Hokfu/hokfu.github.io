type SectionHeadingProps = {
  eyebrow: string;
  title: string;
};

export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <header className="section-heading">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
    </header>
  );
}
