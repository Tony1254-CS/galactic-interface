import { motion } from "framer-motion";
import { AnimatedText } from "@/components/ui/AnimatedText";

const AboutMeSection = () => (
  <section id="about" className="py-32 bg-background">
    <div className="container mx-auto px-6 md:px-12 max-w-5xl">
      <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="md:w-1/3"
        >
          <div className="flex flex-col gap-2">
            <AnimatedText 
              text="Builder. Researcher." 
              className="text-[clamp(2rem,4vw,3rem)] font-black tracking-tighter text-white leading-none justify-start"
            />
            <p className="text-muted-foreground font-medium text-[15px] pt-4">
              Machine Learning <span className="mx-2 text-white/20">•</span> Cybersecurity <span className="mx-2 text-white/20">•</span> Applied AI
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="md:w-2/3 space-y-6 text-lg text-muted-foreground font-medium leading-[1.8]"
        >
          <p>
            I am a Computer Science & Engineering student at Dhaka International University. I design and engineer intelligent systems that bridge the gap between theoretical research and real-world application.
          </p>
          <p>
            My work is split evenly between rigorous academic research and practical software engineering. From profiling complex vulnerabilities in network architectures to deploying predictive machine learning models, I am driven by one core philosophy: <span className="text-white">technology must solve real problems.</span>
          </p>
        </motion.div>

      </div>
    </div>
  </section>
);

export default AboutMeSection;
