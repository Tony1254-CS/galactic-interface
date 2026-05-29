import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AION",
    category: "AI RESEARCH ORCHESTRATION PLATFORM",
    description: "Transforms research questions into structured, evidence-grounded research workflows through multi-stage AI reasoning pipelines.",
    capabilities: [
      "Literature Discovery",
      "Hypothesis Generation",
      "Experimental Design",
      "Research Drafting",
      "Critique Loops"
    ],
    status: "Research Prototype",
    tech: ["Python", "LLMs", "RAG", "Knowledge Graphs"],
    githubUrl: "https://github.com/Tony1254-CS/aion-discovery-engine",
    demoUrl: "https://aion-discovery-engine12.vercel.app/"
  },
  {
    title: "NeuroMirror",
    category: "REAL-TIME BEHAVIORAL INTELLIGENCE SYSTEM",
    description: "Analyzes facial expressions, eye contact, confidence, and communication patterns through real-time AI feedback.",
    capabilities: [
      "Facial Analysis",
      "Eye Contact Tracking",
      "Confidence Scoring",
      "Real-Time Feedback"
    ],
    status: "Prototype",
    tech: ["Computer Vision", "Python", "Machine Learning"],
    githubUrl: "https://github.com/Tony1254-CS/presence-ai-12",
    demoUrl: "https://presence-ai-12.vercel.app/"
  },
  {
    title: "PARALLEL",
    category: "ALTERNATE-SELF SIMULATION FRAMEWORK",
    description: "Explores decision-making through multiple AI-generated cognitive perspectives and future trajectory simulations.",
    capabilities: [
      "Decision-Making Simulation",
      "Cognitive Modeling",
      "Scenario Analysis",
      "Trajectory Forecasting"
    ],
    status: "Research Concept",
    tech: ["LLMs", "Agent Systems", "Behavioral Modeling"],
    githubUrl: "https://github.com/Tony1254-CS/parallel-selves101",
    demoUrl: "https://parallel-selves.vercel.app/"
  }
];

const FeaturedProjectsSection = () => (
  <section id="projects" className="py-32 bg-background border-t border-white/5">
    <div className="container mx-auto px-6 md:px-12 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-20 space-y-4"
      >
        <h3 className="text-[11px] font-bold tracking-[0.2em] text-white/40 uppercase">
          FEATURED WORK
        </h3>
        <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black tracking-tighter text-white leading-none">
          Featured Projects.
        </h2>
        <p className="text-lg text-muted-foreground font-medium max-w-2xl pt-2">
          Building systems that combine research, intelligence, and real-world problem solving.
        </p>
      </motion.div>

      <div className="space-y-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex flex-col lg:flex-row gap-12 lg:gap-24 p-8 md:p-12 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 hover:-translate-y-1 transition-all duration-500 rounded-2xl"
          >
            {/* Left side: Project Info */}
            <div className="flex-1 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:text-white/90 transition-colors">
                    {p.title}
                  </h3>
                  <a href={p.githubUrl} className="text-white/40 hover:text-white transition-colors" target="_blank" rel="noreferrer">
                    <Github className="w-5 h-5" />
                  </a>
                  {p.demoUrl && (
                    <a href={p.demoUrl} className="text-white/40 hover:text-white transition-colors" target="_blank" rel="noreferrer">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
                <p className="text-[11px] font-bold tracking-[0.1em] text-white/50 uppercase">
                  {p.category}
                </p>
              </div>

              <p className="text-[15px] md:text-base text-muted-foreground font-medium leading-relaxed max-w-xl">
                {p.description}
              </p>

              <div className="flex flex-col gap-1.5 pt-2">
                <span className="text-[10px] font-bold tracking-widest text-white/30 uppercase">Status</span>
                <span className="text-sm font-semibold text-white/90">{p.status}</span>
              </div>

              <div className="flex flex-col gap-1.5 pt-2">
                <span className="text-[10px] font-bold tracking-widest text-white/30 uppercase">Technologies</span>
                <div className="flex flex-wrap gap-2 text-sm font-medium text-white/70">
                  {p.tech.join(" • ")}
                </div>
              </div>
            </div>

            {/* Right side: Capabilities */}
            <div className="lg:w-[35%] flex flex-col justify-start">
              <span className="text-[10px] font-bold tracking-widest text-white/30 uppercase mb-4">Core Capabilities</span>
              <div className="flex flex-wrap gap-2.5">
                {p.capabilities.map((cap, idx) => (
                  <span
                    key={idx}
                    className="text-[12px] font-semibold tracking-wide text-white/80 bg-white/5 border border-white/5 px-4 py-2 rounded-full whitespace-nowrap"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedProjectsSection;
