'use client';

import { useState } from 'react';
import { MenuIcon } from '../icons';
import { navLinks } from '../../data/navLinks';
import { site } from '../../data/site';

// Fixed top bar. Desktop: inline links. Mobile: hamburger + dropdown.
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 z-20 w-full border-b border-white/10 bg-primary/55 px-6 py-5 shadow-[0_8px_32px_rgba(0,0,0,.35)] backdrop-blur-xl backdrop-saturate-150 sm:px-16"
      style={{ paddingTop: 'calc(1.25rem + env(safe-area-inset-top,0px))' }}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-sm font-black">
            {site.initials}
          </span>
          <p className="text-[18px] font-bold text-white">{site.name}</p>
        </a>

        {/* Desktop links */}
        <ul className="hidden list-none flex-row gap-10 sm:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={link.desktopClass}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        <div className="relative flex flex-1 items-center justify-end sm:hidden">
          <button
            type="button"
            aria-label="Toggle menu"
            className="p-1"
            onClick={() => setOpen((o) => !o)}
          >
            <MenuIcon />
          </button>
          <div
            className={`absolute right-0 top-12 z-10 min-w-[140px] rounded-xl bg-tertiary p-6 shadow-xl${open ? '' : ' hidden'}`}
          >
            <ul className="flex list-none flex-col items-start gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[16px] font-medium text-secondary"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
