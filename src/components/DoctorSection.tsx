import { motion } from "framer-motion";

const DoctorSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left — Doctor Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="aspect-[3/4] rounded-lg border-2 border-primary/20 bg-secondary flex items-center justify-center shadow-md">
              <span className="text-muted-foreground font-body text-sm tracking-wide">Doctor Photo</span>
            </div>
          </motion.div>

          {/* Right — Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-primary mb-3 block">
              About the Doctor
            </span>

            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight">
              Dr. K. Sushma Devi, BDS
            </h2>

            <p className="text-muted-foreground font-body mt-1 mb-4">
              Dentist · 7+ Years Clinical Experience
            </p>

            <div className="w-12 h-0.5 bg-primary rounded-full mb-6" />

            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                Dr. K. Sushma Devi is a practicing dentist with over seven years of clinical experience in comprehensive dental care. She focuses on accurate diagnosis, clear communication, and long-term oral health solutions.
              </p>
              <p>
                Her approach emphasizes patient comfort, transparent treatment planning, and minimally discomforting procedures. Every consultation is designed to ensure patients understand their condition and available treatment options before proceeding.
              </p>
              <p>
                As part of Origin Dental's established practice in Jubilee Hills, she works within a structured clinical environment supported by modern equipment and sterilized protocols.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
