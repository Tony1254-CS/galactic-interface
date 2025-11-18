import { motion } from "framer-motion";
import { GraduationCap, Award, TrendingUp } from "lucide-react";

const academicData = [
  {
    level: "Undergraduate",
    institution: "Dhaka International University",
    degree: "CSE - 3rd Year",
    grade: "CGPA 3.84 Average",
    icon: GraduationCap,
    color: "primary",
  },
  {
    level: "HSC 2022",
    institution: "Higher Secondary Certificate",
    degree: "Science Group",
    grade: "GPA 5.00",
    icon: Award,
    color: "accent",
  },
  {
    level: "SSC 2020",
    institution: "Secondary School Certificate",
    degree: "Science Group",
    grade: "GPA 5.00",
    icon: TrendingUp,
    color: "secondary",
  },
];

const AcademicSection = () => {
  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-secondary text-glow-magenta mb-4 tracking-tight">
            Academic Background
          </h2>
          <div className="h-1 w-40 mx-auto bg-gradient-to-r from-transparent via-secondary to-transparent animate-pulse-glow" />
          <p className="mt-6 text-muted-foreground font-mono text-lg">
            Educational Journey
          </p>
        </motion.div>

        {/* Academic Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {academicData.map((record, index) => {
            const Icon = record.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                {/* Card Container */}
                <div className={`
                  relative p-8 rounded-xl border-2
                  bg-gradient-to-br from-card/60 to-card/30 backdrop-blur-md
                  border-${record.color}/40
                  hover:border-${record.color}
                  transition-all duration-500
                  shadow-2xl hover:shadow-[0_0_30px_rgba(255,0,255,0.3)]
                `}>
                  {/* Holographic Effect */}
                  <div className={`
                    absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100
                    bg-gradient-to-r from-${record.color}/10 to-transparent
                    transition-opacity duration-300
                  `} />

                  {/* Content Grid */}
                  <div className="relative flex items-center gap-6">
                    {/* Icon Section */}
                    <motion.div
                      className={`
                        flex-shrink-0 w-20 h-20 rounded-lg
                        border-2 border-${record.color}/50
                        bg-${record.color}/10
                        flex items-center justify-center
                      `}
                      whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className={`w-10 h-10 text-${record.color}`} />
                    </motion.div>

                    {/* Details Section */}
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className={`text-xl font-bold text-${record.color}`}>
                          {record.level}
                        </h3>
                        <motion.div
                          className={`
                            px-4 py-1 rounded-full
                            bg-${record.color}/20
                            border border-${record.color}/50
                            text-${record.color} text-sm font-mono
                          `}
                          animate={{
                            boxShadow: [
                              `0 0 10px hsl(var(--${record.color}) / 0.3)`,
                              `0 0 20px hsl(var(--${record.color}) / 0.5)`,
                              `0 0 10px hsl(var(--${record.color}) / 0.3)`,
                            ],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {record.grade}
                        </motion.div>
                      </div>
                      
                      <p className="text-foreground/80 font-medium">
                        {record.institution}
                      </p>
                      
                      <p className="text-muted-foreground text-sm font-mono">
                        {record.degree}
                      </p>

                      {/* Progress Bar */}
                      <div className="relative h-1 bg-muted/30 rounded-full overflow-hidden">
                        <motion.div
                          className={`absolute inset-y-0 left-0 bg-${record.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* HUD Corners */}
                  <div className={`absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-${record.color}/50`} />
                  <div className={`absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-${record.color}/50`} />
                  <div className={`absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-${record.color}/50`} />
                  <div className={`absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-${record.color}/50`} />
                </div>

                {/* Floating Numbers Animation */}
                <motion.div
                  className="absolute -right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <div className={`text-${record.color}/50 font-mono text-xs`}>
                    [DATA_VERIFIED]
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AcademicSection;
