import { motion } from "framer-motion";

const events = [
  { year: "2020", title: "SSC — GPA 5.00", note: "Science Group" },
  { year: "2022", title: "HSC — GPA 5.00", note: "Science Group" },
  { year: "2023", title: "Started CSE at DIU", note: "B.Sc. in Computer Science & Engineering" },
  { year: "2025", title: "NASA Space Apps — Regional 1st Runner-Up", note: "Competition" },
  { year: "2025", title: "NASA Space Apps — Global Nominee", note: "Competition" },
  { year: "2025", title: "First International Publication", note: "Springer LNNS" },
  { year: "2026", title: "Three More Publications", note: "Springer · Taylor & Francis · Atlantis Press" },
  { year: "Now", title: "Machine Learning & Cybersecurity", note: "Applied Research" },
];

const CareerTimelineSection = () => (
  <section id="career-timeline" className="py-32 bg-background">
    <div className="container mx-auto px-6 md:px-12 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-20 text-center"
      >
        <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black tracking-tighter text-white leading-none">
          Timeline.
        </h2>
      </motion.div>

      <div className="space-y-12">
        {events.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row gap-2 md:gap-16 items-start md:items-baseline group"
          >
            {/* Year */}
            <span className="w-24 flex-shrink-0 text-sm font-mono font-semibold text-white/40 group-hover:text-white transition-colors duration-500">
              {e.year}
            </span>

            {/* Content */}
            <div className="flex-1 space-y-1">
              <h3 className="text-lg font-bold text-white leading-tight">
                {e.title}
              </h3>
              <p className="text-[15px] text-muted-foreground font-medium">
                {e.note}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CareerTimelineSection;
