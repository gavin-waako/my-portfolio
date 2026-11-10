# Portfolio – file map

```
app/layout.tsx          html shell, Poppins font (next/font), title, viewport
app/page.tsx            the page = list of sections, top to bottom
app/globals.css         Tailwind v4 theme tokens + your original custom CSS
components/
  layout/               Navbar, Footer
  hero/                 Hero, SocialLinks, HeroPhoto
  about/  work/  technologies/  projects/  education/  publications/  certifications/  contact/
  ui/                   Reveal (scroll fade-in), SectionHeading
  icons/                every inline SVG
data/                   edit content here (site, nav, experience, technologies, projects, education, ...)
public/                 image.webp, wellesley-cafe.png, resume.pdf go here
```
Client components ('use client'): Navbar, ProjectSlider, Contact, Reveal. Everything else is server-rendered.
