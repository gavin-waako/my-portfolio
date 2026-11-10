import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-10 sm:px-16 sm:py-16">
      <SectionHeading eyebrow="Introduction" title="About Me." />
      <Reveal as="p" className="mt-4 max-w-6xl text-[17px] leading-[30px] text-secondary">
        For over three years, I ran a software development agency as a self-taught developer, architecting, building,
        and shipping production web and mobile applications from concept to deployment. That founder background taught
        me that: great software isn&apos;t measured by lines of code, but by reliability, performance, and whether
        people actually use it.
        <br />
        <br />
        To formalize my engineering foundation with rigorous theory and systems principles, I am pursuing an
        Associate’s Degree in Computer Science at Massachusetts Bay Community College. My technical focus is in the
        field of software engineering.
        <br />
        <br />
        Alongside my studies, I work as a Student Assistant in MassBay’s Career Services Office, helping peers navigate
        technical career development, resume strategy, and job searches.
      </Reveal>
    </section>
  );
}
