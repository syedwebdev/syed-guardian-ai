import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Shield, AlertTriangle, Users, Globe } from "lucide-react";

interface MetricProps {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
}

const AnimatedCounter = ({ value, suffix = "", delay = 0 }: { value: number; suffix?: string; delay?: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        current += stepValue;
        if (current >= value) {
          setCount(value);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, value, delay]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold gradient-text">
      {count.toLocaleString()}{suffix}
    </div>
  );
};

const MetricCard = ({ icon, value, suffix, label, delay }: MetricProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay }}
      viewport={{ once: true }}
      className="glass-card p-8 text-center group hover:border-primary/30 transition-colors"
    >
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <AnimatedCounter value={value} suffix={suffix} delay={(delay || 0) * 1000} />
      <p className="text-muted-foreground mt-2">{label}</p>
    </motion.div>
  );
};

const MetricsSection = () => {
  const metrics = [
    {
      icon: <Shield className="w-7 h-7" />,
      value: 99.9,
      suffix: "%",
      label: "Threat Detection Accuracy",
    },
    {
      icon: <AlertTriangle className="w-7 h-7" />,
      value: 10000,
      suffix: "+",
      label: "Threats Neutralized Monthly",
    },
    {
      icon: <Users className="w-7 h-7" />,
      value: 50,
      suffix: "+",
      label: "Global Enterprise Clients",
    },
    {
      icon: <Globe className="w-7 h-7" />,
      value: 24,
      suffix: "/7",
      label: "SOC Operations - Global",
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Security by the <span className="gradient-text">Numbers</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our global security operations deliver measurable protection for enterprises worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <MetricCard
              key={metric.label}
              {...metric}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
