import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Brain, Shield, Cloud, Monitor, BarChart3, Lock,
  ArrowRight, Check, Zap, Globe
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const products = [
  {
    id: "ai-platform",
    icon: <Brain className="w-10 h-10" />,
    title: "AI Threat Intelligence Platform",
    tagline: "Predict. Prevent. Protect.",
    description: "Our flagship AI-powered platform delivers predictive threat analytics, real-time monitoring, and automated response capabilities.",
    features: [
      "Machine Learning Threat Detection",
      "Predictive Analytics Dashboard",
      "Automated Incident Response",
      "Real-time Threat Visualization",
      "Custom Alert Configuration",
      "Integration API Access",
    ],
    stats: [
      { label: "Threat Detection Rate", value: "99.9%" },
      { label: "False Positive Rate", value: "<0.1%" },
      { label: "Response Time", value: "<30s" },
    ],
  },
  {
    id: "endpoint",
    icon: <Shield className="w-10 h-10" />,
    title: "Endpoint Protection Suite",
    tagline: "Defense at Every Device.",
    description: "Comprehensive multi-device protection against malware, ransomware, and zero-day threats with minimal performance impact.",
    features: [
      "Next-Gen Antivirus Protection",
      "Ransomware Shield & Rollback",
      "Behavioral Analysis Engine",
      "USB & Device Control",
      "Centralized Management Console",
      "Offline Protection Mode",
    ],
    stats: [
      { label: "Devices Protected", value: "1M+" },
      { label: "Threats Blocked Daily", value: "500K" },
      { label: "CPU Impact", value: "<2%" },
    ],
  },
  {
    id: "cloud-security",
    icon: <Cloud className="w-10 h-10" />,
    title: "Cloud & Network Security Manager",
    tagline: "Secure Your Entire Infrastructure.",
    description: "Real-time cloud workload protection with advanced network monitoring and automated security policy enforcement.",
    features: [
      "Multi-Cloud Support (AWS, Azure, GCP)",
      "Container Security",
      "Network Traffic Analysis",
      "Security Policy Automation",
      "Compliance Monitoring",
      "Cost Optimization Insights",
    ],
    stats: [
      { label: "Cloud Environments", value: "10K+" },
      { label: "Containers Monitored", value: "5M+" },
      { label: "Uptime", value: "99.99%" },
    ],
  },
];

const Products = () => {
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
              Our Products
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-6">
              Proprietary{" "}
              <span className="gradient-text">Security Tools</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Industry-leading security platforms built with cutting-edge AI and 
              enterprise-grade reliability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Tabs defaultValue="ai-platform" className="w-full">
            <TabsList className="grid grid-cols-3 w-full max-w-2xl mx-auto mb-12 bg-secondary/50 p-1">
              <TabsTrigger 
                value="ai-platform" 
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Brain className="w-4 h-4 mr-2 hidden sm:block" />
                AI Platform
              </TabsTrigger>
              <TabsTrigger 
                value="endpoint"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Shield className="w-4 h-4 mr-2 hidden sm:block" />
                Endpoint
              </TabsTrigger>
              <TabsTrigger 
                value="cloud-security"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Cloud className="w-4 h-4 mr-2 hidden sm:block" />
                Cloud
              </TabsTrigger>
            </TabsList>

            {products.map((product) => (
              <TabsContent key={product.id} value={product.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
                >
                  {/* Product Info */}
                  <div>
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 text-primary mb-6">
                      {product.icon}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                      {product.title}
                    </h2>
                    <p className="text-primary font-medium mb-4">{product.tagline}</p>
                    <p className="text-muted-foreground text-lg mb-8">
                      {product.description}
                    </p>

                    <h3 className="font-semibold text-lg mb-4">Key Features</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-4">
                      <Link to="/contact">
                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                          Request Demo
                          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                      <Button variant="outline" className="border-primary/30 hover:border-primary">
                        View Documentation
                      </Button>
                    </div>
                  </div>

                  {/* Product Visual / Dashboard Preview */}
                  <div className="glass-card p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
                    
                    {/* Mock Dashboard */}
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <h4 className="font-semibold">Live Dashboard Preview</h4>
                        <span className="flex items-center gap-2 text-xs text-accent">
                          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                          Live
                        </span>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {product.stats.map((stat) => (
                          <div key={stat.label} className="text-center p-3 bg-background/50 rounded-lg border border-border/50">
                            <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                            <div className="text-xs text-muted-foreground">{stat.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Mock Chart Area */}
                      <div className="h-48 bg-background/30 rounded-lg border border-border/50 flex items-center justify-center">
                        <div className="text-center">
                          <BarChart3 className="w-12 h-12 text-primary/50 mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground">Interactive Analytics Dashboard</p>
                        </div>
                      </div>

                      {/* Quick Actions */}
                      <div className="mt-6 flex gap-3">
                        <Button size="sm" variant="outline" className="flex-1 border-primary/30">
                          <Monitor className="w-4 h-4 mr-2" />
                          View Threats
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1 border-primary/30">
                          <Zap className="w-4 h-4 mr-2" />
                          Quick Scan
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Integration Partners */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Seamless <span className="gradient-text">Integrations</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our products integrate with your existing security infrastructure and leading cloud providers.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8">
            {["AWS", "Azure", "Google Cloud", "Splunk", "ServiceNow", "Okta", "CrowdStrike", "Palo Alto"].map((partner) => (
              <div 
                key={partner}
                className="px-6 py-3 glass-card text-muted-foreground font-medium hover:text-primary hover:border-primary/30 transition-colors"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 text-center max-w-3xl mx-auto"
          >
            <Globe className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to See Our Products in Action?
            </h2>
            <p className="text-muted-foreground mb-8">
              Schedule a personalized demo with our security experts.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 cyber-glow">
                Schedule Product Demo
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
