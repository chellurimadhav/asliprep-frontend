import { Star, Rocket, Trophy, BookOpen, Brain, Target, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const programs = [
  {
    name: 'ALPHA',
    emoji: '⭐',
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
    emoji: '🚀',
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
    emoji: '🏆',
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
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary font-bold px-4 py-2 rounded-full text-sm mb-4">
            THREE-TIER LEARNING SYSTEM
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">
            Choose Your <span className="text-gradient-teal">Path to Success</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our differentiated learning programs cater to every student's unique needs and aspirations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className={`${program.bgClass} border-0 card-hover overflow-hidden relative`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <CardHeader className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl">{program.emoji}</span>
                  <CardTitle className="text-3xl font-extrabold">
                    {program.name}
                  </CardTitle>
                </div>
                <p className="text-lg font-semibold opacity-90">{program.tagline}</p>
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

                <button className="w-full mt-4 bg-white/20 hover:bg-white/30 transition-all py-3 rounded-xl font-bold">
                  Explore {program.name} Program →
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Program Comparison CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl shadow-xl p-6">
            <Brain className="h-10 w-10 text-primary" />
            <div className="text-left">
              <p className="font-bold text-secondary text-lg">Not sure which program is right?</p>
              <p className="text-muted-foreground">Compare all programs side by side</p>
            </div>
            <button className="bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-all">
              Compare Programs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
