import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 lg:p-16 text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
            <Shield className="w-8 h-8" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Secure Your{" "}
            <span className="gradient-text">Digital Assets?</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Get a comprehensive security assessment from our experts. Identify vulnerabilities 
            before they become threats.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 cyber-glow group px-8"
              >
                Request Free Assessment
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg"
                variant="outline"
                className="border-primary/30 hover:border-primary hover:bg-primary/10 px-8"
              >
                Contact Sales
              </Button>
            </Link>
          </div>

          {/* Trust Note */}
          <p className="mt-8 text-sm text-muted-foreground">
            Trusted by Fortune 500 companies and government agencies worldwide
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
