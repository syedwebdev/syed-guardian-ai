import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2, Landmark, ShoppingBag, Hospital, Banknote, Factory, ArrowRight, TrendingUp, ShieldCheck, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const industries = ["All", "Finance", "Government", "Healthcare", "Retail", "Manufacturing", "Energy"];

const caseStudies = [
  {
    industry: "Finance",
    icon: Banknote,
    client: "Global Tier-1 Bank",
    title: "Stopping a $40M Fraud Ring with AI Threat Intelligence",
    summary: "Deployed AI-driven SOC across 32 countries, reducing mean-time-to-detect from 4 hours to 90 seconds.",
    metrics: [
      { label: "MTTD Reduction", value: "99.4%" },
      { label: "Fraud Prevented", value: "$40M" },
      { label: "Endpoints", value: "120K+" },
    ],
    tags: ["Managed SOC", "AI Insights", "Fraud Detection"],
  },
  {
    industry: "Government",
    icon: Landmark,
    client: "National Defense Agency",
    title: "Zero-Trust Architecture for Classified Networks",
    summary: "Architected a sovereign zero-trust framework securing 8 ministries with hardened IAM and continuous monitoring.",
    metrics: [
      { label: "Compliance", value: "100%" },
      { label: "Incidents", value: "-87%" },
      { label: "Users Secured", value: "65K" },
    ],
    tags: ["Zero Trust", "IAM", "Compliance"],
  },
  {
    industry: "Healthcare",
    icon: Hospital,
    client: "Multinational Hospital Network",
    title: "HIPAA-Grade Protection Across 240 Facilities",
    summary: "Unified endpoint and cloud security for connected medical devices, achieving full HIPAA and GDPR alignment.",
    metrics: [
      { label: "Devices", value: "85K" },
      { label: "Uptime", value: "99.99%" },
      { label: "Audit Score", value: "A+" },
    ],
    tags: ["HIPAA", "Cloud Security", "IoT/Medical"],
  },
  {
    industry: "Retail",
    icon: ShoppingBag,
    client: "Global E-commerce Leader",
    title: "Blocking 2.1B Bot Attacks During Peak Season",
    summary: "Deployed adaptive WAF and behavioral analytics, neutralizing credential-stuffing and bot traffic at the edge.",
    metrics: [
      { label: "Attacks Blocked", value: "2.1B" },
      { label: "Latency Added", value: "<5ms" },
      { label: "Revenue Saved", value: "$220M" },
    ],
    tags: ["AppSec", "WAF", "Bot Defense"],
  },
  {
    industry: "Manufacturing",
    icon: Factory,
    client: "Fortune 100 Manufacturer",
    title: "OT/IT Convergence Without Compromise",
    summary: "Segmented 14 global plants with industrial IDS and continuous threat hunting against ransomware operators.",
    metrics: [
      { label: "Plants Secured", value: "14" },
      { label: "Downtime Avoided", value: "$60M" },
      { label: "Ransomware Blocked", value: "11" },
    ],
    tags: ["OT Security", "Incident Response", "Threat Hunting"],
  },
  {
    industry: "Energy",
    icon: Building2,
    client: "Transnational Energy Group",
    title: "Securing Critical Infrastructure at Continental Scale",
    summary: "Built a 24/7 cyber-fusion center fusing OT telemetry, geo-intel, and AI to defend critical national assets.",
    metrics: [
      { label: "Sites", value: "78" },
      { label: "Analyst Productivity", value: "+340%" },
      { label: "False Positives", value: "-92%" },
    ],
    tags: ["Critical Infra", "Fusion Center", "AI SOC"],
  },
];

const outcomes = [
  { icon: ShieldCheck, value: "500+", label: "Enterprise Clients Secured" },
  { icon: TrendingUp, value: "98%", label: "Client Retention" },
  { icon: Clock, value: "<90s", label: "Average MTTD" },
];

const CaseStudies = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 border border-primary/20 rounded-full mb-6">
              Proven Results
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Client <span className="gradient-text">Case Studies</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              How the world's most demanding organizations secure their digital frontiers with SYED (CSS).
            </p>
          </motion.div>

          {/* Outcomes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            {outcomes.map((o, i) => (
              <motion.div
                key={o.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <o.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold gradient-text mb-1">{o.value}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{o.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry filter chips (visual only) */}
      <section className="pb-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {industries.map((ind, i) => (
              <button
                key={ind}
                className={`px-4 py-2 text-xs font-medium tracking-wide rounded-full border transition-all ${
                  i === 0
                    ? "bg-primary text-primary-foreground border-primary cyber-glow"
                    : "border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40"
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((cs, i) => (
              <motion.article
                key={cs.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card p-8 group hover:border-primary/40 transition-all"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <cs.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-primary">{cs.industry}</div>
                      <div className="text-sm font-semibold">{cs.client}</div>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">Case #{String(i + 1).padStart(3, "0")}</span>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {cs.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{cs.summary}</p>

                <div className="grid grid-cols-3 gap-3 mb-6 pt-6 border-t border-border/50">
                  {cs.metrics.map((m) => (
                    <div key={m.label} className="text-center">
                      <div className="text-lg font-bold text-primary">{m.value}</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {cs.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground bg-secondary/50 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <button className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all">
                  Read full case study <ArrowRight className="w-4 h-4" />
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="glass-card p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 cyber-grid opacity-10" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to become the <span className="gradient-text">next success story</span>?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Talk to our enterprise security architects about a tailored assessment for your organization.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 cyber-glow">
                    Request a Consultation
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="border-primary/30">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;