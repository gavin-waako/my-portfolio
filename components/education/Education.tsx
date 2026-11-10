import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import { education } from '../../data/education';

export default function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-7xl px-6 py-8 sm:px-16 sm:py-12">
      <SectionHeading eyebrow="Academics" title="Education." size="sm" />
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {education.map((item) => (
          <Reveal key={item.degree} className="rounded-2xl border border-white/5 bg-tertiary p-6">
            <p className="text-sm font-semibold text-accent">{item.period}</p>
            <h3 className="mt-1 text-[20px] font-bold text-white">{item.degree}</h3>
            <p className="text-[15px] font-medium text-secondary">{item.school}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
