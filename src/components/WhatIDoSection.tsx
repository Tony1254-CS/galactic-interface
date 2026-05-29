import { motion } from "framer-motion";
import { Brain, ShieldCheck, FlaskConical } from "lucide-react";

const domains = [
  {
    icon: Brain,
    title: "Machine Learning",
    items: [
      "Predictive Analytics",
      "Pattern Recognition",
      "Intelligent Systems",
      "Data-Driven Decision Making"
    ]
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    items: [
      "Network Analysis",
      "Security Research",
      "Virtual Lab Environments",
      "System Security"
    ]
  },
  {
    icon: FlaskConical,
    title: "Applied Research",
    items: [
      "Published Research",
      "Experimental Design",
      "Machine Learning Applications",
      "Real-World Impact"
    ]
  },
];

const WhatIDoSection = () => (
  <section id="what-i-do" className="py-32">
    <div className="container mx-auto px-6 md:px-12 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-20 text-center"
      >
        <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black tracking-tighter text-white leading-none">
          Core Focus.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {domains.map((d, i) => {
          const Icon = d.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <div className="h-full p-8 md:p-10 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col gap-8 group transition-colors duration-500 hover:bg-white/[0.04]">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white">
                  <Icon className="w-5 h-5 opacity-80" strokeWidth={1.5} />
                </div>
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white tracking-tight">{d.title}</h3>
                  <ul className="space-y-3">
                    {d.items.map((item, idx) => (
                      <li key={idx} className="text-[14px] text-muted-foreground font-medium flex items-start gap-3">
                        <span className="text-white/20">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhatIDoSection;
