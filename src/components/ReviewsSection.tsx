import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Rajesh K.",
    text: "I underwent a root canal treatment here and experienced minimal discomfort. The doctor explained every step clearly.",
  },
  {
    name: "Priya M.",
    text: "The clinic is extremely clean and well maintained. The staff is supportive and professional.",
  },
  {
    name: "Suresh R.",
    text: "Very reasonable pricing for the quality of treatment provided.",
  },
  {
    name: "Anjali D.",
    text: "Clear explanations before starting the procedure helped ease my anxiety.",
  },
  {
    name: "Venkat P.",
    text: "Convenient location and excellent parking facilities.",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
            Patient Reviews
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Trusted by 1,000+ Patients Across Hyderabad
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            With 458 Google reviews and 852 Justdial ratings, Origin Dental maintains a consistent 5.0 rating — reflecting our commitment to hygiene, comfort, and precision-driven care.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-secondary rounded-xl p-6 relative"
            >
              <Quote className="w-8 h-8 text-primary/15 absolute top-4 right-4" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed mb-5 italic">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground text-sm font-bold">{review.name[0]}</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{review.name}</div>
                  <div className="text-xs text-muted-foreground">Verified Patient</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
