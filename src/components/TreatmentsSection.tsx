import { motion } from "framer-motion";
import { Stethoscope, Smile, Baby, Scissors, Shield, Zap } from "lucide-react";

const treatments = [
  {
    icon: Stethoscope,
    title: "Root Canal & Restorative",
    description:
      "Our pain-managed root canal procedures are designed to preserve natural teeth while eliminating infection. Advanced techniques ensure minimal discomfort and faster recovery.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Smile,
    title: "Cosmetic Dentistry",
    description:
      "Enhance your smile with professionally guided aesthetic dental treatments tailored to your facial structure and dental health. Includes veneers, bonding, and whitening.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Shield,
    title: "Preventive & General",
    description:
      "Regular checkups, cleanings, and early detection of dental issues help maintain long-term oral health. We focus on prevention-first care for every patient.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Baby,
    title: "Pediatric Dentistry",
    description:
      "Gentle, child-friendly dental care designed to make young patients feel comfortable. We create positive dental experiences from an early age.",
    image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Scissors,
    title: "Oral Surgery & Extractions",
    description:
      "From wisdom tooth removal to complex surgical extractions, our procedures prioritize patient comfort with advanced pain management techniques.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Zap,
    title: "Implants & Prosthetics",
    description:
      "Replace missing teeth with precision-fitted implants and prosthetics. We use modern materials and techniques for natural-looking, durable results.",
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=800",
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
              className="group bg-card rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={t.image}
                  alt={t.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                  <t.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{t.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
