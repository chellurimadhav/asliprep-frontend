import { Star, Rocket, Trophy, BookOpen, Target } from 'lucide-react';
import ProgramComparison from './ProgramComparison';
import AnimateIn from './AnimateIn';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const programs = [
  {
    name: 'ALPHA',
    tagline: 'Strong Foundation, Board-Aligned',
    target: 'Students building fundamental concepts',
    grades: 'Grades V to X',
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology'],
    focus: 'Strong foundational focus according to boards',
    alignment: 'CBSE/State board curriculum',
    color: 'from-primary to-teal-dark',
    bgClass: 'card-teal',
    icon: Star,
  },
  {
    name: 'BETA',
    tagline: 'Advanced IIT/NEET Preparation',
    target: 'Students ready for competitive exam prep',
    grades: 'Grades VIII to X',
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Logical Reasoning'],
    focus: 'Higher-order thinking and problem-solving',
    alignment: 'IIT-JEE & NEET syllabus',
    color: 'from-secondary to-navy-deep',
    bgClass: 'card-navy',
    icon: Rocket,
  },
  {
    name: 'GAMMA',
    tagline: 'Olympiad-Level Excellence',
    target: 'Top achievers aiming for national/international Olympiads',
    grades: 'Grades VI to X',
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology'],
    focus: 'Advanced problem-solving and critical thinking',
    alignment: 'IMO, NSO, NCO, IEO',
    color: 'from-accent to-gold-dark',
    bgClass: 'card-gold',
    icon: Trophy,
  },
];

const Programs = () => {
  return (
    <section id="programs" className="py-20 section-teal">
      <div className="container mx-auto px-4">
        <AnimateIn animation="fade-up" duration={900} className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary font-bold px-4 py-2 rounded-full text-sm mb-4">
            THREE-TIER LEARNING SYSTEM
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">
            Program Overview: Alpha, Beta & <span className="text-gradient-teal">Gamma</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Visual comparison of Alpha, Beta, and Gamma versions. Building Strong Foundations for Competitive Success.
          </p>
        </AnimateIn>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            const iconClass = program.name === 'ALPHA' ? 'program-icon-star' : program.name === 'BETA' ? 'program-icon-rocket' : 'program-icon-trophy';
            return (
            <AnimateIn key={index} animation="fade-up" delay={index * 150} duration={800}>
            <Card 
              key={index} 
              className={`program-card ${program.bgClass} border-0 card-hover overflow-hidden relative`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <CardHeader className="relative z-10">
                <div className="flex items-center gap-4 mb-2">
                  <div className={`program-icon-wrapper w-14 h-14 rounded-xl flex items-center justify-center bg-white/20 backdrop-blur-sm border border-white/30 shrink-0 ${iconClass}`}>
                    <IconComponent 
                    className={`w-8 h-8 text-white drop-shadow-lg ${program.name === 'ALPHA' ? 'fill-white' : ''}`} 
                    strokeWidth={program.name === 'ALPHA' ? 1.5 : 2.5} 
                    fill={program.name === 'ALPHA' ? 'white' : 'none'} 
                  />
                  </div>
                  <div>
                    <CardTitle className="text-3xl font-extrabold">
                      {program.name}
                    </CardTitle>
                    <p className="text-lg font-semibold opacity-90">{program.tagline}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-10 space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="font-medium mb-2">{program.target}</p>
                  <p className="text-sm opacity-80">📚 {program.grades}</p>
                </div>
                
                <div>
                  <p className="font-bold mb-2">Subjects Covered:</p>
                  <div className="flex flex-wrap gap-2">
                    {program.subjects.map((subject, i) => (
                      <span key={i} className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Target className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">{program.focus}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <BookOpen className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Aligned: {program.alignment}</p>
                  </div>
                </div>

                <button className="btn-lift w-full mt-4 bg-white/20 hover:bg-white/30 transition-all py-3 rounded-xl font-bold">
                  Explore {program.name} Program →
                </button>
              </CardContent>
            </Card>
            </AnimateIn>
            );
          })}
        </div>

        {/* Program Comparison CTA */}
        <ProgramComparison />
      </div>
    </section>
  );
};

export default Programs;
