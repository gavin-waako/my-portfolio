// Set href to the credential link.
export interface Certification {
  name: string;
  issuer: string;
  href: string;
}

export const certifications: Certification[] = [
  { name: 'Certified Cloud Practitioner', issuer: 'AWS · 2026', href: '#' },
  { name: 'Certified AI Practitioner', issuer: 'AWS · 2026', href: '#' },
  // { name: 'Certification name', issuer: 'Issuing organization · Year', href: '#' },
];
