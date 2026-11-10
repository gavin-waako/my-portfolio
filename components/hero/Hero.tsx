import SocialLinks from './SocialLinks';
import HeroPhoto from './HeroPhoto';

export default function Hero() {
  return (
    <header className="hero-bg relative">
      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col items-start gap-5 px-6 pb-16 pt-[110px] sm:px-16 lg:flex-row lg:items-center lg:pt-[60px]">
        <div className="flex flex-row items-start gap-5 lg:w-3/4">
          {/* Glowing dot + vertical line */}
          <div className="mt-5 flex flex-col items-center justify-center">
            <div className="h-5 w-5 rounded-full bg-accent" style={{ boxShadow: '0 0 18px rgba(145,94,255,.9)' }}></div>
            <div className="vline h-40 w-1 lg:h-80" style={{ boxShadow: '0 0 18px rgba(145,94,255,.5)' }}></div>
          </div>

          <div>
            <h1 className="mt-2 text-[40px] font-black text-white xs:text-[50px] sm:text-[60px] lg:text-[80px] lg:leading-[98px]">
              Hi, I&apos;m <span className="name-glow text-accent">Gavin</span>
            </h1>
            <p className="mt-2 text-[16px] font-medium text-[#dfd9ff] xs:text-[20px] sm:text-[26px] lg:text-[30px] lg:leading-[40px]">
              a computer science student and software engineer focused on building{' '}
              <span className="bg-linear-to-r/srgb from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-xl tracking-tight text-transparent md:text-3xl">
                resilient, AI-powered cross-platform systems
              </span>{' '}
              that solve real operational problems. When away from my coding desk, I&apos;m an avid photographer,
              traveler, and food enthusiast. Feel free to check out my resume.
              <br className="hidden lg:block" />
            </p>
            <SocialLinks />
          </div>
        </div>

        <HeroPhoto />
      </section>
    </header>
  );
}
