import { motion } from "framer-motion";
import { Star, Shield, Clock, Award } from "lucide-react";
import heroImage from "@/assets/hero-dental.jpg";
import galleryFeatured from "@/assets/gallery-featured.webp";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";
import gallery5 from "@/assets/gallery-5.png";
import gallery6 from "@/assets/gallery-6.png";

const trustItems = [
  { icon: Star, label: "5.0 Google Rating" },
  { icon: Shield, label: "458 Verified Reviews" },
  { icon: Award, label: "852 Justdial Ratings" },
  { icon: Clock, label: "14+ Years Experience" },
];

const HeroSection = () => {
  const galleryImages = [galleryFeatured, gallery2, gallery3, gallery4, gallery5, gallery6];

  return (
    <section className="relative min-h-screen flex items-center overflow-x-hidden pt-20">
      {/* Background image & Gradient (Global) */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Origin Dental modern clinic interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-gradient opacity-90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Content */}
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground text-xs font-semibold tracking-wide uppercase mb-6 backdrop-blur-sm">
                Jubilee Hills, Hyderabad · 14+ Years of Trusted Care
              </span>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 text-balance break-words max-w-full">
                Pain-Free, Advanced Dentistry Backed by 14+ Years of Trusted Care.
              </h1>

              <p className="text-lg sm:text-xl text-primary-foreground/80 leading-relaxed mb-8 max-w-2xl text-balance break-words">
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

          {/* Right Column: Smart Gallery (Desktop) */}
          <div className="hidden lg:block relative h-[600px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-10 right-0 w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 z-20"
            >
              <img src={galleryFeatured} alt="Dental Clinic Interior" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute bottom-0 left-0 w-1/2 h-1/2 rounded-2xl overflow-hidden shadow-xl border-4 border-white/20 z-30"
            >
              <img src={gallery4} alt="Dental Treatment" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute top-0 left-10 w-40 h-40 rounded-2xl overflow-hidden shadow-lg border-4 border-white/20 z-10"
            >
              <img src={gallery2} alt="Happy Patient" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute bottom-20 -right-8 w-48 h-48 rounded-2xl overflow-hidden shadow-lg border-4 border-white/20 z-40 bg-white p-2"
            >
              <img src={gallery3} alt="Dental Equipment" className="w-full h-full object-cover rounded-xl" />
            </motion.div>
          </div>
        </div>

        {/* Mobile Gallery Carousel */}
        <div className="lg:hidden mt-8 md:mt-12 -mx-4 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar"
          >
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="flex-none w-[85vw] sm:w-[60vw] aspect-video rounded-xl overflow-hidden shadow-lg border-2 border-primary-foreground/10 snap-center first:pl-0 last:pr-4"
              >
                <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
