import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Shield, Lock, Eye, Brain, Zap, FileCheck, GraduationCap,
  Server, Cloud, Smartphone, Globe, Database, Key,
  ArrowRight, Check, ChevronRight
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "mss",
    icon: <Shield className="w-8 h-8" />,
    title: "Managed Security Services",
    description: "Comprehensive 24/7 security operations center monitoring with real-time threat detection and response.",
    capabilities: [
      "24/7 Security Operations Center (SOC)",
      "Endpoint Detection & Response (EDR)",
      "Network Traffic Analysis",
      "Cloud Security Monitoring",
      "Log Management & SIEM",
      "Vulnerability Management",
    ],
    color: "primary",
  },
  {
    id: "appsec",
    icon: <Lock className="w-8 h-8" />,
    title: "Application Security",
    description: "Protect your applications from vulnerabilities with comprehensive testing and secure development practices.",
    capabilities: [
      "Penetration Testing (Web, Mobile, API)",
      "Web Application Firewall (WAF)",
      "DevSecOps Integration",
      "Static & Dynamic Code Analysis",
      "Secure Code Reviews",
      "Application Security Training",
    ],
    color: "accent",
  },
  {
    id: "iam",
    icon: <Eye className="w-8 h-8" />,
    title: "IAM & Access Management",
    description: "Secure identity governance with advanced authentication and access control solutions.",
    capabilities: [
      "Multi-Factor Authentication (MFA)",
      "Single Sign-On (SSO)",
      "Role-Based Access Control (RBAC)",
      "Privileged Access Management",
      "Identity Governance",
      "Directory Services Integration",
    ],
    color: "primary",
  },
  {
    id: "threat",
    icon: <Brain className="w-8 h-8" />,
    title: "Threat Intelligence",
    description: "AI-powered threat prediction and proactive security measures to stay ahead of emerging threats.",
    capabilities: [
      "AI-Driven Threat Prediction",
      "Real-time Threat Feeds",
      "Dark Web Monitoring",
      "SIEM Dashboard Analytics",
      "Threat Hunting Services",
      "Malware Analysis",
    ],
    color: "accent",
  },
  {
    id: "ir",
    icon: <Zap className="w-8 h-8" />,
    title: "Incident Response & Recovery",
    description: "Rapid response to security incidents with forensic analysis and complete recovery solutions.",
    capabilities: [
      "24/7 Incident Response Team",
      "Digital Forensics",
      "Malware Removal & Analysis",
      "Disaster Recovery Planning",
      "Business Continuity Services",
      "Post-Incident Reporting",
    ],
    color: "primary",
  },
  {
    id: "compliance",
    icon: <FileCheck className="w-8 h-8" />,
    title: "Consulting & Compliance",
    description: "Expert guidance on security strategy and regulatory compliance for your organization.",
    capabilities: [
      "ISO 27001 Certification",
      "GDPR Compliance",
      "HIPAA Compliance",
      "SOC 2 Type II Audits",
      "PCI DSS Compliance",
      "Security Architecture Design",
    ],
    color: "accent",
  },
  {
    id: "training",
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Training & Awareness",
    description: "Build a security-conscious culture with comprehensive training programs for your team.",
    capabilities: [
      "Security Awareness Programs",
      "Phishing Simulation",
      "Executive Security Briefings",
      "Technical Certification Prep",
      "Incident Response Drills",
      "Custom Training Modules",
    ],
    color: "primary",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-16 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="absolute inset-0 bg-hero-gradient" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-6">
              Full-Spectrum{" "}
              <span className="gradient-text">Cybersecurity</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Enterprise-grade security solutions designed to protect every aspect of your 
              digital infrastructure from networks to endpoints.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
                    service.color === "primary" 
                      ? "bg-primary/10 text-primary" 
                      : "bg-accent/10 text-accent"
                  }`}>
                    {service.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8">
                    {service.description}
                  </p>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.capabilities.map((cap) => (
                      <li key={cap} className="flex items-center gap-2 text-sm">
                        <Check className={`w-4 h-4 flex-shrink-0 ${
                          service.color === "primary" ? "text-primary" : "text-accent"
                        }`} />
                        <span className="text-muted-foreground">{cap}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                      Request Service Demo
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>

                {/* Visual Card */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="glass-card p-8 relative overflow-hidden">
                    <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl ${
                      service.color === "primary" ? "bg-primary/20" : "bg-accent/20"
                    }`} />
                    <div className={`absolute bottom-0 left-0 w-24 h-24 rounded-full blur-3xl ${
                      service.color === "primary" ? "bg-accent/10" : "bg-primary/10"
                    }`} />
                    
                    <div className="relative z-10 space-y-4">
                      {service.capabilities.slice(0, 4).map((cap, i) => (
                        <div 
                          key={cap}
                          className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border/50"
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            service.color === "primary" ? "bg-primary/20 text-primary" : "bg-accent/20 text-accent"
                          }`}>
                            <ChevronRight className="w-4 h-4" />
                          </div>
                          <span className="text-sm text-foreground">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-muted-foreground mb-8">
              Our security experts will design a tailored security program for your organization's specific needs.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 cyber-glow">
                Schedule Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
