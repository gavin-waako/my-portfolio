import { RepoIcon, ExternalLinkIcon } from '../icons';
import type { Project, ProjectLink, TagColor } from '../../data/projects';

const tagColor: Record<TagColor, string> = {
  orange: 'glow-orange',
  green: 'glow-green',
  blue: 'glow-blue',
};

// Top-right buttons on the cover. One link → big round button, two links → small pair.
function CoverLinks({ links }: { links: ProjectLink[] }) {
  if (links.length === 0) return null;

  if (links.length === 1) {
    return (
      <a
        href={links[0].href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Source code"
        className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 hover:bg-black"
      >
        <RepoIcon className="h-5 w-5" />
      </a>
    );
  }

  const small =
    'flex h-8 w-8 items-center justify-center rounded-full bg-black/70 backdrop-blur-sm transition hover:scale-110 hover:bg-accent';

  return (
    <div className="absolute right-3 top-3 z-10 flex gap-2">
      {links.map((link) =>
        link.type === 'github' ? (
          <a key="github" href={link.href} target="_blank" rel="noopener noreferrer" aria-label="Source code" title="Source code" className={small}>
            <RepoIcon className="h-4 w-4" />
          </a>
        ) : (
          <a key="live" href={link.href} target="_blank" rel="noopener noreferrer" aria-label="Live preview" title="Live preview" className={small}>
            <ExternalLinkIcon className="h-4 w-4" />
          </a>
        )
      )}
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const { title, cover, links, description, tags } = project;
  const pair = links.length > 1;

  return (
    <article className="proj-card rounded-2xl bg-tertiary p-5 transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgba(145,94,255,.5)]">
      <div className="relative h-[230px] w-full">
        {pair && <CoverLinks links={links} />}

        {cover.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={cover.image} alt={cover.alt} className="h-full w-full rounded-2xl object-cover" />
        ) : (
          <div
            className={`flex h-full w-full items-center justify-center rounded-2xl bg-linear-to-br/srgb ${cover.gradient} to-tertiary px-4 text-center text-2xl font-black`}
          >
            {cover.label}
          </div>
        )}

        {!pair && <CoverLinks links={links} />}
      </div>

      <h3 className="mt-5 text-[24px] font-bold text-white">{title}</h3>
      <p className="mt-2 text-[14px] text-secondary">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2 text-[14px]">
        {tags.map((tag, i) => (
          <p key={i} className={tagColor[tag.color]}>
            {tag.text}
          </p>
        ))}
      </div>
    </article>
  );
}
