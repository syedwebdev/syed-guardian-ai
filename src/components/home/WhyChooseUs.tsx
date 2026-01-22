import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Enterprise-Grade Security",
  "24/7 SOC & Threat Monitoring",
  "AI-Powered Cyber Intelligence",
  "Full-Spectrum Services",
  "Rapid Incident Response",
  "Global Presence, Local Support",
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
              The Trusted Partner for{" "}
              <span className="gradient-text">Global Security</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              SYED (CSS) combines cutting-edge AI technology with decades of enterprise 
              security expertise to deliver comprehensive protection for organizations worldwide.
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <Link to="/about">
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 group"
              >
                Learn More About Us
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-card p-8 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/20 rounded-full blur-3xl" />
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 relative z-10">
                <div className="text-center p-4 border border-border/50 rounded-lg bg-background/50">
                  <div className="text-3xl font-bold gradient-text mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-4 border border-border/50 rounded-lg bg-background/50">
                  <div className="text-3xl font-bold gradient-text mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Security Experts</div>
                </div>
                <div className="text-center p-4 border border-border/50 rounded-lg bg-background/50">
                  <div className="text-3xl font-bold gradient-text mb-1">30+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
                <div className="text-center p-4 border border-border/50 rounded-lg bg-background/50">
                  <div className="text-3xl font-bold gradient-text mb-1">98%</div>
                  <div className="text-sm text-muted-foreground">Client Retention</div>
                </div>
              </div>

              {/* Active Status */}
              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span>SOC Teams Active Worldwide</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
