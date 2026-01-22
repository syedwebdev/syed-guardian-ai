import { motion } from "framer-motion";
import { Shield, ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "1s" }} />
      
      {/* Scan Line Effect */}
      <div className="absolute inset-0 scan-line pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-muted-foreground">
              24/7 Global SOC Operations Active
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Securing the{" "}
            <span className="gradient-text">Digital World</span>
            <br />
            One Network at a Time
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            SYED (CSS) delivers enterprise-grade, AI-powered cybersecurity solutions 
            for networks, cloud, applications, and endpoints.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 cyber-glow group px-8"
              >
                Request Free Assessment
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/30 hover:border-primary hover:bg-primary/10 group px-8"
            >
              <Play className="mr-2 w-4 h-4" />
              Watch 2-Min Demo
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 pt-8 border-t border-border/30"
          >
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-6">
              Trusted by Global Enterprises & Governments
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-50 grayscale hover:opacity-70 hover:grayscale-0 transition-all duration-500">
              {["Fortune 500", "Gov. Agencies", "Tech Giants", "Financial Institutions", "Healthcare"].map((client) => (
                <div 
                  key={client}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground"
                >
                  {client}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
