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
    title: 'Door Buster - Java Game',
    cover: { image: '/images/door-buster-game.png', alt: 'Door Buster - Java Game' },
    links: [
      { type: 'github', href: 'https://github.com/gavin-waako/door-buster-hashmap-game' },
      { type: 'live', href: 'https://github.com/gavin-waako/door-buster-hashmap-game' },
    ],
    description:
      'DoorBuster is a simple 2D multiplayer adventure game set inside a large fortress made of connected rooms. Advance through the chambers, collect items to stay alive, and survive the hazards.',
    tags: [
      { text: 'Java', color: 'blue' },
      { text: 'Swing UI', color: 'orange' },
      { text: 'Video game', color: 'green' }
    ],
  },
  {
    title: 'Dark/Light Mode for Chrome',
    cover: { image: '/images/dark-theme-chrome.png', alt: 'Dark/Light Mode for Chrome' },
    links: [
      { type: 'github', href: 'https://github.com/gavin-waako/theme-shifter' },
      { type: 'live', href: 'https://github.com/gavin-waako/theme-shifter' },
    ],
    description:
      'A Chrome extension that allows users to toggle between dark and light themes for a more comfortable browsing experience.',
    tags: [
      { text: 'JavaScript', color: 'blue' },
      { text: 'Chrome Extension', color: 'orange' },
    ],
  },
  // {
  //   title: 'TouchPointCare',
  //   cover: { image: '/images/touch-point-ehr-demo.gif', alt: 'TouchPointCare' },
  //   links: [
  //     { type: 'github', href: 'https://github.com/gavin-waako/touch-point-care' },
  //     { type: 'live', href: '#' },
  //   ],
  //   description:
  //     'TouchPoint EHR is an electronic health record (EHR) platform designed for the healthcare industry especially senior living communities. and rehabilitation centers. It provides a comprehensive solution for managing patient records, clinical workflows, and administrative tasks. I contributed to the development of this platform by implementing key features such as patient data management, appointment scheduling, and reporting functionalities.',
  //   tags: [
  //     { text: '#java', color: 'orange' },
  //     { text: '#spring mvc', color: 'green' },
  //     { text: '#mysql', color: 'blue' },
  //   ],
  // },
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
