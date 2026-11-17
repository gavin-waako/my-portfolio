
export default function HeroPhoto() {
  return (
    <div className="hero-photo relative w-full max-w-xs lg:max-w-lg">
      <div className="hero-photo-glow"></div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/professional-headshort-lg.png" alt="Gavin Waako Professional Portrait" className="hero-photo-img w-full rounded-2xl lg:max-w-sm" />
    </div>
  );
}
