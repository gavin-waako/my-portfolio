import type { ReactElement } from 'react';
import brandIcons from '../../data/brandIcons';

// Simple hand-drawn marks for technologies without a brand path in brandIcons.js
const drawn: Record<string, ReactElement> = {
  'React/React Native': (
    <svg className="tech-ico" viewBox="-12 -12 24 24">
      <g fill="none" stroke="currentColor" strokeWidth="1.2">
        <ellipse rx="10" ry="4.2" />
        <ellipse rx="10" ry="4.2" transform="rotate(60)" />
        <ellipse rx="10" ry="4.2" transform="rotate(120)" />
      </g>
      <circle r="1.8" fill="currentColor" />
    </svg>
  ),
  TypeScript: (
    <svg className="tech-ico" viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="3" fill="currentColor" />
      <path d="M7 10h6M10 10v8" stroke="#050816" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path
        d="M19 10.5c-.6-.8-1.5-1-2.2-.9-1.2.2-1.6 1.3-1 2 .6.7 2.3.9 2.7 1.8.5 1.1-.4 2.2-1.8 2.1-1 0-1.8-.4-2.2-1.1"
        stroke="#050816"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  ),
  'Next.js': (
    <svg className="tech-ico" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M9 16V8l7.5 9.5M15.5 8v4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  'Node.js/Express': (
    <svg className="tech-ico" viewBox="0 0 24 24">
      <path d="M12 2l8.66 5v10L12 22l-8.66-5V7z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <text x="12" y="15.5" textAnchor="middle" fontSize="8" fontWeight="800" fill="currentColor" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}>
        JS
      </text>
    </svg>
  ),
  Kubernetes: (
    <svg className="tech-ico" viewBox="0 0 24 24">
      <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
        <path d="M12 2.5l7.4 3.6 1.8 8-5.1 6.4H7.9l-5.1-6.4 1.8-8z" />
        <circle cx="12" cy="12.5" r="2.4" />
        <path d="M12 10.1V6M13.9 11.1l3.7-1.8M14.5 13.2l3.4 2.2M12 14.9v3.4M9.5 13.2l-3.4 2.2M10.1 11.1 6.4 9.3" />
      </g>
    </svg>
  ),
  C: (
    <svg className="tech-ico" viewBox="0 0 24 24">
      <path d="M12 2l8.66 5v10L12 22l-8.66-5V7z" fill="currentColor" />
      <text x="12" y="16" textAnchor="middle" fontSize="11" fontWeight="800" fill="#050816" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}>
        C
      </text>
    </svg>
  ),
};

// Fallback (used for SQL, MySQL): database cylinder
const database = (
  <svg className="tech-ico" viewBox="0 0 24 24">
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14a9 3 0 0 0 18 0V5" />
      <path d="M3 12a9 3 0 0 0 18 0" />
    </g>
  </svg>
);

export default function TechIcon({ name }: { name: string }) {
  if (drawn[name]) return drawn[name];
  if (brandIcons[name]) {
    const [viewBox, path] = brandIcons[name];
    return (
      <svg className="tech-ico" viewBox={viewBox} fill="currentColor">
        <path d={path} />
      </svg>
    );
  }
  return database;
}
