import { ArrowRight, Star, Rocket, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedStats from './AnimatedStats';
import AnimateIn from './AnimateIn';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-teal-50/30">
      {/* 3D Background Objects - styled for light background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-[10%] w-36 h-36 bg-primary/10 rounded-3xl animate-float-slow" style={{ transform: 'rotate(15deg)' }} />
        <div className="absolute top-40 right-[15%] w-28 h-28 bg-accent/15 rounded-full animate-float-delayed" />
        <div className="absolute bottom-40 left-[20%] w-44 h-44 bg-primary/10 rounded-3xl animate-float-slow" style={{ transform: 'rotate(-12deg)' }} />
        <div className="absolute top-1/2 right-[8%] w-24 h-24 border-2 border-primary/20 rounded-xl animate-float" style={{ transform: 'rotate(45deg)' }} />
        <div className="absolute bottom-20 right-[25%] w-32 h-32 bg-accent/10 rounded-2xl animate-float-delayed" style={{ transform: 'rotate(-15deg)' }} />
        <div className="absolute top-1/3 right-[35%] w-20 h-20 bg-primary/15 rounded-full animate-float" />
        <div className="absolute top-32 right-[40%] animate-float-slow" style={{ perspective: '800px' }}>
          <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/15 rounded-xl shadow-lg" style={{ transform: 'rotateX(20deg) rotateY(35deg)' }} />
        </div>
        <div className="absolute bottom-36 right-[6%] w-0 h-0 border-l-[45px] border-l-transparent border-r-[45px] border-r-transparent border-b-[75px] border-b-primary/10 animate-float" />
        <div className="absolute top-1/4 right-[45%] w-14 h-14 bg-accent/12 rounded-full animate-float-delayed" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Left - Hero Image */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-60" />
              <img
                src="/images/mainImage.png"
                alt="ASLI Prep - JEE NEET Olympiad Preparation"
                className="relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl h-auto rounded-2xl shadow-2xl object-contain"
              />
            </div>
          </div>

          {/* Right - Content (per DOCX) */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Star className="h-4 w-4 text-primary" />
              <span className="text-secondary font-medium text-sm">Your Right School Partner for JEE | NEET | OLYMPIAD FOUNDATIONS!</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary leading-tight mb-4">
              Elevate Your School's{' '}
              <span className="text-gradient-teal">Academic Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold text-primary mb-6">
              Partner with us for IIT/NEET/Olympiad Success
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-xl mx-auto lg:mx-0">
              Partner with us for comprehensive preparation programs that bridge the gap between school learning and competitive exam success.
            </p>
            {/* Three prominent program cards: Alpha, Beta, Gamma (per DOCX) */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
              <div className="badge-alpha flex items-center gap-2 px-5 py-3 rounded-xl">
                <Star className="h-5 w-5" /> ALPHA
              </div>
              <div className="badge-beta flex items-center gap-2 px-5 py-3 rounded-xl">
                <Rocket className="h-5 w-5" /> BETA
              </div>
              <div className="badge-gamma flex items-center gap-2 px-5 py-3 rounded-xl">
                <Trophy className="h-5 w-5" /> GAMMA
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <a href="/#contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all">
                  Schedule Institutional Partnership Meeting
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="/#programs">
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary font-bold px-8 py-6 text-lg rounded-xl hover:bg-primary/5 transition-all">
                  Explore Programs
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Key Statistics Section (per DOCX): Partner schools, Success rate, Years of experience, Awards won */}
        <AnimateIn animation="fade-up" duration={800} className="mt-12 md:mt-16 max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-lg">
            <AnimatedStats variant="light" preset="hero" />
          </div>
        </AnimateIn>
      </div>

      {/* VIDYA AI Banner */}
      <div className="mt-16 bg-secondary py-6 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <div>
                <p className="text-white font-bold text-lg">Meet our AI Assistant VIDYA</p>
                <p className="text-white/70 text-sm">Your 24/7 learning companion</p>
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

export default Hero;
