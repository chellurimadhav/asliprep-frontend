import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen hero-gradient hero-pattern overflow-hidden pt-20">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-4">
              ASLI <span className="text-gradient">PREP</span> FOUNDATION
            </h1>
            <p className="text-xl md:text-2xl text-accent font-semibold italic mb-6">
              ...Shaping Tomorrow's Leaders
            </p>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl">
              Strong academic foundations for students preparing for JEE, NEET, and Olympiads with expert guidance and proven methodology.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="btn-primary-hero text-lg">
                Enroll Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="btn-secondary-hero text-lg">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative floating-animation">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/20 rounded-3xl blur-2xl transform rotate-3" />
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  <StatCard number="10K+" label="Students Enrolled" />
                  <StatCard number="500+" label="Expert Mentors" />
                  <StatCard number="95%" label="Success Rate" />
                  <StatCard number="50+" label="Partner Schools" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Exam Badges Section */}
      <div className="bg-background py-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            <ExamBadge name="JEE" color="text-jee" />
            <Separator />
            <ExamBadge name="NEET" color="text-neet" />
            <Separator />
            <ExamBadge name="KCET" color="text-kcet" />
            <Separator />
            <ExamBadge name="EAPCET" color="text-eapcet" />
            <span className="exam-badge text-foreground ml-2">FOUNDATIONS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ number, label }: { number: string; label: string }) => (
  <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
    <div className="text-2xl md:text-3xl font-bold text-accent">{number}</div>
    <div className="text-sm text-primary-foreground/80">{label}</div>
  </div>
);

const ExamBadge = ({ name, color }: { name: string; color: string }) => (
  <span className={`exam-badge ${color}`}>{name}</span>
);

const Separator = () => (
  <span className="text-muted-foreground text-2xl font-light">|</span>
);

export default Hero;
