import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold gradient-text mb-4">TechDudes</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Building modern websites and smart IoT projects for students and businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Home", "Services", "Projects", "About", "Team", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>Web Design</span>
              <span>IoT Projects</span>
              <span>Tech Support</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="mailto:info@techdudes.in" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={14} /> info@techdudes.in
              </a>
              <a href="tel:+919626787646" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone size={14} /> +91 96267 87646
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={14} /> Tamil Nadu, Rajapalayam
              </span>
            </div>
            <div className="flex gap-3 mt-4">
  {[
    { type: "github", link: "https://github.com/Abishek040" },
    { type: "linkedin", link: "https://www.linkedin.com/company/nexatechlabs-in/" },
    { type: "x", link: "https://x.com/Abishek90335462" },
    { type: "instagram", link: "https://www.instagram.com/nexatechlabs.in/" },
  ].map((item, i) => (
    <a
      key={i}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/30 hover:scale-110 transition-all"
    >
      {item.type === "github" && <Github size={16} />}
      {item.type === "linkedin" && <Linkedin size={16} />}
      {item.type === "instagram" && <Instagram size={16} />}

      {/* ✅ REAL X LOGO */}
      {item.type === "x" && (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M18.244 2H21l-6.56 7.5L22.5 22h-6.9l-5.4-7.1L4.8 22H2l7-8-6.7-12h7l5 6.6L18.244 2zM17 20h1.7L7 4H5.2L17 20z"/>
        </svg>
      )}
    </a>
  ))}
</div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} TechDudes. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
