import { Section } from '../components/ui';
import ContactInfo from '../components/sections/ContactInfo';
import ContactForm from '../components/sections/ContactForm';

const Contact = () => {
  return (
    <div className="animate-fade-in pt-32">
      <Section 
        title="Direct Communication" 
        subtitle="Our academic advisors and support teams are available for detailed consultations regarding your technical career path."
      >
        <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          <ContactInfo />
          <ContactForm />
        </div>
      </Section>
    </div>
  );
};

export default Contact;
