// One entry of the vertical timeline (round icon + card). Timeline CSS lives in globals.css.
import type { Job } from '../../data/experience';

export default function TimelineItem({ job }: { job: Job }) {
  return (
    <div className="vertical-timeline-element">
      <span className="vertical-timeline-element-icon bounce-in" style={{ background: 'rgb(255, 255, 255)' }}>
        <div className={`flex justify-center items-center w-full h-full ${job.iconClass}`}>{job.iconText}</div>
      </span>

      <div
        className="vertical-timeline-element-content bounce-in"
        style={{ background: 'rgb(29, 24, 54)', color: 'rgb(255, 255, 255)' }}
      >
        <div className="vertical-timeline-element-content-arrow" style={{ borderRight: '7px solid rgb(29, 24, 54)' }}></div>
        <div>
          <h3 className="text-white text-[24px] font-bold">{job.title}</h3>
          <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
            {job.company}
          </p>
        </div>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {job.points.map((point, i) => (
            <li key={i} className="text-white-100 text-[14px] pl-1 tracking-wider">
              {point}
            </li>
          ))}
        </ul>
        <span className="vertical-timeline-element-date">{job.date}</span>
      </div>
    </div>
  );
}
