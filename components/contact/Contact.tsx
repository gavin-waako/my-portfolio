'use client';

import type { FormEvent } from 'react';
import Reveal from '../ui/Reveal';
import { site } from '../../data/site';

const fieldClass =
  'rounded-lg bg-tertiary px-6 py-4 font-medium text-white outline-hidden placeholder:text-secondary focus:ring-2 focus:ring-accent';

// No backend: submitting opens the visitor's mail app with the message pre-filled.
export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `${f.get('message')}\n\n— ${f.get('name')} (${f.get('email')})`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      'Portfolio message from ' + f.get('name')
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-10 sm:px-16 sm:py-16">
      <Reveal className="mx-auto max-w-2xl rounded-2xl bg-black-100 p-8">
        <p className="text-center text-[14px] uppercase tracking-wider text-secondary sm:text-[18px]">Get in touch</p>
        <h3 className="text-center text-[30px] font-black text-white xs:text-[40px] sm:text-[50px] md:text-[60px]">
          Contact Me.
        </h3>
        <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your Name</span>
            <input type="text" name="name" required placeholder="What's your name?" className={fieldClass} />
          </label>
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your email</span>
            <input type="email" name="email" required placeholder="What's your email address?" className={fieldClass} />
          </label>
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your Message</span>
            <textarea rows={7} name="message" required placeholder="What you want to say?" className={fieldClass}></textarea>
          </label>
          <button
            type="submit"
            className="w-fit rounded-xl bg-tertiary px-8 py-3 font-bold text-white shadow-md shadow-primary outline-hidden hover:bg-accent focus:ring-2 focus:ring-accent"
          >
            Send
          </button>
        </form>
      </Reveal>
    </section>
  );
}
