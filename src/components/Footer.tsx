import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import logo from '@/assets/asli-prep-logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={logo} alt="Asli Prep Foundation" className="h-16 w-auto rounded-lg mb-4" />
            <p className="text-primary-foreground/70 mb-6">
              Shaping Tomorrow's Leaders with quality education and expert mentorship.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={Facebook} />
              <SocialIcon icon={Twitter} />
              <SocialIcon icon={Instagram} />
              <SocialIcon icon={Linkedin} />
              <SocialIcon icon={Youtube} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-3">
              <FooterLink href="#">Home</FooterLink>
              <FooterLink href="#courses">Courses</FooterLink>
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-accent">Courses</h4>
            <ul className="space-y-3">
              <FooterLink href="#">JEE Preparation</FooterLink>
              <FooterLink href="#">NEET Preparation</FooterLink>
              <FooterLink href="#">KCET Preparation</FooterLink>
              <FooterLink href="#">EAPCET Preparation</FooterLink>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-accent">Support</h4>
            <ul className="space-y-3">
              <FooterLink href="#">Help Center</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
              <FooterLink href="#">FAQs</FooterLink>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Asli Prep Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon: Icon }: { icon: React.ElementType }) => (
  <a 
    href="#" 
    className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
  >
    <Icon className="h-5 w-5" />
  </a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a 
      href={href} 
      className="text-primary-foreground/70 hover:text-accent transition-colors duration-200"
    >
      {children}
    </a>
  </li>
);

export default Footer;
