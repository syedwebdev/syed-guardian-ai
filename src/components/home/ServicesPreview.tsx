import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Lock, 
  Eye, 
  Brain, 
  Zap, 
  FileCheck,
  GraduationCap,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Managed Security Services",
    description: "24/7 SOC monitoring, endpoint protection, and cloud security management.",
    color: "primary",
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Application Security",
    description: "Penetration testing, WAF implementation, and DevSecOps integration.",
    color: "accent",
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "IAM & Access Management",
    description: "MFA, SSO, RBAC, and Privileged Access Management solutions.",
    color: "primary",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Threat Intelligence",
    description: "AI-driven threat prediction and SIEM dashboard analytics.",
    color: "accent",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Incident Response",
    description: "Rapid malware removal, digital forensics, and disaster recovery.",
    color: "primary",
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: "Consulting & Compliance",
    description: "ISO 27001, GDPR, HIPAA audits and security consulting.",
    color: "accent",
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Full-Spectrum <span className="gradient-text">Cybersecurity</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade security solutions tailored for your organization's unique needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass-card p-6 h-full hover:border-primary/30 transition-all duration-300 cursor-pointer">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 transition-all duration-300 ${
                  service.color === "primary" 
                    ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground" 
                    : "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground"
                }`}>
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/services">
            <Button 
              size="lg"
              variant="outline"
              className="border-primary/30 hover:border-primary hover:bg-primary/10 group"
            >
              View All Services
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
