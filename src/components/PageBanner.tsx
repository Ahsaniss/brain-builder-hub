import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageBannerProps {
  title: string;
  subtitle: string;
  bgImage: string;
  children?: ReactNode;
}

const PageBanner = ({ title, subtitle, bgImage, children }: PageBannerProps) => (
  <section className="page-banner pt-24">
    <img
      src={bgImage}
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
      loading="lazy"
    />
    <div className="page-banner-overlay" />
    <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />

    {/* Glowing orb */}
    <div className="absolute top-10 right-20 w-48 h-48 rounded-full bg-primary/15 blur-3xl animate-pulse-glow" />

    <div className="relative z-10 container mx-auto px-4 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-gradient"
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto"
      >
        {subtitle}
      </motion.p>
      {children}
    </div>
  </section>
);

export default PageBanner;
