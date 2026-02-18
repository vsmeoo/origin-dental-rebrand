import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "Is root canal treatment painful?",
    a: "Modern root canal procedures at Origin Dental are performed using advanced pain-management techniques. Most patients report minimal discomfort during and after the procedure.",
  },
  {
    q: "How often should I visit the dentist?",
    a: "We recommend a dental checkup every 6 months to ensure early detection of any issues and maintain optimal oral health. Regular cleanings also help prevent cavities and gum disease.",
  },
  {
    q: "What is the consultation fee?",
    a: "Our consultation fee is ₹500, which includes a comprehensive oral examination and treatment planning discussion with the dentist.",
  },
  {
    q: "Do you treat children?",
    a: "Yes. Our team is experienced in pediatric dentistry and creates a comfortable, child-friendly environment. We focus on building positive dental habits from an early age.",
  },
  {
    q: "How do I book an appointment?",
    a: "You can book an appointment by calling our clinic directly, or by clicking the 'Book Appointment' button on this website. Walk-in patients are also welcome, though appointments are recommended.",
  },
  {
    q: "Is the clinic accessible for elderly or disabled patients?",
    a: "Yes. Our clinic has elevator access and underground parking for patient convenience. The facility is designed to be accessible for all patients.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 lg:py-28 section-gradient">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
            Common Questions
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card rounded-xl px-6 border border-border card-shadow"
              >
                <AccordionTrigger className="text-left font-body text-base font-semibold text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
