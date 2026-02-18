import { motion } from "framer-motion";
import { ShieldCheck, Armchair, LayoutGrid, SparkleIcon, Accessibility, CarFront } from "lucide-react";

const points = [
  { icon: ShieldCheck, label: "Strict sterilization protocols" },
  { icon: Armchair, label: "Modern dental chairs" },
  { icon: LayoutGrid, label: "Organized treatment rooms" },
  { icon: SparkleIcon, label: "Clean, well-maintained environment" },
  { icon: Accessibility, label: "Elevator access" },
  { icon: CarFront, label: "Underground parking" },
];

const HygieneSection = () => {
  return (
    <section id="hygiene" className="py-20 lg:py-28 hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/60 mb-3 block">
              Our Standards
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-6 leading-tight">
              Sterilized Equipment. Modern Infrastructure. Patient Safety First.
            </h2>
            <p className="text-primary-foreground/70 leading-relaxed mb-8">
              At Origin Dental, patient safety is non-negotiable. Our clinic follows rigorous sterilization and hygiene protocols to ensure every visit is safe and comfortable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {points.map((p) => (
              <div
                key={p.label}
                className="flex items-center gap-3 bg-primary-foreground/10 rounded-lg p-4 border border-primary-foreground/10"
              >
                <p.icon className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-sm font-medium text-primary-foreground">{p.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HygieneSection;
