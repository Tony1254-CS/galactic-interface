import { motion } from "framer-motion";
import { Trophy, Rocket, BookOpen, Award, Star, Users, Lightbulb, Drama } from "lucide-react";

const achievements = [
  {
    icon: Rocket,
    title: "NASA Space Apps Challenge 2025",
    subtitle: "Regional 1st Runner-Up",
    color: "primary",
  },
  {
    icon: Star,
    title: "NASA Space Apps 2025",
    subtitle: "Global Nominee",
    color: "secondary",
  },
  {
    icon: BookOpen,
    title: "Published Researcher",
    subtitle: "BIM 2025 (Springer LNNS)",
    color: "accent",
  },
  {
    icon: Award,
    title: "Math Olympiad",
    subtitle: "Division Level",
    color: "tertiary",
  },
  {
    icon: Users,
    title: "Debate Competitions",
    subtitle: "Multiple Wins",
    color: "primary",
  },
  {
    icon: Trophy,
    title: "Poster Design Competition",
    subtitle: "Winner",
    color: "secondary",
  },
  {
    icon: Lightbulb,
    title: "Idea / Innovation Contest",
    subtitle: "Participant",
    color: "accent",
  },
  {
    icon: Drama,
    title: "Drama & Stage Performances",
    subtitle: "Creative Arts",
    color: "tertiary",
  },
];

const AchievementsSection = () => {
  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-primary text-glow-cyan mb-4 tracking-tight">
            Achievements
          </h2>
          <div className="h-1 w-40 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse-glow" />
          <p className="mt-6 text-muted-foreground font-mono text-lg">
            Recognition & Honors
          </p>
        </motion.div>

        {/* Achievement Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.2 }
                }}
                className="relative group"
              >
                {/* Card */}
                <div className={`
                  relative p-8 rounded-xl border-2
                  bg-gradient-to-br from-card/60 to-card/30 backdrop-blur-md
                  border-${achievement.color}/40
                  hover:border-${achievement.color}
                  transition-all duration-500
                  shadow-2xl hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]
                `}>
                  {/* Glow Effect */}
                  <div className={`
                    absolute -inset-0.5 rounded-lg opacity-0 group-hover:opacity-100
                    bg-gradient-to-r from-${achievement.color}/20 to-${achievement.color}/5
                    blur-sm transition-opacity duration-300
                  `} />

                  {/* Content */}
                  <div className="relative space-y-4">
                    {/* Icon */}
                    <div className="flex justify-center">
                      <motion.div
                        className={`
                          w-16 h-16 rounded-full flex items-center justify-center
                          border-2 border-${achievement.color}/50
                          bg-${achievement.color}/10
                        `}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className={`w-8 h-8 text-${achievement.color}`} />
                      </motion.div>
                    </div>

                    {/* Scan Line */}
                    <motion.div
                      className={`h-0.5 w-full bg-gradient-to-r from-transparent via-${achievement.color} to-transparent`}
                      initial={{ x: "-100%" }}
                      whileInView={{ x: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />

                    {/* Text */}
                    <div className="text-center space-y-2">
                      <h3 className={`font-bold text-${achievement.color} text-sm tracking-wide`}>
                        {achievement.title}
                      </h3>
                      <p className="text-muted-foreground text-xs font-mono">
                        {achievement.subtitle}
                      </p>
                    </div>

                    {/* Corner Decorations */}
                    <div className={`absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-${achievement.color}/50`} />
                    <div className={`absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-${achievement.color}/50`} />
                    <div className={`absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-${achievement.color}/50`} />
                    <div className={`absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-${achievement.color}/50`} />
                  </div>
                </div>

                {/* Data Stream */}
                <motion.div
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100"
                  initial={false}
                >
                  <div className={`w-0.5 h-8 bg-gradient-to-b from-${achievement.color} to-transparent`} />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
