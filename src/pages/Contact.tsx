import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, MessageSquare, Shield } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <Layout>
      <section className="pt-16 pb-24 relative">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in <span className="gradient-text">Touch</span></h1>
            <p className="text-lg text-muted-foreground">Ready to secure your organization? Contact our security experts today.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input placeholder="Your Name" className="bg-background/50 border-border/50" />
                  <Input placeholder="Email Address" type="email" className="bg-background/50 border-border/50" />
                </div>
                <Input placeholder="Organization" className="bg-background/50 border-border/50" />
                <Textarea placeholder="How can we help?" className="bg-background/50 border-border/50 min-h-[120px]" />
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 cyber-glow">Request Assessment</Button>
              </form>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <div className="glass-card p-6">
                <h3 className="font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-muted-foreground"><Mail className="w-5 h-5 text-primary" /> contact@syedcss.com</div>
                  <div className="flex items-center gap-3 text-muted-foreground"><Phone className="w-5 h-5 text-primary" /> +1-800-CYBER-SEC</div>
                  <div className="flex items-center gap-3 text-muted-foreground"><MapPin className="w-5 h-5 text-primary" /> New York, USA (Global HQ)</div>
                </div>
              </div>
              <div className="glass-card p-6 border-destructive/30">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-destructive" />
                  <h3 className="font-semibold">Emergency Incident?</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">24/7 incident response team available for critical security events.</p>
                <Button variant="destructive" className="w-full">Report Security Incident</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
