import { motion } from "framer-motion";

const focusItems = [
  { label: "Learning", title: "Advanced Machine Learning" },
  { label: "Exploring", title: "Cybersecurity Labs" },
  { label: "Researching", title: "Applied Artificial Intelligence" },
  { label: "Developing", title: "Technical Systems" },
];

const CurrentFocusSection = () => (
  <section id="current-focus" className="py-32 border-t border-white/5">
    <div className="container mx-auto px-6 md:px-12 max-w-5xl">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black tracking-tighter text-white leading-none mb-4">
            Focus.
          </h2>
          <p className="text-muted-foreground font-medium text-lg leading-relaxed">
            The areas where I'm actively building expertise and pushing boundaries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
          {focusItems.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-2"
            >
              <p className="text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase">{f.label}</p>
              <h3 className="text-xl font-bold text-white leading-snug">{f.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CurrentFocusSection;
