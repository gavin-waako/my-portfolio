import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import { AwardIcon } from '../icons';
import { certifications } from '../../data/certifications';

export default function Certifications() {
  return (
    <section id="certifications" className="relative mx-auto max-w-7xl px-6 py-8 sm:px-16 sm:py-12">
      <SectionHeading eyebrow="Credentials" title="Professional Certifications." size="sm" />
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <Reveal
            as="a"
            key={cert.name}
            href={cert.href}
            className="group flex items-start gap-4 rounded-2xl border border-white/5 bg-tertiary p-5 transition hover:border-accent/50 hover:bg-white/5"
            style={i > 0 ? { transitionDelay: `${i * 80}ms` } : undefined}
          >
            <span className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-full bg-accent/15 text-accent">
              <AwardIcon />
            </span>
            <div>
              <h3 className="text-[16px] font-bold text-white">{cert.name}</h3>
              <p className="mt-1 text-[14px] text-secondary">{cert.issuer}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
