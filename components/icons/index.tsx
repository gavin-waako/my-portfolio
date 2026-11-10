// All SVG icons used on the page, as small components.
// Pass a className to size/colour them, e.g. <GitHubIcon className="h-12 w-12" />

export function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 256" fill="#fff">
      <g transform="scale(5.12)">
        <path d="M41 4H9a5 5 0 0 0-5 5v32a5 5 0 0 0 5 5h32a5 5 0 0 0 5-5V9a5 5 0 0 0-5-5ZM17 20v19h-6V20h6Zm-6-5.53c0-1.4 1.2-2.47 3-2.47s2.93 1.07 3 2.47c0 1.4-1.12 2.53-3 2.53s-3-1.13-3-2.53ZM39 39h-6v-10c0-2-1-4-3.5-4.04h-.08c-2.42 0-3.42 2.06-3.42 4.04v10h-6V20h6v2.56s1.93-2.56 5.81-2.56c3.97 0 7.19 2.73 7.19 8.26V39Z" />
      </g>
    </svg>
  );
}

// Large GitHub mark used in the hero
export function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="#fff">
      <path d="M32 6C17.64 6 6 17.64 6 32c0 12.28 8.51 22.56 19.96 25.29-.6-.14-1.18-.3-1.76-.48v-5.96s-.98.33-2.28.33c-3.64 0-5.15-3.25-5.53-4.88-.23-.99-.83-1.93-1.47-2.5-.77-.69-1.13-.69-1.13-.92-.01-.49.66-.47.98-.47 1.63 0 2.86 1.73 3.43 2.62 1.42 2.21 2.94 2.58 3.72 2.58.98 0 1.82-.15 2.4-.43.27-1.89 1.11-3.57 2.48-4.77-6.1-1.22-10.4-4.72-10.4-10.4 0-2.93 1.18-5.62 3.13-7.79-.2-.57-.53-1.71-.53-3.58 0-1.24.09-2.75.65-4.23 0 0 3.71.03 7.2 3.34 1.62-.47 3.34-.74 5.15-.74s3.53.27 5.15.74c3.5-3.31 7.2-3.34 7.2-3.34.57 1.47.65 2.99.65 4.23 0 2.02-.27 3.19-.43 3.7 1.9 2.15 3.03 4.8 3.03 7.68 0 5.68-4.3 9.18-10.4 10.4 1.63 1.43 2.6 3.51 2.6 5.85v8.56c-.58.18-1.16.34-1.76.48C49.49 54.56 58 44.28 58 32c0-14.36-11.64-26-26-26Z" />
    </svg>
  );
}

// GitHub mark used on project cards
export function RepoIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="#fff">
      <path d="M32 6C17.64 6 6 17.64 6 32c0 12.28 8.51 22.56 19.96 25.29V51.3c-3.64 0-5.15-3.25-5.53-4.88-.7-1.9-2.7-2.7-2.6-3.4 1.6 0 2.9 1.7 3.4 2.6 1.4 2.2 2.9 2.6 3.7 2.6 1 0 1.8-.1 2.4-.4.3-1.9 1.1-3.6 2.5-4.8-6.1-1.2-10.4-4.7-10.4-10.4 0-2.9 1.2-5.6 3.1-7.8-.2-.6-.5-1.7-.5-3.6 0-1.2.1-2.8.7-4.2 0 0 3.7 0 7.2 3.3 3.2-.9 7.1-.9 10.3 0 3.5-3.3 7.2-3.3 7.2-3.3.6 1.5.7 3 .7 4.2 0 2-.3 3.2-.4 3.7 1.9 2.2 3 4.8 3 7.7 0 5.7-4.3 9.2-10.4 10.4 1.6 1.4 2.6 3.5 2.6 5.9v8.5C49.5 54.6 58 44.3 58 32c0-14.4-11.6-26-26-26Z" />
    </svg>
  );
}

export function HuggingFaceIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <circle cx="5.2" cy="17.2" r="2.3" fill="#fff" />
      <circle cx="18.8" cy="17.2" r="2.3" fill="#fff" />
      <circle cx="12" cy="11.5" r="9" fill="#fff" />
      <circle cx="8.8" cy="9.8" r="1.2" fill="#050816" />
      <circle cx="15.2" cy="9.8" r="1.2" fill="#050816" />
      <path d="M7.8 13.2c.9 2.4 2.5 3.4 4.2 3.4s3.3-1 4.2-3.4" fill="none" stroke="#050816" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function MediumIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#fff">
      <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12ZM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12Z" />
    </svg>
  );
}

export function ResumeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M12 11v6" />
      <path d="m9 14 3 3 3-3" />
    </svg>
  );
}

export function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

export function ChevronLeftIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

export function ChevronRightIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

export function MenuIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 20 12" fill="#fff">
      <path d="M9 2h10a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2Zm10 8H1a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2ZM1 7h18a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2Z" />
    </svg>
  );
}

export function AwardIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="9" r="6" />
      <path d="M8.5 14 7 22l5-3 5 3-1.5-8" />
    </svg>
  );
}
