import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";

const LocationCTA = () => {
  return (
    <>
      {/* Location */}
      <section id="location" className="py-20 lg:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
                Visit Us
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Find Us in Jubilee Hills
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Conveniently located in Jubilee Hills, just 50 meters from Madhapur Metro, with dedicated underground parking for patients.
              </p>

              <div className="space-y-5">
                {[
                  { icon: MapPin, label: "Jubilee Hills, Hyderabad, Telangana" },
                  { icon: Phone, label: "+91 98765 43210" },
                  { icon: Clock, label: "Mon–Sat: 9:00 AM – 8:00 PM" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden card-shadow h-72 lg:h-96"
            >
              <iframe
                title="Origin Dental Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4468115319146!2d78.39664057547445!3d17.43831578345765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91e6b8678ac5%3A0xe60ee3d88fbbe803!2sOrigin%20Dental!5e0!3m2!1sen!2sin!4v1771397750683!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="book" className="py-20 lg:py-28 hero-gradient">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              Experience Comfortable, Reliable Dental Care.
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-4">
              Schedule your consultation today and take the first step toward healthier teeth and a confident smile.
            </p>
            <p className="text-primary-foreground/50 text-sm mb-8">Consultation fee: ₹500</p>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-accent text-accent-foreground font-bold text-base hover:brightness-110 transition-all shadow-lg"
            >
              Book Appointment
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default LocationCTA;
