import SectionHeading from '../ui/SectionHeading';
import TechChip from './TechChip';
import { technologies } from '../../data/technologies';

export default function Technologies() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-10 sm:px-16">
      <SectionHeading eyebrow="My Skills" title="Technologies." center />
      <div id="tech" className="mt-8 flex flex-wrap items-center justify-center gap-4 px-2 md:px-12">
        {technologies.map(([name, color], i) => (
          <TechChip key={i} name={name} color={color} index={i} />
        ))}
      </div>
    </section>
  );
}
