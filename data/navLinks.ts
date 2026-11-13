// `desktopClass` keeps the original quirk: the "Education" link was slightly
// smaller and had no hover colour on desktop.
const normal = 'text-[18px] font-medium text-secondary hover:text-white';

export interface NavLink {
  href: string;
  label: string;
  desktopClass: string;
}

export const navLinks: NavLink[] = [
  { href: '#about', label: 'About', desktopClass: normal },
  { href: '#work', label: 'Work', desktopClass: normal },
  { href: '#tech', label: 'Skills', desktopClass: normal },
  { href: '#projects', label: 'Projects', desktopClass: normal },
  { href: '#education', label: 'Education', desktopClass: 'text-[16px] font-medium text-secondary' },
  { href: '#writings', label: 'Technical Writings', desktopClass: normal },
  { href: '#contact', label: 'Contact', desktopClass: normal },
];
