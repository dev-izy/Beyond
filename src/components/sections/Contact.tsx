import SectionLabel from '../SectionLabel';
import ContactForm from '../forms/ContactForm';
import { ContactChannels, Socials } from '../ContactChannels';

type Props = {
  /** Render the heading as h1 (used on the Contact page). */
  asPage?: boolean;
  defaultService?: string;
};

export default function Contact({ asPage = false, defaultService }: Props) {
  const Heading = asPage ? 'h1' : 'h2';
  return (
    <section className={`section ${asPage ? 'section--page-top' : ''}`} id="contact">
      <div className="container contact__grid">
        <div className="contact__intro reveal">
          <SectionLabel>Get started</SectionLabel>
          <Heading className="h2 h2--xl">Let’s Build Something Valuable.</Heading>
          <p className="muted">
            Tell us about your project and we’ll get back to you with next steps
            and a tailored quotation.
          </p>
          <ContactChannels />
          <Socials />
        </div>

        <div className="reveal">
          <ContactForm key={defaultService} defaultService={defaultService} />
        </div>
      </div>
    </section>
  );
}
