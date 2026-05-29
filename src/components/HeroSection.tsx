import { motion, useScroll, useTransform } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpg";
import { Magnetic } from "@/components/ui/Magnetic";
import { useRef } from "react";

const pills = [
  { label: "NASA Space Apps Global Nominee" },
  { label: "3 Published Research Papers" },
  { label: "Computer Science & Engineering" },
];

const HeroSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const yImage = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={container} className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background">
      <div className="container mx-auto px-6 md:px-12 relative z-10 pt-32 pb-20">
        <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto space-y-12">
          
          {/* ── Photo ── */}
          <motion.div
            style={{ y: yImage }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden noise-overlay"
          >
            <img
              src={profilePhoto}
              alt="Sabbir Ahmed"
              className="w-full h-full object-cover grayscale contrast-[1.25] brightness-90"
            />
          </motion.div>

          {/* ── Text ── */}
          <motion.div style={{ y: yText, opacity: opacityText }} className="space-y-8 pt-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3.5rem,10vw,8rem)] font-black tracking-tighter leading-[0.85] text-white"
            >
              Sabbir Ahmed
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-6"
            >
              <div className="text-center space-y-3">
                <p className="text-[11px] font-bold tracking-[0.2em] text-white/50 uppercase">
                  Dhaka, Bangladesh
                </p>
                <p className="text-sm font-semibold tracking-wide text-white/70">
                  3 Published Papers <span className="text-white/20 mx-2">•</span> NASA Global Nominee <span className="text-white/20 mx-2">•</span> Innovation World Cup 2025 Global Finalist
                </p>
                <p className="text-sm font-semibold tracking-wide text-white/90">
                  Machine Learning <span className="text-white/20 mx-2">•</span> Cybersecurity <span className="text-white/20 mx-2">•</span> Applied AI
                </p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[17px] md:text-xl text-muted-foreground font-medium tracking-tight leading-relaxed max-w-2xl mx-auto pt-4"
            >
              Building intelligent systems that transform data into decisions.
            </motion.p>
          </motion.div>

          {/* ── CTAs ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-8"
          >
            <Magnetic>
              <a
                href="#proof-of-work"
                className="px-8 py-3.5 rounded-full bg-white text-black text-sm font-bold tracking-tight hover:scale-105 transition-transform duration-300 inline-block"
              >
                Explore Work
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#publications"
                className="px-8 py-3.5 rounded-full bg-white/5 text-white text-sm font-bold tracking-tight hover:bg-white/10 transition-colors duration-300 inline-block"
              >
                Publications
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-full border border-white/10 text-white text-sm font-bold tracking-tight hover:bg-white/5 transition-colors duration-300 inline-block"
              >
                Resume
              </a>
            </Magnetic>
          </motion.div>

          {/* ── Recognized By ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="pt-24 w-full flex flex-col items-center gap-8"
          >
            <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground/60">Published & Recognized By</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
              <span className="font-serif text-lg font-bold text-white tracking-tight">Springer</span>
              <span className="font-serif text-lg font-bold text-white tracking-tight">Taylor & Francis</span>
              <span className="font-serif text-lg text-white tracking-tight">Atlantis Press <span className="font-sans text-xs text-white/50 ml-1">/ Springer Nature</span></span>
              <span className="font-sans text-lg font-black italic text-white tracking-tighter">NASA Space Apps</span>
              <span className="font-sans text-lg font-bold text-white tracking-tighter uppercase">Innovation World Cup</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
