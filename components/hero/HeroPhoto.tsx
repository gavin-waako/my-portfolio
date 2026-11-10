// Profile photo with the purple glow + tilt on hover (styles live in globals.css).
// Put your image at /public/image.webp
export default function HeroPhoto() {
  return (
    <div className="hero-photo relative w-full max-w-xs lg:max-w-lg">
      <div className="hero-photo-glow"></div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/image.webp" alt="Gavin Waako" className="hero-photo-img w-full rounded-2xl" />
    </div>
  );
}
