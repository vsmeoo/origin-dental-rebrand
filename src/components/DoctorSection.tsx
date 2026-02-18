import { motion } from "framer-motion";
import doctorImage from "@/assets/doctor.png";

const DoctorSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Left — Doctor Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl dark:bg-primary/10 transition-all duration-500" />
              <div className="w-full max-w-[500px] md:max-w-[600px] aspect-square rounded-full border-4 border-white dark:border-zinc-800 bg-secondary flex items-center justify-center shadow-2xl relative z-10 overflow-hidden ring-4 ring-primary/10">
                <img
                  src={doctorImage}
                  alt="Dr. K. Sushma Devi"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-zinc-800 p-3 rounded-xl shadow-lg border border-primary/10 z-20 flex items-center gap-2 animate-bounce-slow">
                <span className="text-2xl">🦷</span>
                <span className="text-xs font-bold text-primary">BDS</span>
              </div>
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
