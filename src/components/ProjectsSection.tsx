import { motion } from "framer-motion";
import { Brain, Shield, Pen, Wrench, Cpu, Database } from "lucide-react";

const projects = [
  {
    icon: Brain,
    title: "Machine Learning Experiments",
    description: "Neural networks, data analysis, predictive models",
    tags: ["Python", "TensorFlow", "Scikit-learn"],
    color: "primary",
  },
  {
    icon: Shield,
    title: "Cybersecurity Practice",
    description: "CTF learning, VM labs, pentesting basics, security research",
    tags: ["Kali Linux", "Wireshark", "Metasploit"],
    color: "destructive",
  },
  {
    icon: Pen,
    title: "Creative & Technical Writing",
    description: "Bilingual content creation, technical documentation",
    tags: ["Storytelling", "Documentation", "Blogging"],
    color: "secondary",
  },
  {
    icon: Wrench,
    title: "Technical Troubleshooting",
    description: "System diagnostics, problem-solving, optimization",
    tags: ["Debugging", "System Admin", "Performance"],
    color: "accent",
  },
  {
    icon: Cpu,
    title: "AI Workflows & Experimentation",
    description: "LLM pipelines, Ollama integration, AI tool exploration",
    tags: ["Ollama", "LangChain", "GPT APIs"],
    color: "tertiary",
  },
  {
    icon: Database,
    title: "Research & Analysis",
    description: "Academic research, data collection, analytical studies",
    tags: ["Research", "Data Analysis", "Publishing"],
    color: "primary",
  },
];

const ProjectsSection = () => {
  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-accent text-glow-blue mb-4">
            FUTURISTIC DATA PANELS
          </h2>
          <div className="h-0.5 w-32 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent" />
          <p className="mt-4 text-muted-foreground font-mono">
            &lt; PROJECT_ARCHIVES &gt;
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="relative group perspective-1000"
              >
                {/* Card */}
                <div className={`
                  relative h-full p-6 rounded-lg border
                  bg-card/40 backdrop-blur-md
                  border-${project.color}/30
                  hover:border-${project.color}
                  transition-all duration-300
                  transform-gpu
                `}>
                  {/* Holographic Glow */}
                  <div className={`
                    absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-100
                    bg-gradient-to-br from-${project.color}/20 via-${project.color}/10 to-transparent
                    blur-xl transition-opacity duration-500
                  `} />

                  {/* Scan Effect */}
                  <motion.div
                    className={`
                      absolute inset-0 bg-gradient-to-b 
                      from-transparent via-${project.color}/10 to-transparent
                      opacity-0 group-hover:opacity-100
                    `}
                    animate={{
                      y: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* Content */}
                  <div className="relative space-y-4 h-full flex flex-col">
                    {/* Icon Header */}
                    <div className="flex items-center gap-4">
                      <motion.div
                        className={`
                          w-12 h-12 rounded-lg flex items-center justify-center
                          border border-${project.color}/50
                          bg-${project.color}/10
                        `}
                        whileHover={{ scale: 1.1, rotate: 180 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className={`w-6 h-6 text-${project.color}`} />
                      </motion.div>
                      
                      <div className="flex-1">
                        <h3 className={`font-bold text-${project.color} text-lg`}>
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className={`h-px bg-gradient-to-r from-${project.color}/50 via-${project.color}/20 to-transparent`} />

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          className={`
                            px-3 py-1 rounded-full text-xs font-mono
                            bg-${project.color}/10
                            border border-${project.color}/30
                            text-${project.color}
                          `}
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: `0 0 10px hsl(var(--${project.color}) / 0.5)`
                          }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Status Indicator */}
                    <div className="flex items-center gap-2 pt-2">
                      <motion.div
                        className={`w-2 h-2 rounded-full bg-${project.color}`}
                        animate={{
                          opacity: [0.5, 1, 0.5],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                      <span className="text-xs font-mono text-muted-foreground">
                        FILE_ACTIVE
                      </span>
                    </div>
                  </div>

                  {/* Corner Brackets */}
                  <div className={`absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-${project.color}/40`} />
                  <div className={`absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-${project.color}/40`} />
                  <div className={`absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-${project.color}/40`} />
                  <div className={`absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-${project.color}/40`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
