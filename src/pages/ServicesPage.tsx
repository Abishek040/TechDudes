import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Globe, Cpu, Wrench, Check, ArrowRight, ShoppingCart, Briefcase, Layout, Wifi, CircuitBoard, FileText, Bug, BookOpen } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const webServices = [
  { icon: Briefcase, title: "Business Websites", desc: "Professional sites that build credibility and drive customers." },
  { icon: ShoppingCart, title: "E-Commerce", desc: "Online stores with payment gateways and inventory management." },
  { icon: Layout, title: "Portfolio Sites", desc: "Stunning personal portfolios to showcase your work." },
];

const iotServices = [
  { icon: CircuitBoard, title: "Arduino Projects", desc: "Custom Arduino-based solutions for college and hobby projects." },
  { icon: Wifi, title: "ESP32 Solutions", desc: "WiFi-enabled IoT devices with cloud connectivity." },
  { icon: FileText, title: "Final Year Projects", desc: "Complete IoT projects with documentation and presentations." },
];

const supportServices = [
  { icon: Wrench, title: "Maintenance", desc: "Regular updates, backups, and performance optimization." },
  { icon: Bug, title: "Debugging", desc: "Quick identification and resolution of technical issues." },
  { icon: BookOpen, title: "Documentation", desc: "Technical docs, user guides, and project reports." },
];
const ServicesPage = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="section-padding gradient-bg">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tech solutions tailored for students and businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Web Design */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading badge="Web Design" title="Beautiful Websites That Convert" subtitle="From landing pages to full-scale web applications." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {webServices.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="glass-card">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <s.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IoT */}
      <section className="section-padding gradient-bg">
        <div className="container mx-auto px-4">
          <SectionHeading badge="IoT Projects" title="Smart IoT Solutions" subtitle="Hardware meets software for innovative college projects." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {iotServices.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="glass-card">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-4">
                  <s.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Support */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading badge="Tech Support" title="Reliable Technical Support" subtitle="We keep your projects running smoothly." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportServices.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="glass-card">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <s.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
