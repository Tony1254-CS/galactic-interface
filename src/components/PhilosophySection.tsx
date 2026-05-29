import { motion } from "framer-motion";
import { AnimatedText } from "@/components/ui/AnimatedText";

const PhilosophySection = () => (
  <section id="philosophy" className="py-32 bg-background border-t border-white/5">
    <div className="container mx-auto px-6 md:px-12 max-w-4xl flex justify-center">
      <div className="text-center">
        <AnimatedText
          text='"Technology is only as meaningful as the problems it solves."'
          className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-tight leading-[1.2] text-white"
        />
      </div>
    </div>
  </section>
);

export default PhilosophySection;
