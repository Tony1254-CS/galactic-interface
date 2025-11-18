import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background">
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Scanline Effect */}
      <div className="scanline absolute inset-0 pointer-events-none" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Holographic Photo Module */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative group">
              {/* Outer Hexagonal Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-full opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-500" />
              
              {/* Photo Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-full border-2 border-primary animate-pulse-glow" />
                
                {/* Photo */}
                <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-primary/30">
                  <img
                    src={profilePhoto}
                    alt="Sabbir Ahmed"
                    className="w-full h-full object-cover"
                  />
                  {/* Holographic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-secondary/10 mix-blend-overlay" />
                </div>

                {/* Floating Particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-primary rounded-full"
                    style={{
                      left: `${50 + 45 * Math.cos((i * Math.PI * 2) / 8)}%`,
                      top: `${50 + 45 * Math.sin((i * Math.PI * 2) / 8)}%`,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}

                {/* Scan Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent"
                  animate={{
                    y: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Name & Title Projection */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left space-y-6"
          >
            {/* Name Hologram */}
            <div className="space-y-2">
              <motion.div
                className="inline-block"
                animate={{
                  textShadow: [
                    "0 0 10px hsl(var(--primary))",
                    "0 0 20px hsl(var(--primary)), 0 0 30px hsl(var(--secondary))",
                    "0 0 10px hsl(var(--primary))",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <h1 className="text-5xl md:text-7xl font-bold text-primary text-glow-cyan tracking-wider">
                  SABBIR AHMED
                </h1>
              </motion.div>
              <div className="h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>

            {/* Tagline */}
            <motion.p
              className="text-xl md:text-2xl text-foreground/90 font-light tracking-wide"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Exploring code, intelligence, and cyber frontiers
            </motion.p>

            {/* Data Lines */}
            <div className="space-y-3 text-muted-foreground font-mono text-sm">
              <motion.div
                className="flex items-center gap-3 justify-center lg:justify-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
                <span className="text-primary/80">Machine Learning</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 justify-center lg:justify-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse-glow" />
                <span className="text-secondary/80">Cybersecurity</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 justify-center lg:justify-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse-glow" />
                <span className="text-accent/80">AI Systems & Experimentation</span>
              </motion.div>
            </div>

            {/* HUD Elements */}
            <div className="flex gap-4 justify-center lg:justify-start mt-8">
              <motion.div
                className="px-4 py-2 border border-primary/30 rounded bg-primary/5 font-mono text-xs text-primary"
                whileHover={{ borderColor: "hsl(var(--primary))", boxShadow: "0 0 20px hsl(var(--primary) / 0.3)" }}
              >
                STATUS: ONLINE
              </motion.div>
              <motion.div
                className="px-4 py-2 border border-accent/30 rounded bg-accent/5 font-mono text-xs text-accent"
                whileHover={{ borderColor: "hsl(var(--accent))", boxShadow: "0 0 20px hsl(var(--accent) / 0.3)" }}
              >
                3RD YEAR CSE
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-primary rounded-full"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
