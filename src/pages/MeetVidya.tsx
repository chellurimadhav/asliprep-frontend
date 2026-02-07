import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Bot, MessageCircle, Brain, Zap, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  { icon: Brain, title: '24/7 Learning Assistant', desc: 'Get instant answers to doubts anytime, anywhere' },
  { icon: BookOpen, title: 'Curriculum-Aligned', desc: 'Covers JEE, NEET, Olympiad, and board syllabus' },
  { icon: Zap, title: 'Instant Explanations', desc: 'Step-by-step solutions for complex problems' },
  { icon: MessageCircle, title: 'Interactive Chat', desc: 'Natural conversation for a personalized learning experience' },
];

export default function MeetVidya() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero – same colours as main page: light bg, dark blue + green text for readability */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-slate-50 via-white to-teal-50/30 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-primary/10 text-primary font-bold px-4 py-2 rounded-full text-sm mb-6">
                MEET VIDYA
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-secondary mb-6">
                Meet our AI Assistant <span className="text-gradient-teal">VIDYA</span>
              </h1>
              <p className="text-xl text-foreground/90 mb-6 leading-relaxed">
                Our AI Assistant helps students with features and capabilities for JEE, NEET, and Olympiads. Demo or trial access at www.aslilearn.ai
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-xl text-lg">
                  <a href="https://www.aslilearn.ai" target="_blank" rel="noopener noreferrer">
                    Try VIDYA Now →
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                <div className="relative w-64 h-64 md:w-80 md:h-80 bg-primary/10 backdrop-blur-md rounded-3xl border border-primary/20 flex items-center justify-center">
                  <Bot className="w-32 h-32 md:w-40 md:h-40 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 section-teal">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary/10 text-primary font-bold px-4 py-2 rounded-full text-sm mb-4">
              FEATURES & CAPABILITIES
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">
              How VIDYA <span className="text-gradient-teal">Helps Students</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <f.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">{f.title}</h3>
                <p className="text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 section-navy">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Demo or Trial Access
            </h2>
            <p className="text-white/70 mb-8">
              Visit www.aslilearn.ai to try VIDYA for free.
            </p>
            <Button asChild className="bg-accent text-accent-foreground font-bold px-8 py-4 text-lg">
              <a href="https://www.aslilearn.ai" target="_blank" rel="noopener noreferrer">
                Try VIDYA Now →
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
