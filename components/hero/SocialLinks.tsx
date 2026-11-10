import type { ReactElement } from 'react';
import { LinkedInIcon, GitHubIcon, HuggingFaceIcon, MediumIcon, ResumeIcon } from '../icons';
import { socialLinks, resumeHref } from '../../data/site';

const iconById: Record<string, ReactElement> = {
  linkedin: <LinkedInIcon className="h-12 w-12" />,
  github: <GitHubIcon className="h-12 w-12" />,
  huggingface: <HuggingFaceIcon className="h-12 w-12" />,
  medium: <MediumIcon className="h-12 w-12 p-1.5" />,
};

// Row of social icons + the "Download Resume" button.
export default function SocialLinks() {
  return (
    <div className="mt-4 flex items-center gap-4">
      {socialLinks.map((link) => (
        <a
          key={link.id}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="transition duration-300 hover:scale-110 hover:opacity-80"
        >
          {iconById[link.id]}
        </a>
      ))}

      <a href={resumeHref} download>
        <button
          type="button"
          className="ml-2 inline-flex w-fit items-center gap-2 rounded-xl bg-white px-6 py-2 font-bold text-tertiary shadow-md shadow-primary outline-hidden transition duration-300 hover:scale-110 hover:opacity-80"
        >
          <ResumeIcon />
          Download Resume
        </button>
      </a>
    </div>
  );
}
