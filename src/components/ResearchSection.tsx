import { motion } from "framer-motion";

const publications = [
  {
    index: "01",
    title: "Machine Learning-Based Biofilter Selection for Textile Wastewater Treatment in Bangladesh",
    publisher: "Springer",
    series: "Lecture Notes in Networks and Systems",
    year: "2025",
  },
  {
    index: "02",
    title: "Beyond Speed Thresholds: Unsupervised Behavioral Regime Profiling for Vessel Anomaly Detection in Constrained Maritime Corridors",
    publisher: "Atlantis Press / Springer Nature",
    series: "Advances in Computer Science Research",
    year: "2026",
  },
  {
    index: "03",
    title: "Predicting High-Density Traffic Events in a Permanently Slow-Speed Maritime Corridor",
    publisher: "Taylor & Francis",
    series: "International Journal",
    year: "2026",
  },
];

const ResearchSection = () => (
  <section id="publications" className="py-32 bg-background border-t border-white/5">
    <div className="container mx-auto px-6 md:px-12 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-20"
      >
        <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black tracking-tighter text-white leading-none">
          Publications.
        </h2>
      </motion.div>

      <div className="flex flex-col">
        {publications.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative border-b border-white/5 last:border-0 py-12 flex flex-col md:flex-row gap-8 md:gap-16 items-start hover:bg-white/[0.01] transition-colors duration-500"
          >
            {/* Index */}
            <span className="text-[4rem] font-black text-white/5 tracking-tighter leading-none group-hover:text-white/10 transition-colors duration-500">
              {p.index}
            </span>

            {/* Content */}
            <div className="space-y-4 max-w-3xl pt-2">
              <h3 className="text-xl md:text-2xl font-bold text-white leading-tight tracking-tight">
                {p.title}
              </h3>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-sm text-muted-foreground font-medium">
                <span className="text-white/80 font-bold">{p.publisher}</span>
                <span className="hidden md:inline text-white/20">|</span>
                <span className="text-white/60">{p.series}</span>
                <span className="hidden md:inline text-white/20">|</span>
                <span className="text-white/60">{p.year}</span>
              </div>
              <div className="pt-4">
                <a href="#" className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors duration-300">
                  [View Publication]
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ResearchSection;
