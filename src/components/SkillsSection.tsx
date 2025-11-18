import { motion } from "framer-motion";
import { Brain, Shield, Wrench, Pen, BookOpen, Search, Sparkles } from "lucide-react";

const skills = [
  { name: "Machine Learning", icon: Brain, color: "primary", level: 90 },
  { name: "Cybersecurity", icon: Shield, color: "destructive", level: 85 },
  { name: "Technical Troubleshooting", icon: Wrench, color: "accent", level: 95 },
  { name: "Creative Writing", icon: Pen, color: "secondary", level: 88 },
  { name: "Storytelling", icon: BookOpen, color: "tertiary", level: 90 },
  { name: "Research & Analysis", icon: Search, color: "primary", level: 92 },
  { name: "AI Tools / LLM Experimentation", icon: Sparkles, color: "accent", level: 87 },
];

const SkillsSection = () => {
  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-tertiary mb-4">
            HOLOGRAM CAPABILITY GRID
          </h2>
          <div className="h-0.5 w-32 mx-auto bg-gradient-to-r from-transparent via-tertiary to-transparent" />
          <p className="mt-4 text-muted-foreground font-mono">
            &lt; SKILL_MATRIX &gt;
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="max-w-5xl mx-auto space-y-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                {/* Skill Container */}
                <div className={`
                  relative p-6 rounded-lg border
                  bg-card/20 backdrop-blur-sm
                  border-${skill.color}/30
                  hover:border-${skill.color}
                  transition-all duration-300
                `}>
                  {/* Glow Effect */}
                  <div className={`
                    absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100
                    bg-gradient-to-r from-${skill.color}/10 to-transparent
                    blur-lg transition-opacity duration-500
                  `} />

                  <div className="relative flex items-center gap-6">
                    {/* Icon */}
                    <motion.div
                      className={`
                        flex-shrink-0 w-16 h-16 rounded-full
                        border-2 border-${skill.color}/50
                        bg-${skill.color}/10
                        flex items-center justify-center
                      `}
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.3 },
                      }}
                    >
                      {/* Pulsing Ring */}
                      <motion.div
                        className={`absolute inset-0 rounded-full border-2 border-${skill.color}/30`}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                      <Icon className={`w-8 h-8 text-${skill.color} relative z-10`} />
                    </motion.div>

                    {/* Skill Details */}
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className={`text-xl font-bold text-${skill.color}`}>
                          {skill.name}
                        </h3>
                        <motion.span
                          className={`
                            px-3 py-1 rounded-full font-mono text-sm
                            bg-${skill.color}/20
                            border border-${skill.color}/50
                            text-${skill.color}
                          `}
                          animate={{
                            boxShadow: [
                              `0 0 10px hsl(var(--${skill.color}) / 0.2)`,
                              `0 0 20px hsl(var(--${skill.color}) / 0.4)`,
                              `0 0 10px hsl(var(--${skill.color}) / 0.2)`,
                            ],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>

                      {/* Progress Bar */}
                      <div className="relative h-2 bg-muted/30 rounded-full overflow-hidden">
                        {/* Background Grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:10px_100%]" />
                        
                        {/* Progress Fill */}
                        <motion.div
                          className={`absolute inset-y-0 left-0 bg-gradient-to-r from-${skill.color} to-${skill.color}-glow rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: index * 0.1 + 0.5, ease: "easeOut" }}
                        >
                          {/* Shimmer Effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{
                              x: ["-100%", "200%"],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear",
                              delay: index * 0.2,
                            }}
                          />
                        </motion.div>

                        {/* Glowing Dot at End */}
                        <motion.div
                          className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-${skill.color} shadow-lg`}
                          initial={{ left: 0 }}
                          whileInView={{ left: `calc(${skill.level}% - 6px)` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: index * 0.1 + 0.5, ease: "easeOut" }}
                          animate={{
                            boxShadow: [
                              `0 0 10px hsl(var(--${skill.color}))`,
                              `0 0 20px hsl(var(--${skill.color}))`,
                              `0 0 10px hsl(var(--${skill.color}))`,
                            ],
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* HUD Corners */}
                  <div className={`absolute top-3 left-3 w-3 h-3 border-l border-t border-${skill.color}/50`} />
                  <div className={`absolute top-3 right-3 w-3 h-3 border-r border-t border-${skill.color}/50`} />
                  <div className={`absolute bottom-3 left-3 w-3 h-3 border-l border-b border-${skill.color}/50`} />
                  <div className={`absolute bottom-3 right-3 w-3 h-3 border-r border-b border-${skill.color}/50`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
