import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/capture-image.png";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img
      src={heroBg}
      alt=""
      className="absolute inset-0 w-full h-full object-cover object-[78%_center] md:object-center"
      width={1920}
      height={1080}
      loading="eager"
      fetchPriority="high"
      decoding="async"
    />
    <div className="absolute inset-0 bg-background/35 md:bg-background/50" />

    {/* Glowing orbs */}
    <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/20 blur-3xl animate-float" />
    <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-secondary/20 blur-3xl animate-float [animation-delay:3s]" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/10 blur-3xl animate-pulse-glow" />

    <div className="relative z-10 container mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6">
          🚀 Transform Your Career Today
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight"
      >
        Build Your Future with
        <br />
        <span className="text-gradient">Brain Builder</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
      >
        Learn Skills That Matter — Professional courses in tech, design, language & more.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="mt-10 flex flex-wrap gap-4 justify-center"
      >
        <Button size="lg" asChild className="glow-gold font-semibold px-8">
          <Link to="/courses">Explore Courses</Link>
        </Button>
        <Button size="lg" variant="outline" asChild className="border-primary/50 text-primary hover:bg-primary/10 font-semibold px-8">
          <Link to="/contact">Join Now</Link>
        </Button>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="mt-20 grid grid-cols-3 gap-6 max-w-lg mx-auto"
      >
        {[
          { num: "14+", label: "Courses" },
          { num: "500+", label: "Students" },
          { num: "20+", label: "Experts" },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-gradient">{s.num}</div>
            <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </div>

    <div className="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1440 120" className="w-full" preserveAspectRatio="none">
        <path d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z" fill="var(--wave-fill)" />
      </svg>
    </div>
  </section>
);

export default HeroSection;
