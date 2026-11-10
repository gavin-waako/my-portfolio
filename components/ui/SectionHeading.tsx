import Reveal from './Reveal';

/**
 * Small grey eyebrow text + big white title used at the top of each section.
 *  - size="lg"  → About, Work, Technologies, Projects (big title)
 *  - size="sm"  → Education, Publications, Certifications (smaller title)
 *  - center     → centre-align the text
 *  - reveal     → fade in on scroll (Work Experience doesn't)
 */
interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  size?: 'lg' | 'sm';
  center?: boolean;
  reveal?: boolean;
}

export default function SectionHeading({ eyebrow, title, size = 'lg', center = false, reveal = true }: SectionHeadingProps) {
  const titleClass =
    size === 'lg'
      ? 'text-[30px] font-black text-white xs:text-[40px] sm:text-[50px] md:text-[60px]'
      : 'text-[26px] font-black text-white sm:text-[34px]';

  const content = (
    <>
      <p className="text-[14px] uppercase tracking-wider text-secondary sm:text-[18px]">{eyebrow}</p>
      <h2 className={titleClass}>{title}</h2>
    </>
  );

  const wrapperClass = center ? 'text-center' : '';

  return reveal ? (
    <Reveal className={wrapperClass}>{content}</Reveal>
  ) : (
    <div className={wrapperClass}>{content}</div>
  );
}
