import { motion } from "framer-motion";

const activities = [
  { title: "Debate Competitions", sub: "Public Speaking & Critical Thinking" },
  { title: "Poster Design", sub: "Visual Communication & Creativity" },
  { title: "Student Leadership", sub: "Event Coordination & Teamwork" },
  { title: "Technology Competitions", sub: "Innovation & Problem Solving" },
];

const BeyondAcademicsSection = () => (
  <section id="beyond-technology" className="py-32 bg-background border-t border-white/5">
    <div className="container mx-auto px-6 md:px-12 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16"
      >
        <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black tracking-tighter text-white leading-none">
          Beyond Code.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {activities.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group flex flex-col gap-1 border-b border-white/10 pb-6"
          >
            <h3 className="text-lg font-bold text-white leading-tight group-hover:text-white/80 transition-colors duration-300">{a.title}</h3>
            <p className="text-sm text-muted-foreground font-medium">{a.sub}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BeyondAcademicsSection;
