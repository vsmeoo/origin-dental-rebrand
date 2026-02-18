import { motion } from "framer-motion";
import { Star, Shield, Clock, Award } from "lucide-react";
import heroImage from "@/assets/hero-dental.jpg";

const trustItems = [
  { icon: Star, label: "5.0 Google Rating" },
  { icon: Shield, label: "458 Verified Reviews" },
  { icon: Award, label: "852 Justdial Ratings" },
  { icon: Clock, label: "14+ Years Experience" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Origin Dental modern clinic interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-gradient opacity-85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground text-xs font-semibold tracking-wide uppercase mb-6">
              Jubilee Hills, Hyderabad · 14+ Years of Trusted Care
            </span>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 text-balance">
              Pain-Free, Advanced Dentistry Backed by 14+ Years of Trusted Care.
            </h1>

            <p className="text-lg sm:text-xl text-primary-foreground/80 leading-relaxed mb-8 max-w-2xl">
              From routine dental checkups to complex root canal treatments and smile transformations, Origin Dental combines clinical precision, sterilized equipment, and compassionate care to deliver comfortable, long-lasting results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <a
              href="#book"
              className="px-8 py-4 rounded-lg bg-accent text-accent-foreground font-bold text-base hover:brightness-110 transition-all shadow-lg"
            >
              Book Appointment
            </a>
            <a
              href="#treatments"
              className="px-8 py-4 rounded-lg bg-primary-foreground/10 border border-primary-foreground/30 text-primary-foreground font-semibold text-base hover:bg-primary-foreground/20 transition-all"
            >
              View Treatments
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="flex flex-wrap gap-4 sm:gap-6 mb-3">
              {trustItems.map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-primary-foreground/90">
                  <item.icon className="w-4 h-4 text-gold" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
            <p className="text-primary-foreground/50 text-xs">
              Consistently rated 5.0 by over 1,000+ patients across platforms.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
