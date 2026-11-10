import SectionHeading from '../ui/SectionHeading';
import TimelineItem from './TimelineItem';
import { experience } from '../../data/experience';

export default function WorkExperience() {
  return (
    <section id="work" className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
      <SectionHeading eyebrow="Places I have worked at" title="Work Experience." center reveal={false} />

      <div className="mt-20 flex flex-col">
        <div className="vertical-timeline vertical-timeline--animate vertical-timeline--two-columns">
          {experience.map((job) => (
            <TimelineItem key={job.title + job.company} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}
