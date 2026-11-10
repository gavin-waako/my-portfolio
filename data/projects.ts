// Projects shown in the slider.
//  cover.gradient → Tailwind "from-…" colour for the placeholder cover
//  cover.image    → use an image from /public instead of the gradient
//  links          → github / live buttons in the top-right corner of the cover
//  tags[].color   → orange | green | blue  (gradient text colours)
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
    cover: { label: 'TouchPointCare', gradient: 'from-emerald-500/40' },
    links: [{ type: 'github', href: 'https://github.com/gavin-waako/touch-point-care' }],
    description:
      'Revolutionized urban parking with a platform that empowers users to monetize their unused parking spaces, turning driveways and private spots into income-generating assets while helping drivers effortlessly locate and reserve parking in real time.',
    tags: [
      { text: '#java', color: 'orange' },
      { text: '#spring mvc', color: 'green' },
      { text: '#mysql', color: 'blue' },
    ],
  },
  {
    title: "Nana's Closet",
    cover: { label: "Nana's Closet", gradient: 'from-green-500/40' },
    links: [],
    description:
      'Implemented Face Match and Liveness Check feature, reducing identity fraud by up to 95%. Integrated new features such as SMS, Email and Push Notification functionalities, facilitating 2FA, immediate alerts & timely reminders to users on transactions.',
    tags: [
      { text: '#golang', color: 'orange' },
      { text: '#terraform', color: 'blue' },
      { text: '#aws', color: 'orange' },
      { text: '#docker', color: 'blue' },
    ],
  },
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
    cover: { label: 'Project Four', gradient: 'from-pink-500/40' },
    links: [],
    description:
      'Enhanced data processing workflows by designing and implementing a Matching & Pinning Rule Engine, creating a Rule Evaluator & Executor to efficiently process & apply rules to data events from Kafka and optimizing data processing across multiple queues.',
    tags: [
      { text: 'Java', color: 'blue' },
      { text: 'Swing UI', color: 'orange' },
      { text: '#postgresql', color: 'green' },
    ],
  },
  {
    title: 'Lensly - iOS App',
    cover: { label: 'Project Four', gradient: 'from-pink-500/40' },
    links: [],
    description:
      'Placeholder description. Replace this with a short summary of what you built, the problem it solves and the impact it had.',
    tags: [
      { text: '#tag', color: 'blue' },
      { text: '#tag', color: 'green' },
      { text: '#tag', color: 'orange' },
    ],
  },
  {
    title: 'Syntax Error - GameBoy Color Game',
    cover: { label: 'Project Five', gradient: 'from-amber-500/40' },
    links: [],
    description:
      'Placeholder description. Replace this with a short summary of what you built, the problem it solves and the impact it had.',
    tags: [
      { text: '#tag', color: 'blue' },
      { text: '#tag', color: 'green' },
      { text: '#tag', color: 'orange' },
    ],
  },
  {
    title: 'Dark Dindy',
    cover: { label: 'Project Six', gradient: 'from-cyan-500/40' },
    links: [],
    description:
      'Placeholder description. Replace this with a short summary of what you built, the problem it solves and the impact it had.',
    tags: [
      { text: '#tag', color: 'blue' },
      { text: '#tag', color: 'green' },
      { text: '#tag', color: 'orange' },
    ],
  },
  {
    title: 'Project Seven',
    cover: { label: 'Project Seven', gradient: 'from-violet-500/40' },
    links: [],
    description:
      'Placeholder description. Replace this with a short summary of what you built, the problem it solves and the impact it had.',
    tags: [
      { text: '#tag', color: 'blue' },
      { text: '#tag', color: 'green' },
      { text: '#tag', color: 'orange' },
    ],
  },
];
