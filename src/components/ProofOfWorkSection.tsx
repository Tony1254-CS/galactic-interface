import { motion } from "framer-motion";

const stats = [
  { value: "3", label: "Published Papers", sub: "International Journals" },
  { value: "4", label: "First-Author Papers", sub: "Research Output" },
  { value: "2", label: "Global Recognitions", sub: "NASA & IWC" },
  { value: "10+", label: "Competitions", sub: "Hackathons & Tech" },
];

const ProofOfWorkSection = () => (
  <section id="proof-of-work" className="py-24 border-y border-white/5 bg-white/[0.01]">
    <div className="container mx-auto px-6 md:px-12 max-w-5xl">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-12 gap-y-16 text-center">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-2"
          >
            <span className="text-[clamp(2.5rem,5vw,4rem)] font-black tracking-tighter text-white leading-none">
              {s.value}
            </span>
            <span className="text-sm md:text-base font-semibold text-white/80 tracking-tight">{s.label}</span>
            <span className="text-[10px] md:text-xs text-muted-foreground font-medium uppercase tracking-widest">{s.sub}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProofOfWorkSection;
