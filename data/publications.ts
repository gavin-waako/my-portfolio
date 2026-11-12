// Set href to the paper link.
export interface Publication {
  title: string;
  venue: string;
  authors: string;
  href: string;
}

export const publications: Publication[] = [
  {
    title: 'A Java-Based Order Management System for a Local Cafe',
    venue: 'Class Project, CS200 Programming II. Prepared for Wellesley Cafe (May 2026)',
    authors: 'Gavin G. Waako',
    href: '/papers/cs200-java-system.pdf',
  },
];
