import { motion } from "framer-motion";

const skills = [
  {
    category: "Machine Learning",
    items: ["Python", "TensorFlow", "Scikit-Learn", "Pandas", "NumPy"]
  },
  {
    category: "Cybersecurity",
    items: ["Kali Linux", "Wireshark", "Metasploit", "Linux"]
  },
  {
    category: "AI Systems",
    items: ["LLMs", "RAG", "Knowledge Graphs", "Prompt Engineering"]
  },
  {
    category: "Version Control",
    items: ["Git", "GitHub"]
  }
];

const SkillsSection = () => (
  <section id="stack" className="py-32 bg-background border-t border-white/5">
    <div className="container mx-auto px-6 md:px-12 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-20"
      >
        <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black tracking-tighter text-white leading-none">
          Technical Stack.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        {skills.map((skillGroup, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <h3 className="text-sm font-bold text-white/50 tracking-widest uppercase border-b border-white/5 pb-4">
              {skillGroup.category}
            </h3>
            <ul className="space-y-3">
              {skillGroup.items.map((item, idx) => (
                <li key={idx} className="text-lg font-bold text-white tracking-tight">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
