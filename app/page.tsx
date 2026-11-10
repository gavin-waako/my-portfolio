import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import WorkExperience from '../components/work/WorkExperience';
import Technologies from '../components/technologies/Technologies';
import Projects from '../components/projects/Projects';
import Education from '../components/education/Education';
import Publications from '../components/publications/Publications';
import Certifications from '../components/certifications/Certifications';
import Contact from '../components/contact/Contact';

// The whole page, top to bottom. Each section is its own component.
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WorkExperience />
      <Technologies />
      <Projects />
      <Education />
      <Publications />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}
