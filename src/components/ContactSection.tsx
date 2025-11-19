import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const socialLinks = [
  { icon: Mail, label: "Email", href: "mailto:sabbirahmed1254@.com", color: "primary" },
  { icon: Github, label: "GitHub", href: "https://github.com/Tony1254-CS", color: "foreground" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sabbir-ahmed1254", color: "accent" },
  { icon: Twitter, label: "Twitter", href: "https://x.com/Sabbir1254", color: "secondary" },
];

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Transmission sent successfully!", {
      description: "Message received. Will respond within 24 hours.",
    });
  };

  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-card/30 to-background" />
      
      {/* Grid Lines */}
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
            Get In Touch
          </h2>
          <div className="h-1 w-40 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse-glow" />
          <p className="mt-6 text-muted-foreground font-mono text-lg">
            Let's Connect
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative p-8 rounded-lg border border-primary/30 bg-card/20 backdrop-blur-sm shadow-2xl shadow-primary/20">
                {/* Holographic Glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 to-accent/30 rounded-lg blur-2xl opacity-60 animate-pulse" />

                <form onSubmit={handleSubmit} className="relative space-y-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <motion.label
                      className="text-sm font-mono text-primary flex items-center gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
                      IDENTITY_NAME
                    </motion.label>
                    <Input
                      placeholder="Enter your name..."
                      className="bg-background/50 border-primary/30 focus:border-primary text-foreground placeholder:text-muted-foreground font-mono"
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <motion.label
                      className="text-sm font-mono text-accent flex items-center gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="w-2 h-2 bg-accent rounded-full animate-pulse-glow" />
                      COMM_CHANNEL
                    </motion.label>
                    <Input
                      type="email"
                      placeholder="your.email@domain.com"
                      className="bg-background/50 border-accent/30 focus:border-accent text-foreground placeholder:text-muted-foreground font-mono"
                      required
                    />
                  </div>

                  {/* Message Textarea */}
                  <div className="space-y-2">
                    <motion.label
                      className="text-sm font-mono text-secondary flex items-center gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="w-2 h-2 bg-secondary rounded-full animate-pulse-glow" />
                      MESSAGE_DATA
                    </motion.label>
                    <Textarea
                      placeholder="Compose your transmission..."
                      className="bg-background/50 border-secondary/30 focus:border-secondary text-foreground placeholder:text-muted-foreground font-mono min-h-32 resize-none"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-mono font-bold py-6 relative overflow-hidden group"
                    >
                      {/* Button Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <span className="relative flex items-center justify-center gap-2">
                        <Send className="w-4 h-4" />
                        SEND TRANSMISSION
                      </span>

                      {/* Scan Line */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{
                          x: ["-100%", "200%"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    </Button>
                  </motion.div>
                </form>

                {/* Corner Brackets */}
                <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-primary/50" />
                <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-primary/50" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-primary/50" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-primary/50" />
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
                  <span>CONNECT</span>
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
                </h3>

                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="block relative group"
                    >
                      <div className={`
                        p-4 rounded-lg border
                        bg-card/20 backdrop-blur-sm
                        border-${link.color}/30
                        hover:border-${link.color}
                        transition-all duration-300
                      `}>
                        {/* Glow Effect */}
                        <div className={`
                          absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100
                          bg-gradient-to-r from-${link.color}/10 to-transparent
                          blur-md transition-opacity duration-300
                        `} />

                        <div className="relative flex items-center gap-4">
                          <motion.div
                            className={`
                              w-12 h-12 rounded-lg flex items-center justify-center
                              border border-${link.color}/50
                              bg-${link.color}/10
                            `}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Icon className={`w-6 h-6 text-${link.color}`} />
                          </motion.div>
                          
                          <div>
                            <p className={`font-bold text-${link.color}`}>{link.label}</p>
                            <p className="text-xs text-muted-foreground font-mono">
                              LINK_ACTIVE
                            </p>
                          </div>

                          {/* Arrow */}
                          <div className="ml-auto">
                            <motion.div
                              className={`text-${link.color}/50 group-hover:text-${link.color}`}
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              →
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Status Panel */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-8 p-6 rounded-lg border border-primary/20 bg-card/10 backdrop-blur-sm"
              >
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">STATUS:</span>
                    <span className="text-primary flex items-center gap-2">
                      <motion.div
                        className="w-2 h-2 bg-primary rounded-full"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      ONLINE
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">RESPONSE TIME:</span>
                    <span className="text-accent">&lt; 24 HRS</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">LOCATION:</span>
                    <span className="text-secondary">BANGLADESH</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
