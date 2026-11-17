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
    venue: 'Class Project, CS200 Java Programming II. Submitted as Class Assignment (May 2026)',
    authors: 'Gavin G. Waako',
    href: '/papers/A_Java_Based_Order_Management_System_for_a_Local_Cafe.pdf',
  },
];
