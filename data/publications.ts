// Set href to the paper link.
export interface Publication {
  title: string;
  venue: string;
  authors: string;
  href: string;
}

export const publications: Publication[] = [
  // {
  //   title: 'A Comparative Study of Binarization Techniques for Enhancement of Degraded Documents.',
  //   venue: 'International Journal of Computer Applications. 119, 11 (June 2015), 39-46. DOI=10.5120/21114-3927',
  //   authors: 'Gavin G Waako, Chinni Bhargavi S, B Priyanka, Mamatha H R.',
  //   href: '#',
  // },
  {
    title: 'A Java-Based Order Management System for a Local Cafe',
    venue: 'Class Project, CS200 Programming II. Prepared for Wellesley Cafe (May 2026)',
    authors: 'Gavin G. Waako',
    href: '/papers/cs200-java-system.pdf',
  },
];
