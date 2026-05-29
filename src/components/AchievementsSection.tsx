import { motion } from "framer-motion";
import { GlassPanel } from "@/components/ui/GlassPanel";

const achievements = [
  {
    title: "NASA Space Apps Challenge 2025",
    items: ["Global Nominee", "Regional 1st Runner-Up"]
  },
  {
    title: "Innovation World Cup 2025",
    items: ["Global Finalist"]
  },
  {
    title: "3 Published Papers",
    subtitle: "Across International Publishers",
    items: ["Springer", "Taylor & Francis", "Atlantis Press / Springer Nature"]
  }
];

const AchievementsSection = () => (
  <section id="achievements" className="py-32 bg-background border-t border-white/5">
    <div className="container mx-auto px-6 md:px-12 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16"
      >
        <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black tracking-tighter text-white leading-none">
          Selected Achievements.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {achievements.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="h-full"
          >
            <div className="h-full p-8 md:p-10 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between gap-12 group transition-all duration-500 hover:bg-white/[0.04]">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-white tracking-tight leading-snug">{a.title}</h3>
                {a.subtitle && (
                  <p className="text-[13px] font-bold tracking-widest uppercase text-white/40">{a.subtitle}</p>
                )}
              </div>
              <ul className="space-y-4">
                {a.items.map((item, idx) => (
                  <li key={idx} className="text-base text-white/70 font-semibold flex items-start gap-3">
                    <span className="text-white/20 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;
