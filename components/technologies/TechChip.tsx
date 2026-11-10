import Reveal from '../ui/Reveal';
import type { CSSProperties } from 'react';
import TechIcon from './TechIcon';

// One floating chip. `color` feeds the CSS variable --c used by .tech-in in globals.css.
export default function TechChip({ name, color, index }: { name: string; color: string; index: number }) {
  return (
    <Reveal style={{ transitionDelay: `${index * 45}ms` }}>
      <div className="tech-in" style={{ '--c': color, animationDelay: `${(index % 6) * 0.4}s` } as CSSProperties}>
        <TechIcon name={name} />
        <span className="text-sm font-medium text-white">{name}</span>
      </div>
    </Reveal>
  );
}
