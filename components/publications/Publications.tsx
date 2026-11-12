import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import { publications } from '../../data/publications';

export default function Publications() {
  return (
    <section id="publications" className="relative mx-auto max-w-7xl px-6 py-8 sm:px-16 sm:py-12">
      <SectionHeading eyebrow="Technical" title="Writings." size="sm" />
      <ul className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/5 bg-tertiary">
        {publications.map((pub) => (
          <Reveal as="li" key={pub.title} style={{ transitionDelay: '80ms' }}>
            <a href={pub.href} className="group flex items-start justify-between gap-4 p-6 transition hover:bg-white/5">
              <div>
                <h3 className="text-[18px] font-bold text-white">{pub.title}</h3>
                <p className="mt-1 text-[14px] text-secondary">{pub.venue}</p>
                <p className="mt-1 text-[14px] italic text-secondary/80">{pub.authors}</p>
              </div>
              <span className="mt-1 text-secondary transition group-hover:translate-x-1 group-hover:text-white">→</span>
            </a>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
