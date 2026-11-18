export type TagColor = 'orange' | 'green' | 'blue';

export interface ProjectLink {
  type: 'github' | 'live';
  href: string;
}

export interface Project {
  title: string;
  cover: { label?: string; gradient?: string; image?: string; alt?: string };
  links: ProjectLink[];
  description: string;
  tags: { text: string; color: TagColor }[];
}

export const projects: Project[] = [
  {
    title: 'TouchPointCare',
    cover: { image: '/images/touch-point-ehr-demo.gif', alt: 'TouchPointCare' },
    links: [
      { type: 'github', href: 'https://github.com/gavin-waako/touch-point-care' },
      { type: 'live', href: '#' },
    ],
    description:
      'TouchPoint EHR is an electronic health record (EHR) platform designed for the healthcare industry especially senior living communities. and rehabilitation centers. It provides a comprehensive solution for managing patient records, clinical workflows, and administrative tasks. I contributed to the development of this platform by implementing key features such as patient data management, appointment scheduling, and reporting functionalities.',
    tags: [
      { text: '#java', color: 'orange' },
      { text: '#spring mvc', color: 'green' },
      { text: '#mysql', color: 'blue' },
    ],
  },
  // {
  //   title: "Nana's Closet",
  //   cover: { image: '/images/nanas-closet.png', alt: "Nana's Closet" },
  //   links: [],
  //   description:
  //     'Implemented Face Match and Liveness Check feature, reducing identity fraud by up to 95%. Integrated new features such as SMS, Email and Push Notification functionalities, facilitating 2FA, immediate alerts & timely reminders to users on transactions.',
  //   tags: [
  //     { text: '#golang', color: 'orange' },
  //     { text: '#terraform', color: 'blue' },
  //     { text: '#aws', color: 'orange' },
  //     { text: '#docker', color: 'blue' },
  //   ],
  // },
  {
    title: 'Wellesley Cafe - EPOS',
    cover: { image: '/images/wellesley-cafe.png', alt: 'Wellesley Cafe - EPOS' },
    links: [
      { type: 'github', href: 'https://github.com/gavin-waako/cafe-pos-system' },
      { type: 'live', href: '#' },
    ],
    description:
      'This project is a Java desktop GUI application for the Wellesley Cafe. It allows staff to manage orders, inventory, and customer information efficiently. I built it as a class project for CS200 Java Programming course, and demonstrates the application of object-oriented programming principles, and collections in a real-world scenario.',
    tags: [
      { text: 'Java', color: 'blue' },
      { text: 'Swing UI', color: 'orange' },
    ],
  },
  {
    title: 'InboxWhiz - Chrome Extension',
    cover: { label: 'InboxWhiz - Chrome Extension', gradient: 'from-pink-500/40' },
    links: [
      { type: 'github', href: 'https://github.com/gavin-waako/inboxwhiz' },
      { type: 'live', href: '#' },
    ],
    description:
      'InboxWhiz is a Chrome extension that enhances email productivity by providing features such as email tracking, scheduling, and templates. I developed this extension to help users manage their inbox more effectively, and it demonstrates my skills in web development, browser APIs, and user experience design.',
    tags: [
      { text: 'JavaScript', color: 'blue' },
      { text: 'Chrome Extension', color: 'orange' },
      { text: '#postgresql', color: 'green' },
    ],
  },
  // {
  //   title: 'Lensly - iOS App',
  //   cover: { label: 'Project Four', gradient: 'from-pink-500/40' },
  //   links: [],
  //   description:
  //     'Placeholder description. Replace this with a short summary of what you built, the problem it solves and the impact it had.',
  //   tags: [
  //     { text: '#tag', color: 'blue' },
  //     { text: '#tag', color: 'green' },
  //     { text: '#tag', color: 'orange' },
  //   ],
  // },
  // {
  //   title: 'Syntax Error - GameBoy Color Game',
  //   cover: { label: 'Project Five', gradient: 'from-amber-500/40' },
  //   links: [],
  //   description:
  //     'Placeholder description. Replace this with a short summary of what you built, the problem it solves and the impact it had.',
  //   tags: [
  //     { text: '#tag', color: 'blue' },
  //     { text: '#tag', color: 'green' },
  //     { text: '#tag', color: 'orange' },
  //   ],
  // },
  // {
  //   title: 'Dark Dindy',
  //   cover: { label: 'Project Six', gradient: 'from-cyan-500/40' },
  //   links: [],
  //   description:
  //     'Placeholder description. Replace this with a short summary of what you built, the problem it solves and the impact it had.',
  //   tags: [
  //     { text: '#tag', color: 'blue' },
  //     { text: '#tag', color: 'green' },
  //     { text: '#tag', color: 'orange' },
  //   ],
  // },
  // {
  //   title: 'Project Seven',
  //   cover: { label: 'Project Seven', gradient: 'from-violet-500/40' },
  //   links: [],
  //   description:
  //     'Placeholder description. Replace this with a short summary of what you built, the problem it solves and the impact it had.',
  //   tags: [
  //     { text: '#tag', color: 'blue' },
  //     { text: '#tag', color: 'green' },
  //     { text: '#tag', color: 'orange' },
  //   ],
  // },
];
