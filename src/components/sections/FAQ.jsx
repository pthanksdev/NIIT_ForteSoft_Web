import { HelpCircle, GraduationCap } from 'lucide-react';
import { Section, Card } from '../ui';

const FAQ = () => {
  const faqs = [
    { q: "Are the certifications industry-recognized?", a: "Yes, our certifications are accredited and recognized globally by leading tech firms including Microsoft, Google, and Amazon." },
    { q: "Do you offer job placement assistance?", a: "Absolutely. We have a dedicated career services team that works one-on-one with students for resume building, interview prep, and direct referrals." },
    { q: "Can I pay the tuition in installments?", a: "Yes, we offer flexible monthly payment plans for all professional certifications to ensure accessibility." }
  ];

  return (
    <Section className="bg-secondary-bg" title="Experience & Support" subtitle="Everything you need to know about starting your journey with NIIT Digital Fortress.">
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="bg-accent/10 p-3 rounded-xl h-fit">
              <HelpCircle className="text-accent" size={24} />
            </div>
            <h2 className="text-3xl font-bold">Frequently Asked <br />Questions</h2>
          </div>
          <p className="text-text-secondary">
            Can't find the answer you're looking for? Reach out to our admissions team for immediate assistance.
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <Card key={i} className="p-6 overflow-visible" hover={false}>
              <h4 className="font-bold text-accent mb-3 flex items-center gap-2">
                <GraduationCap size={18} /> {faq.q}
              </h4>
              <p className="text-text-secondary text-sm leading-relaxed">{faq.a}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FAQ;
