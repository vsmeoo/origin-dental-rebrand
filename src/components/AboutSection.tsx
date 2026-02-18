import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const highlights = [
  "Accurate diagnosis with modern equipment",
  "Transparent treatment planning",
  "Painless, comfort-focused procedures",
  "Hygienic, sterilized clinical environment",
  "14+ years of clinical experience",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
              About Origin Dental
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
              Comprehensive Dental Care in Jubilee Hills Since 2010
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For over 14 years, Origin Dental has provided comprehensive dental care in Jubilee Hills. Our approach focuses on accurate diagnosis, transparent treatment planning, and painless procedures delivered in a hygienic, modern clinical environment.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 italic border-l-2 border-primary pl-4">
              "We understand dental anxiety. Every procedure is explained clearly before treatment begins."
            </p>
            <div className="space-y-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-trust flex-shrink-0" />
                  <span className="text-foreground text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "14+", label: "Years of Experience" },
                { number: "1,000+", label: "Happy Patients" },
                { number: "5.0", label: "Google Rating" },
                { number: "₹500", label: "Consultation Fee" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-secondary rounded-xl p-6 text-center card-shadow"
                >
                  <div className="font-display text-3xl sm:text-4xl font-bold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
