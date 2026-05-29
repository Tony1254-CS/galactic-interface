import { motion } from "framer-motion";

const principles = [
  "Evidence over assumptions.",
  "Systems over shortcuts.",
  "Clarity over complexity.",
  "Continuous learning over comfort."
];

const PrinciplesSection = () => (
  <section id="principles" className="py-32 bg-background border-t border-white/5">
    <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-20"
      >
        <h2 className="text-[11px] font-bold tracking-[0.2em] text-white/40 uppercase">
          Principles
        </h2>
      </motion.div>

      <div className="space-y-8 md:space-y-12">
        {principles.map((principle, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold tracking-tight text-white/90">
              {principle}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PrinciplesSection;
