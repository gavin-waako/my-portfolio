// Work experience shown in the timeline (newest first).
// iconClass sets the size of the text inside the round icon.
export interface Job {
  title: string;
  company: string;
  date: string;
  iconText: string;
  iconClass: string;
  points: string[];
}

export const experience: Job[] = [
  // {
  //   title: 'Software Engineer Intern',
  //   company: 'MEDITECH',
  //   date: 'May 2027 - Aug 2027',
  //   icon: 'wifi', iconBg: 'rgb(227, 25, 55)',
  //   points: [
  //     'Contributed to the development of backend services powering MEDITECH’s global tax compliance infrastructure, enabling accurate and scalable tax computation across energy, retail, manufacturing, and service domains.',
  //     'Integrated internal platforms with third-party tax engines to automate real-time tax calculation and ensure regulatory compliance across multiple international jurisdictions.',
  //     'Gained deep exposure to enterprise architecture, financial systems, and large-scale backend engineering in a high-impact, fast-paced environment.',
  //   ],
  // },
  {
    title: 'Student Assistant Intern',
    company: 'CAREER SERVICES OFFICE, MASSBAY COMMUNITY COLLEGE',
    date: 'Oct 2026 - Present',
    iconText: 'MBCC',
    iconClass: 'font-black text-black text-base',
    points: [
      "Promoted MassBay's mentoring programs, acted as a student ambassador to recruit peers and raise awareness for the college's mentoring initiatives.",
      'Managed Handshake and provided operational support by helping students navigate the Handshake job platform and handling database updates.',
      'Created event marketing materials, including digital flyers and social media content, to promote on-campus career fairs and workshops.',
    ],
  },
  {
    title: 'Web / Mobile Developer',
    company: 'BELUGA TECH',
    date: 'Aug 2021 - Dec 2024',
    iconText: 'BT',
    iconClass: 'font-black text-black text-lg',
    points: [
      'Architected, programmed and deployed responsive websites and cross-platform mobile applications for 15+ clients, delivering end-to-end solutions that streamlined digital operations and expanded user reach.',
      'Designed high-fidelity wireframes, user interfaces, and custom digital graphics, translating client business requirements into intuitive, brand-aligned user experiences.',
      'Produced and edited promotional video content and marketing graphics, enhancing client campaign engagement and driving stronger product visibility across digital channels.',
    ],
  },
];
