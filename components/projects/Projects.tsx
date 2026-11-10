import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import ProjectSlider from './ProjectSlider';
import { projects } from '../../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-10 sm:px-16 sm:py-16">
      <SectionHeading eyebrow="Check out my latest work" title="Projects." />
      <Reveal as="p" className="mt-3 max-w-5xl text-[17px] leading-[30px] text-secondary">
        This section showcases some of the real-world software I’ve designed, built, and shipped from concept to
        deployment. It covers an extensive range of technologies I&apos;ve worked with along the way.
      </Reveal>
      <ProjectSlider projects={projects} />
    </section>
  );
}
