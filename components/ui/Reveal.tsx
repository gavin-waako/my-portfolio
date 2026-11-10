'use client';

import { useEffect, useRef, useState } from 'react';
import type { ComponentPropsWithoutRef, ElementType } from 'react';

type RevealProps = ComponentPropsWithoutRef<'div'> & {
  as?: ElementType;
  href?: string;
};

/**
 * Fade/slide-in on scroll. Same behaviour as the original page:
 * the `.reveal` class starts hidden, and `.in` is added once (threshold 0.12)
 * when the element enters the viewport.
 *
 * Use `as` to change the rendered tag, e.g. <Reveal as="li">, <Reveal as="a" href="#">.
 */
export default function Reveal({ as: Tag = 'div', className = '', children, ...props }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        }),
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? ' in' : ''}${className ? ' ' + className : ''}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
