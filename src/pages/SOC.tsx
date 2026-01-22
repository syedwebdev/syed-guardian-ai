import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Globe, AlertTriangle, Shield, Activity, Brain, 
  TrendingUp, Download, Filter, ChevronRight,
  AlertCircle, CheckCircle, Clock
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock threat data
const threats = [
  { id: 1, type: "Ransomware", severity: "critical", region: "North America", count: 234, time: "2 min ago" },
  { id: 2, type: "Phishing", severity: "high", region: "Europe", count: 156, time: "5 min ago" },
  { id: 3, type: "DDoS", severity: "medium", region: "Asia Pacific", count: 89, time: "12 min ago" },
  { id: 4, type: "Malware", severity: "high", region: "Middle East", count: 67, time: "18 min ago" },
  { id: 5, type: "SQL Injection", severity: "critical", region: "South America", count: 45, time: "25 min ago" },
  { id: 6, type: "Zero-Day", severity: "critical", region: "Europe", count: 12, time: "32 min ago" },
];

const regionStats = [
  { name: "North America", threats: 1234, blocked: 1198 },
  { name: "Europe", threats: 987, blocked: 954 },
  { name: "Asia Pacific", threats: 876, blocked: 845 },
  { name: "Middle East", threats: 432, blocked: 421 },
  { name: "South America", threats: 321, blocked: 308 },
];

const aiInsights = [
  {
    title: "Ransomware Surge Predicted",
    description: "AI models predict a 23% increase in ransomware attacks targeting healthcare sector over the next 7 days.",
    confidence: 94,
    type: "prediction",
  },
  {
    title: "New Phishing Campaign Detected",
    description: "Sophisticated spear-phishing campaign targeting financial executives identified. 47 organizations at risk.",
    confidence: 89,
    type: "alert",
  },
  {
    title: "Zero-Day Vulnerability Alert",
    description: "Potential zero-day exploit detected in widely-used enterprise software. Patch analysis in progress.",
    confidence: 78,
    type: "critical",
  },
];

const SOC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical": return "text-destructive";
      case "high": return "text-warning";
      case "medium": return "text-yellow-500";
      default: return "text-accent";
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-16 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="absolute inset-0 bg-hero-gradient" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-accent/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-accent font-medium">SOC Operations Active</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Global <span className="gradient-text">Threat Intelligence</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Real-time monitoring and AI-powered insights from our 24/7 Security Operations Centers worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Dashboard */}
      <section className="py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid grid-cols-3 w-full max-w-lg mx-auto mb-8 bg-secondary/50 p-1">
              <TabsTrigger 
                value="overview"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Globe className="w-4 h-4 mr-2 hidden sm:block" />
                Global Overview
              </TabsTrigger>
              <TabsTrigger 
                value="threats"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <AlertTriangle className="w-4 h-4 mr-2 hidden sm:block" />
                Threat Alerts
              </TabsTrigger>
              <TabsTrigger 
                value="insights"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Brain className="w-4 h-4 mr-2 hidden sm:block" />
                AI Insights
              </TabsTrigger>
            </TabsList>

            {/* Global Overview Tab */}
            <TabsContent value="overview">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Stats Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass-card p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">Threats Detected</h3>
                    <AlertTriangle className="w-5 h-5 text-warning" />
                  </div>
                  <div className="text-4xl font-bold gradient-text mb-2">3,847</div>
                  <p className="text-sm text-muted-foreground">Last 24 hours</p>
                  <div className="mt-4 flex items-center gap-2 text-sm">
                    <TrendingUp className="w-4 h-4 text-destructive" />
                    <span className="text-destructive">+12% from yesterday</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="glass-card p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">Threats Blocked</h3>
                    <Shield className="w-5 h-5 text-accent" />
                  </div>
                  <div className="text-4xl font-bold gradient-text mb-2">3,726</div>
                  <p className="text-sm text-muted-foreground">96.9% block rate</p>
                  <div className="mt-4 flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-accent">Above 99.5% target</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="glass-card p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">Avg Response Time</h3>
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-4xl font-bold gradient-text mb-2">28s</div>
                  <p className="text-sm text-muted-foreground">Incident response</p>
                  <div className="mt-4 flex items-center gap-2 text-sm">
                    <Activity className="w-4 h-4 text-primary" />
                    <span className="text-primary">-5s improvement</span>
                  </div>
                </motion.div>

                {/* Global Map Placeholder */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="lg:col-span-2 glass-card p-6"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-semibold text-lg">Global Threat Map</h3>
                    <span className="flex items-center gap-2 text-xs text-accent">
                      <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                      Real-time
                    </span>
                  </div>
                  
                  {/* Simulated Map */}
                  <div className="relative h-64 bg-background/50 rounded-lg border border-border/50 overflow-hidden">
                    <div className="absolute inset-0 cyber-grid opacity-30" />
                    
                    {/* Threat indicators */}
                    <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-destructive animate-ping" />
                    <div className="absolute top-1/3 left-1/2 w-2 h-2 rounded-full bg-warning animate-ping" style={{ animationDelay: "0.5s" }} />
                    <div className="absolute top-1/2 right-1/3 w-3 h-3 rounded-full bg-destructive animate-ping" style={{ animationDelay: "1s" }} />
                    <div className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-2 h-2 rounded-full bg-warning animate-ping" style={{ animationDelay: "1.5s" }} />
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Globe className="w-24 h-24 text-primary/20" />
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-4 text-xs">
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-destructive" />
                      Critical
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-warning" />
                      High
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-yellow-500" />
                      Medium
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-accent" />
                      Blocked
                    </span>
                  </div>
                </motion.div>

                {/* Region Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="glass-card p-6"
                >
                  <h3 className="font-semibold text-lg mb-4">By Region</h3>
                  <div className="space-y-4">
                    {regionStats.map((region) => (
                      <div key={region.name} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">{region.name}</span>
                          <span className="font-medium">{region.threats}</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                            style={{ width: `${(region.blocked / region.threats) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </TabsContent>

            {/* Threat Alerts Tab */}
            <TabsContent value="threats">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card overflow-hidden"
              >
                <div className="p-6 border-b border-border/50 flex items-center justify-between">
                  <h3 className="font-semibold text-lg">Recent Threat Alerts</h3>
                  <Button size="sm" variant="outline" className="border-primary/30">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>
                
                <div className="divide-y divide-border/50">
                  {threats.map((threat) => (
                    <div 
                      key={threat.id}
                      className="p-4 hover:bg-secondary/30 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`w-3 h-3 rounded-full ${
                            threat.severity === "critical" ? "bg-destructive" :
                            threat.severity === "high" ? "bg-warning" : "bg-yellow-500"
                          }`} />
                          <div>
                            <div className="font-medium">{threat.type}</div>
                            <div className="text-sm text-muted-foreground">{threat.region}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`font-semibold ${getSeverityColor(threat.severity)}`}>
                            {threat.count} incidents
                          </div>
                          <div className="text-xs text-muted-foreground">{threat.time}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-secondary/20">
                  <Button variant="outline" className="w-full border-primary/30">
                    View All Alerts
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            </TabsContent>

            {/* AI Insights Tab */}
            <TabsContent value="insights">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* AI Predictions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <Brain className="w-5 h-5 text-primary" />
                    AI-Powered Insights
                  </h3>
                  
                  {aiInsights.map((insight, index) => (
                    <div key={index} className="glass-card p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className={`px-2 py-1 rounded text-xs font-medium ${
                          insight.type === "critical" ? "bg-destructive/20 text-destructive" :
                          insight.type === "alert" ? "bg-warning/20 text-warning" :
                          "bg-primary/20 text-primary"
                        }`}>
                          {insight.type.toUpperCase()}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {insight.confidence}% confidence
                        </div>
                      </div>
                      <h4 className="font-semibold mb-2">{insight.title}</h4>
                      <p className="text-sm text-muted-foreground">{insight.description}</p>
                    </div>
                  ))}
                </motion.div>

                {/* Download Report */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="glass-card p-8 flex flex-col items-center justify-center text-center"
                >
                  <Download className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Download Threat Report</h3>
                  <p className="text-muted-foreground mb-6">
                    Get a comprehensive PDF report of current threat landscape and AI predictions.
                  </p>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Download className="w-4 h-4 mr-2" />
                    Download Report (PDF)
                  </Button>
                </motion.div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Request Customized Threat Analysis
            </h2>
            <p className="text-muted-foreground mb-8">
              Get a tailored security assessment for your organization's specific industry and threat profile.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 cyber-glow">
                Request Analysis
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SOC;
