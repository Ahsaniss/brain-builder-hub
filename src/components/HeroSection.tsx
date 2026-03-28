import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    {/* Background image */}
    <img
      src={heroBg}
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    {/* Gradient overlay */}
    <div className="absolute inset-0 gradient-hero" />

    {/* Floating shapes */}
    <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/20 blur-3xl animate-float" />
    <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-secondary/20 blur-3xl animate-float [animation-delay:3s]" />

    <div className="relative z-10 container mx-auto px-4 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-tight"
      >
        Build Your Future with
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-pink-200">
          Brain Builder
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto"
      >
        Learn Skills That Matter — Professional courses in tech, design, language & more.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-10 flex flex-wrap gap-4 justify-center"
      >
        <Button size="lg" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8">
          <a href="#courses">Explore Courses</a>
        </Button>
        <Button size="lg" variant="outline" asChild className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8">
          <a href="#contact">Join Now</a>
        </Button>
      </motion.div>
    </div>

    {/* Wave divider */}
    <div className="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1440 120" className="w-full" preserveAspectRatio="none">
        <path
          d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"
          fill="hsl(0 0% 5%)"
        />
      </svg>
    </div>
  </section>
);

export default HeroSection;
