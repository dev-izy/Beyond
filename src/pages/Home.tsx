import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import WhyUs from '../components/sections/WhyUs';
import Projects from '../components/sections/Projects';
import Team from '../components/sections/Team';
import Partner from '../components/sections/Partner';
import Contact from '../components/sections/Contact';
import { usePageSetup } from '../hooks/usePageSetup';
import { organizationSchema, usePageMeta } from '../hooks/usePageMeta';
import { CONTACT, SITE } from '../data/content';

export default function Home() {
  usePageSetup();
  usePageMeta({
    title: 'BEYOND — Technology & Digital Solutions',
    description: SITE.description,
    path: '/',
    schema: [organizationSchema(CONTACT)],
  });

  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Projects />
      <Team />
      <Partner />
      <Contact />
    </>
  );
}
