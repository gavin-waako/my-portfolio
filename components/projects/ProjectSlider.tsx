'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';
import type { CSSProperties, TouchEvent } from 'react';
import Reveal from '../ui/Reveal';
import ProjectCard from './ProjectCard';
import { ChevronLeftIcon, ChevronRightIcon } from '../icons';
import type { Project } from '../../data/projects';

const GAP = 28; // px, matches `gap-7`

// How many cards are visible at once depends on the screen width.
const getPerView = () => (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
const getServerPerView = () => 3;
const subscribe = (onChange: () => void) => {
  window.addEventListener('resize', onChange);
  return () => window.removeEventListener('resize', onChange);
};

/**
 * Paged carousel: each click slides the track left (new cards enter from the right).
 * Supports prev/next buttons, dots, and touch swipe.
 */
export default function ProjectSlider({ projects }: { projects: Project[] }) {
  const n = projects.length;
  const v = useSyncExternalStore(subscribe, getPerView, getServerPerView); // cards per view
  const pages = Math.ceil(n / v);

  const [requestedPage, setPage] = useState(0);
  const page = Math.min(requestedPage, pages - 1); // clamp if the screen got bigger
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // When the layout changes (first paint / crossing a breakpoint) jump without animating,
  // then turn the slide transition back on.
  const [prevV, setPrevV] = useState(v);
  const [snapping, setSnapping] = useState(true);
  if (prevV !== v) {
    setPrevV(v);
    setSnapping(true);
  }
  useEffect(() => {
    if (!snapping) return;
    let id2 = 0;
    const id1 = requestAnimationFrame(() => {
      id2 = requestAnimationFrame(() => setSnapping(false));
    });
    return () => {
      cancelAnimationFrame(id1);
      cancelAnimationFrame(id2);
    };
  }, [snapping]);

  const go = (p: number) => setPage(((p % pages) + pages) % pages);

  const onTouchStart = (e: TouchEvent) => setTouchStartX(e.touches[0].clientX);
  const onTouchEnd = (e: TouchEvent) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) go(page + (dx < 0 ? 1 : -1));
    setTouchStartX(null);
  };

  // The first card shown on this page. The last page never scrolls past the final card.
  const start = Math.min(page * v, n - v);
  // Percentages in translate are relative to the track's own width, so this equals
  // start × (cardWidth + gap) without having to measure anything.
  const trackStyle = {
    '--v': v,
    transform: `translateX(calc(${-start} * (100% + ${GAP}px) / ${v}))`,
  } as CSSProperties;

  return (
    <Reveal className="mt-12">
      {/* Controls */}
      <div className="mb-4 flex items-center justify-end gap-3">
        <span className="mr-2 text-sm font-medium text-secondary">
          {page + 1} / {pages}
        </span>
        <button
          type="button"
          aria-label="Previous projects"
          onClick={() => go(page - 1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-tertiary text-white transition hover:border-accent hover:bg-accent active:scale-95"
        >
          <ChevronLeftIcon />
        </button>
        <button
          type="button"
          aria-label="Next projects"
          onClick={() => go(page + 1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-tertiary text-white transition hover:border-accent hover:bg-accent active:scale-95"
        >
          <ChevronRightIcon />
        </button>
      </div>

      {/* Viewport + sliding track */}
      <div
        className="-mx-3 overflow-hidden px-3 pb-6 pt-3"
        style={{ touchAction: 'pan-y' }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div id="projTrack" className={`flex gap-7${snapping ? ' dragging' : ''}`} style={trackStyle}>
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2">
        {Array.from({ length: pages }, (_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to page ${i + 1}`}
            className={`proj-dot${i === page ? ' active' : ''}`}
            onClick={() => go(i)}
          />
        ))}
      </div>
    </Reveal>
  );
}
