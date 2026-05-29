import { motion } from "framer-motion";

const educationData = [
  {
    institution: "Dhaka International University",
    degree: "B.Sc. Computer Science & Engineering",
    score: "CGPA 3.83",
    period: "2023 – 2027",
  },
  {
    institution: "Higher Secondary Certificate",
    degree: "Science",
    score: "GPA 5.00",
    period: "2022",
  },
  {
    institution: "Secondary School Certificate",
    degree: "Science",
    score: "GPA 5.00",
    period: "2020",
  },
];

const AcademicSection = () => (
  <section id="education" className="py-32 bg-background border-t border-white/5">
    <div className="container mx-auto px-6 md:px-12 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-20 text-center"
      >
        <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black tracking-tighter text-white leading-none">
          Education.
        </h2>
      </motion.div>

      <div className="space-y-6">
        {educationData.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 md:gap-8 group border-b border-white/10 pb-6 last:border-0"
          >
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-white leading-tight">{e.institution}</h3>
              <p className="text-[15px] text-muted-foreground font-medium">{e.degree}</p>
            </div>
            
            <div className="flex items-baseline gap-4 md:text-right">
              <span className="text-sm font-mono text-white/50">{e.period}</span>
              <span className="text-xl font-bold text-white tracking-tight">{e.score}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AcademicSection;
