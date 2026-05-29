import { motion } from "framer-motion";
import { Mail, Github, Linkedin, BookOpen, Facebook, Phone, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Email", value: "sabbirahmed12546@gmail.com", href: "mailto:sabbirahmed12546@gmail.com", icon: Mail },
  { label: "LinkedIn", value: "sabbir-ahmed1254", href: "https://www.linkedin.com/in/sabbir-ahmed1254/", icon: Linkedin },
  { label: "GitHub", value: "Tony1254-CS", href: "https://github.com/Tony1254-CS", icon: Github },
  { label: "Google Scholar", value: "Publications", href: "https://scholar.google.com", icon: BookOpen },
  { label: "Facebook", value: "sabbir.ahmed.1254", href: "https://www.facebook.com/sabbir.ahmed.1254#", icon: Facebook },
  { label: "WhatsApp", value: "+88 01521782413", href: "https://wa.me/8801521782413", icon: Phone },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 bg-background border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto space-y-6 mb-20"
        >
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black tracking-tighter text-white leading-none">
            Let's Connect.
          </h2>
          <p className="text-lg text-muted-foreground font-medium leading-relaxed">
            Open for research collaborations, internships, and conversations about intelligent systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {links.map((l, i) => {
            const Icon = l.icon;
            return (
              <motion.a
                key={i}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col items-center justify-center p-10 bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all duration-300 gap-4"
              >
                <div className="absolute top-4 right-4 text-white/20 group-hover:text-white/80 transition-colors duration-300">
                  <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
                </div>
                <Icon className="w-8 h-8 text-white/60 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                <div className="space-y-1">
                  <p className="text-sm font-bold text-white group-hover:text-white transition-colors duration-300">{l.label}</p>
                  <p className="text-xs text-white/40 group-hover:text-white/60 font-medium tracking-wide">{l.value}</p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
