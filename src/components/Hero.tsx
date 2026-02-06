import { ArrowRight, Star, Rocket, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen hero-gradient hero-pattern overflow-hidden pt-20">
      {/* Decorative Elements */}
      <div className="absolute top-32 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Star className="h-4 w-4 text-accent" />
              <span className="text-white/90 text-sm font-medium">Your Right School Partner</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
              Elevate Your School's{' '}
              <span className="text-gradient-gold">Academic Excellence</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-accent font-bold mb-4">
              JEE | NEET | OLYMPIAD FOUNDATIONS
            </p>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl">
              Partner with us for comprehensive preparation programs that bridge the gap between school learning and competitive exam success.
            </p>
            
            {/* Program Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="badge-alpha flex items-center gap-2">
                <Star className="h-4 w-4" /> ALPHA
              </span>
              <span className="badge-beta flex items-center gap-2">
                <Rocket className="h-4 w-4" /> BETA
              </span>
              <span className="badge-gamma flex items-center gap-2">
                <Trophy className="h-4 w-4" /> GAMMA
              </span>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button className="btn-primary-hero">
                Schedule Partnership Meeting
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="btn-secondary-hero">
                Explore Programs
              </Button>
            </div>
          </div>

          {/* Right Content - Stats Grid */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative floating-animation">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/20 rounded-3xl blur-2xl transform rotate-3" />
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <StatCard number="500+" label="Partner Schools" icon="🏫" />
                  <StatCard number="95%" label="Success Rate" icon="📈" />
                  <StatCard number="10K+" label="Students Enrolled" icon="🎓" />
                  <StatCard number="50+" label="Awards Won" icon="🏆" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* VIDYA AI Banner */}
      <div className="bg-secondary py-6 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center pulse-glow">
                <span className="text-2xl">🤖</span>
              </div>
              <div>
                <p className="text-white font-bold text-lg">Meet VIDYA</p>
                <p className="text-white/70 text-sm">Our AI Learning Assistant</p>
              </div>
            </div>
            <a 
              href="https://www.aslilearn.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground font-bold px-6 py-2 rounded-lg hover:brightness-110 transition-all"
            >
              Try VIDYA Now →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ number, label, icon }: { number: string; label: string; icon: string }) => (
  <div className="text-center p-5 bg-white/15 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all">
    <div className="text-3xl mb-2">{icon}</div>
    <div className="text-2xl md:text-3xl font-bold text-accent">{number}</div>
    <div className="text-sm text-white/80 font-medium">{label}</div>
  </div>
);

export default Hero;
