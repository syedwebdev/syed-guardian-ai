import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MapPin,
  Briefcase,
  Clock,
  Search,
  Heart,
  GraduationCap,
  Globe2,
  Rocket,
  Users,
  Award,
  ArrowRight,
  Shield,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const departments = ["All", "Security Operations", "Engineering", "AI & Research", "Sales", "Corporate"];

const jobs = [
  {
    title: "Senior SOC Analyst (Tier 3)",
    dept: "Security Operations",
    location: "Dubai, UAE",
    type: "Full-time",
    level: "Senior",
  },
  {
    title: "Threat Intelligence Researcher",
    dept: "AI & Research",
    location: "London, UK",
    type: "Full-time",
    level: "Mid–Senior",
  },
  {
    title: "Cloud Security Architect (AWS/Azure)",
    dept: "Engineering",
    location: "Remote – EMEA",
    type: "Full-time",
    level: "Senior",
  },
  {
    title: "Offensive Security Engineer (Red Team)",
    dept: "Engineering",
    location: "Singapore",
    type: "Full-time",
    level: "Senior",
  },
  {
    title: "ML Engineer – Detection Models",
    dept: "AI & Research",
    location: "New York, USA",
    type: "Full-time",
    level: "Mid",
  },
  {
    title: "Enterprise Account Executive",
    dept: "Sales",
    location: "Riyadh, KSA",
    type: "Full-time",
    level: "Senior",
  },
  {
    title: "Incident Response Consultant",
    dept: "Security Operations",
    location: "Remote – Global",
    type: "Full-time",
    level: "Mid–Senior",
  },
  {
    title: "People Operations Partner",
    dept: "Corporate",
    location: "New York, USA",
    type: "Full-time",
    level: "Mid",
  },
];

const benefits = [
  { icon: Heart, title: "Health & Wellness", desc: "Premium global medical, dental, mental-health and family care." },
  { icon: GraduationCap, title: "Learning Budget", desc: "$5,000/yr for certifications (OSCP, CISSP, SANS) and conferences." },
  { icon: Globe2, title: "Work from Anywhere", desc: "Remote-first culture with hubs in NYC, London, Dubai, Singapore." },
  { icon: Rocket, title: "Equity & Bonus", desc: "Meaningful equity grants and performance bonuses for every role." },
  { icon: Users, title: "Elite Teams", desc: "Work alongside former NSA, GCHQ, and Fortune 100 security leaders." },
  { icon: Award, title: "Mission Driven", desc: "Defend the digital world for governments and global enterprises." },
];

const stages = [
  { n: "01", title: "Apply", desc: "Submit your profile via our secure portal." },
  { n: "02", title: "Recruiter Call", desc: "30-min chat about your goals and the role." },
  { n: "03", title: "Technical Deep-Dive", desc: "Role-specific challenge with our experts." },
  { n: "04", title: "Leadership Panel", desc: "Meet the team and leadership you'll work with." },
  { n: "05", title: "Offer", desc: "Welcome to the mission." },
];

const Careers = () => {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("All");

  const filtered = jobs.filter(
    (j) =>
      (active === "All" || j.dept === active) &&
      (query === "" || j.title.toLowerCase().includes(query.toLowerCase()) || j.location.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 border border-primary/20 rounded-full mb-6">
              We're Hiring Globally
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Defend the <span className="gradient-text">Digital Frontier</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Join 500+ engineers, analysts and researchers protecting the world's most critical organizations.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-primary" /> 24 countries</div>
              <div className="flex items-center gap-2"><Users className="w-4 h-4 text-primary" /> 500+ teammates</div>
              <div className="flex items-center gap-2"><Award className="w-4 h-4 text-primary" /> #1 Best Place to Work in Cyber</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why <span className="gradient-text">SYED (CSS)</span></h2>
            <p className="text-muted-foreground">Built for elite operators who want their work to matter.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card p-6 hover:border-primary/40 transition-all"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <b.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Open <span className="gradient-text">Positions</span></h2>
              <p className="text-muted-foreground">{filtered.length} active roles across our global teams.</p>
            </div>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search roles or cities…"
                className="pl-10 bg-secondary/40 border-border/60"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {departments.map((d) => (
              <button
                key={d}
                onClick={() => setActive(d)}
                className={`px-4 py-2 text-xs font-medium tracking-wide rounded-full border transition-all ${
                  active === d
                    ? "bg-primary text-primary-foreground border-primary cyber-glow"
                    : "border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40"
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {filtered.map((job, i) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="glass-card p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:border-primary/40 transition-all"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] uppercase tracking-widest text-primary">{job.dept}</span>
                    <span className="text-[10px] text-muted-foreground">• {job.level}</span>
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {job.location}</span>
                    <span className="flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5" /> {job.type}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> Posted recently</span>
                  </div>
                </div>
                <Button variant="outline" className="border-primary/30 hover:bg-primary/10 hover:border-primary">
                  Apply <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </motion.div>
            ))}
            {filtered.length === 0 && (
              <div className="glass-card p-10 text-center text-muted-foreground">
                No roles match your search. Try a different filter or send us your CV.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="gradient-text">Hiring Process</span></h2>
            <p className="text-muted-foreground">Transparent, fast, and respectful of your time — typically 2–3 weeks end-to-end.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {stages.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card p-5 relative"
              >
                <div className="text-3xl font-bold gradient-text mb-2">{s.n}</div>
                <h3 className="font-semibold mb-1">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
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
                Don't see your role? <span className="gradient-text">We still want to hear from you.</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                We're always looking for exceptional talent in offensive security, AI research, and SOC engineering.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 cyber-glow">
                    Send Your CV
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="border-primary/30">
                    Meet the Team
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

export default Careers;