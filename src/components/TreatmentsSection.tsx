import { motion } from "framer-motion";
import { Stethoscope, Smile, Baby, Scissors, Shield, Zap } from "lucide-react";

const treatments = [
  {
    icon: Stethoscope,
    title: "Root Canal & Restorative",
    description:
      "Our pain-managed root canal procedures are designed to preserve natural teeth while eliminating infection. Advanced techniques ensure minimal discomfort and faster recovery.",
  },
  {
    icon: Smile,
    title: "Cosmetic Dentistry",
    description:
      "Enhance your smile with professionally guided aesthetic dental treatments tailored to your facial structure and dental health. Includes veneers, bonding, and whitening.",
  },
  {
    icon: Shield,
    title: "Preventive & General",
    description:
      "Regular checkups, cleanings, and early detection of dental issues help maintain long-term oral health. We focus on prevention-first care for every patient.",
  },
  {
    icon: Baby,
    title: "Pediatric Dentistry",
    description:
      "Gentle, child-friendly dental care designed to make young patients feel comfortable. We create positive dental experiences from an early age.",
  },
  {
    icon: Scissors,
    title: "Oral Surgery & Extractions",
    description:
      "From wisdom tooth removal to complex surgical extractions, our procedures prioritize patient comfort with advanced pain management techniques.",
  },
  {
    icon: Zap,
    title: "Implants & Prosthetics",
    description:
      "Replace missing teeth with precision-fitted implants and prosthetics. We use modern materials and techniques for natural-looking, durable results.",
  },
];

const TreatmentsSection = () => {
  return (
    <section id="treatments" className="py-20 lg:py-28 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
            Our Treatments
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Comprehensive Dental Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every treatment is delivered with clinical precision, transparent communication, and a focus on patient comfort.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-7 card-shadow hover:card-shadow-hover transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-5">
                <t.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{t.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{t.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
