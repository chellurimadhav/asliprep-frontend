import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle, Building2, Palette, BarChart3, Users, FileCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const benefits = [
  { icon: Palette, title: 'White-Label Solutions', desc: 'Brand our content as your own. Customizable study materials that integrate seamlessly with your institution.' },
  { icon: Building2, title: 'Seamless Curriculum Integration', desc: 'Our programs align with CBSE and State boards. No disruption to your existing curriculum.' },
  { icon: BarChart3, title: 'Performance Analytics', desc: 'Real-time tracking, progress reports, and data-driven insights for students, parents, and teachers.' },
  { icon: Users, title: 'Teacher Training', desc: 'Professional development modules to upskill your educators and maximize program effectiveness.' },
  { icon: FileCheck, title: 'Marketing Support', desc: 'We help you promote your enhanced academic offerings to attract and retain students.' },
];

const process = [
  { step: 1, title: 'Initial Consultation', desc: 'Discuss your institution\'s goals and student demographics' },
  { step: 2, title: 'Program Selection', desc: 'Choose Alpha, Beta, Gamma or a combination based on your needs' },
  { step: 3, title: 'Customization', desc: 'Tailor content, branding, and delivery model (online/offline/hybrid)' },
  { step: 4, title: 'Implementation', desc: 'Teacher training, LMS setup, and go-live support' },
  { step: 5, title: 'Ongoing Support', desc: 'Dedicated relationship manager and continuous improvement' },
];

export default function ForSchools() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-24 pb-16 hero-gradient hero-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent/20 text-accent font-bold px-4 py-2 rounded-full text-sm mb-6">
              B2B PARTNERSHIPS
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              For Schools & <span className="text-gradient-gold">Institutions</span>
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Elevate your institution's academic offerings with our proven three-tier learning system. Partner with Asli Prep Foundation for white-label solutions that integrate seamlessly.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="btn-primary-hero">
                <a href="/#contact">Schedule Partnership Meeting</a>
              </Button>
              <Button variant="outline" className="btn-secondary-hero" asChild>
                <a href="#benefits">View Benefits</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20 section-teal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary/10 text-primary font-bold px-4 py-2 rounded-full text-sm mb-4">
              WHY PARTNER WITH US
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">
              Partnership <span className="text-gradient-teal">Benefits</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <b.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">{b.title}</h3>
                <p className="text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 section-navy relative overflow-hidden">
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block bg-accent text-accent-foreground font-bold px-4 py-2 rounded-full text-sm mb-4">
              IMPLEMENTATION
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              How It <span className="text-gradient-gold">Works</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {process.map((p, i) => (
              <div key={i} className="relative">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 h-full">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-secondary font-bold mb-4">
                    {p.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-white/70 text-sm">{p.desc}</p>
                </div>
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-accent/50 z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 border border-primary/20">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
              Ready to elevate your institution?
            </h2>
            <p className="text-muted-foreground mb-8">
              Contact us for institutional pricing and a personalized demo.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-primary text-white font-bold px-8 py-4">
                <a href="/#contact">Contact Us</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://wa.me/919346832477" target="_blank" rel="noopener noreferrer">
                  WhatsApp: +91 9346832477
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
