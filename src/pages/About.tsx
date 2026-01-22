import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Users, Globe, Award, Linkedin, Mail } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const leaders = [
  { name: "Ahmed Syed", role: "CEO & Founder", image: "AS" },
  { name: "Sarah Chen", role: "CTO", image: "SC" },
  { name: "Michael Roberts", role: "CISO", image: "MR" },
  { name: "Elena Vasquez", role: "VP Operations", image: "EV" },
];

const About = () => {
  return (
    <Layout>
      <section className="pt-16 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About <span className="gradient-text">SYED (CSS)</span></h1>
            <p className="text-lg text-muted-foreground">Global cybersecurity leadership protecting enterprises worldwide with AI-powered solutions.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {leaders.map((leader, i) => (
              <motion.div key={leader.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-card p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xl font-bold mx-auto mb-4">{leader.image}</div>
                <h3 className="font-semibold">{leader.name}</h3>
                <p className="text-sm text-muted-foreground">{leader.role}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[{ icon: <Globe className="w-8 h-8" />, title: "Global Presence", desc: "SOC hubs across 5 continents" },
              { icon: <Users className="w-8 h-8" />, title: "500+ Experts", desc: "Certified security professionals" },
              { icon: <Award className="w-8 h-8" />, title: "ISO 27001", desc: "Fully certified operations" }].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-card p-6 text-center">
                <div className="text-primary mb-4 flex justify-center">{item.icon}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
