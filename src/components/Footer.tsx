import { Mail, Phone, MapPin, ExternalLink, Facebook, Instagram, Linkedin } from 'lucide-react';
import AnimateIn from './AnimateIn';

const SOCIAL_LINKS = [
  { href: 'https://www.instagram.com/asliprep?igsh=YXk2ZzNqdG05ZzBr', label: 'Instagram', Icon: Instagram },
  { href: 'https://www.facebook.com/share/1CGbSL2NXE/', label: 'Facebook', Icon: Facebook },
  { href: 'https://www.linkedin.com/company/asli-prep-foundation/', label: 'LinkedIn', Icon: Linkedin },
];

const Footer = () => {
  return (
    <footer className="section-navy pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <AnimateIn animation="fade-up" delay={0} duration={500}>
          <div>
            <p className="text-white/70 mb-4">
              Your Right School Partner for JEE | NEET | OLYMPIAD FOUNDATIONS!
            </p>
            <a 
              href="https://www.aslilearn.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium"
            >
              Meet VIDYA AI <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          </AnimateIn>

          {/* Programs */}
          <AnimateIn animation="fade-up" delay={80} duration={500}>
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Our Programs</h4>
            <ul className="space-y-3">
              <li>
                <a href="/#programs" className="text-white/70 hover:text-accent transition-colors duration-300">
                  Alpha – Foundation Program
                </a>
              </li>
              <li>
                <a href="/#programs" className="text-white/70 hover:text-accent transition-colors duration-300">
                  Beta – IIT/NEET Preparation
                </a>
              </li>
              <li>
                <a href="/#programs" className="text-white/70 hover:text-accent transition-colors duration-300">
                  Gamma – Olympiad Excellence
                </a>
              </li>
              <li>
                <a href="/for-schools" className="text-white/70 hover:text-accent transition-colors duration-300">
                  For Schools (B2B)
                </a>
              </li>
            </ul>
          </div>
          </AnimateIn>

          {/* Quick Links */}
          <AnimateIn animation="fade-up" delay={160} duration={500}>
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-white/70 hover:text-accent transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="/#testimonials" className="text-white/70 hover:text-accent transition-colors duration-300">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="/resources" className="text-white/70 hover:text-accent transition-colors duration-300">
                  Resources
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-white/70 hover:text-accent transition-colors duration-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          </AnimateIn>

          {/* Follow Us & Contact */}
          <AnimateIn animation="fade-up" delay={240} duration={500}>
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex flex-wrap gap-3 mb-6">
              {SOCIAL_LINKS.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <h4 className="text-white font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  Plot No. 47, Rd No: 4A, Golden Tulip Estates, Kondapur, Hyderabad - 500084
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="tel:+919346832477" className="text-white/70 hover:text-accent">
                  +91 9346832477
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="mailto:info@asliprep.com" className="text-white/70 hover:text-accent">
                  info@asliprep.com
                </a>
              </li>
            </ul>
          </div>
          </AnimateIn>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Asli Prep Foundation. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/50 hover:text-accent text-sm">Privacy Policy</a>
              <a href="#" className="text-white/50 hover:text-accent text-sm">Terms of Service</a>
              <a href="https://www.asliprep.com" className="text-white/50 hover:text-accent text-sm">www.asliprep.com</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
