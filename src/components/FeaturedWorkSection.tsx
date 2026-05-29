import { motion } from "framer-motion";
import { Brain, Shield, BookOpen, Layers, CheckSquare } from "lucide-react";

const works = [
  {
    icon: Brain,
    title: "Machine Learning Experiments",
    color: "primary",
    items: [
      "Predictive Analytics",
      "Classification Models",
      "Data Visualization",
      "Feature Engineering",
    ],
    status: "BUILDER_LOG_ML",
  },
  {
    icon: Shield,
    title: "Cybersecurity Lab Work",
    color: "destructive",
    items: [
      "Kali Linux",
      "Wireshark",
      "Metasploit",
      "Vulnerability Analysis",
    ],
    status: "LAB_REPORT_CYBER",
  },
  {
    icon: BookOpen,
    title: "Research Publications",
    color: "accent",
    items: [
      "Springer (LNNS, etc.)",
      "Taylor & Francis",
      "Atlantis Press",
    ],
    status: "BIBLIOGRAPHY_LOG",
  },
];

const FeaturedWorkSection = () => {
  return (
    <section id="featured-work" className="relative py-20 overflow-hidden bg-background">
      {/* Background layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/10 via-background to-card/30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-accent text-glow-blue mb-4 tracking-tight">
            Featured Work
          </h2>
          <div className="h-1 w-40 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent animate-pulse-glow" />
          <p className="mt-6 text-muted-foreground font-mono text-lg max-w-2xl mx-auto">
            Practical demonstrations of research, engineering, and execution.
          </p>
        </motion.div>

        {/* Featured Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {works.map((work, index) => {
            const Icon = work.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
                className="relative group"
              >
                {/* Neon Glow border effect */}
                <div className={`
                  absolute -inset-0.5 rounded-xl opacity-20 group-hover:opacity-100
                  bg-gradient-to-r from-${work.color} to-card
                  blur transition duration-300
                `} />

                {/* Card body */}
                <div className={`
                  relative h-full p-8 rounded-xl border border-${work.color}/40
                  bg-card/40 backdrop-blur-md hover:border-${work.color}
                  transition-all duration-500 shadow-2xl
                `}>
                  {/* Digital HUD Header */}
                  <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground mb-6">
                    <span className="flex items-center gap-1.5">
                      <Layers className={`w-3.5 h-3.5 text-${work.color}`} />
                      {work.status}
                    </span>
                    <span>VERIFIED</span>
                  </div>

                  {/* Icon & Title */}
                  <div className="space-y-4 mb-6">
                    <div className={`
                      w-12 h-12 rounded-lg flex items-center justify-center
                      border border-${work.color}/30 bg-${work.color}/10
                    `}>
                      <Icon className={`w-6 h-6 text-${work.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {work.title}
                    </h3>
                  </div>

                  {/* Bullet checklist */}
                  <ul className="space-y-3.5">
                    {work.items.map((item, itemIdx) => (
                      <motion.li
                        key={itemIdx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index * 0.15) + (itemIdx * 0.1) }}
                        className="flex items-center gap-3 text-muted-foreground text-sm font-mono"
                      >
                        <CheckSquare className={`w-4 h-4 text-${work.color}/70 flex-shrink-0`} />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Corner HUD lines */}
                  <div className={`absolute top-2 left-2 w-3 h-3 border-l border-t border-${work.color}/50`} />
                  <div className={`absolute top-2 right-2 w-3 h-3 border-r border-t border-${work.color}/50`} />
                  <div className={`absolute bottom-2 left-2 w-3 h-3 border-l border-b border-${work.color}/50`} />
                  <div className={`absolute bottom-2 right-2 w-3 h-3 border-r border-b border-${work.color}/50`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkSection;
