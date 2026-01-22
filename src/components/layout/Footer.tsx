import { Link } from "react-router-dom";
import { Shield, Mail, Phone, MapPin, Linkedin, Twitter, Youtube, ExternalLink } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Managed Security", path: "/services#mss" },
    { name: "Application Security", path: "/services#appsec" },
    { name: "IAM & Access", path: "/services#iam" },
    { name: "Threat Intelligence", path: "/services#threat" },
    { name: "Incident Response", path: "/services#ir" },
  ],
  company: [
    { name: "About Us", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Partners", path: "/about#partners" },
    { name: "Press", path: "/about#press" },
  ],
  resources: [
    { name: "SOC Dashboard", path: "/soc" },
    { name: "Threat Reports", path: "/soc#insights" },
    { name: "Documentation", path: "/docs" },
    { name: "Blog", path: "/blog" },
    { name: "Webinars", path: "/resources" },
  ],
  legal: [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Cookie Policy", path: "/cookies" },
    { name: "Security", path: "/security" },
  ],
};

const certifications = [
  "ISO 27001",
  "SOC 2 Type II",
  "GDPR",
  "HIPAA",
  "PCI DSS",
];

const Footer = () => {
  return (
    <footer className="relative bg-card border-t border-border/50">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <Shield className="w-10 h-10 text-primary" />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight">
                  SYED <span className="text-primary">(CSS)</span>
                </span>
                <span className="text-[10px] text-muted-foreground tracking-widest uppercase">
                  Cyber Security Solutions
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">
              Enterprise-grade cybersecurity solutions protecting global organizations 
              with AI-powered threat intelligence and 24/7 SOC monitoring.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="mailto:contact@syedcss.com" 
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                contact@syedcss.com
              </a>
              <a 
                href="tel:+1-800-CYBER-SEC" 
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +1-800-CYBER-SEC
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Global HQ: New York, USA
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a 
                href="#" 
                className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications Bar */}
        <div className="py-6 border-t border-border/50">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            <span className="text-xs text-muted-foreground uppercase tracking-wider">
              Certifications:
            </span>
            {certifications.map((cert) => (
              <span 
                key={cert}
                className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full border border-primary/20"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SYED (CSS) MNC. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>SOC Operations Active — 24/7 Global Monitoring</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
