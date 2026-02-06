import { BookOpen, Beaker, GraduationCap, Brain, Rocket } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const offerings = [
  {
    icon: BookOpen,
    title: 'JEE Preparation',
    description: 'Advanced problem solving with deep conceptual understanding.',
    color: 'text-jee',
    bgColor: 'bg-jee/10',
  },
  {
    icon: Beaker,
    title: 'NEET Preparation',
    description: 'Concept clarity, biology mastery, and exam-focused practice.',
    color: 'text-neet',
    bgColor: 'bg-neet/10',
  },
  {
    icon: GraduationCap,
    title: 'KCET Preparation',
    description: 'Structured curriculum, mock tests, and expert mentoring for KCET aspirants.',
    color: 'text-kcet',
    bgColor: 'bg-kcet/10',
  },
  {
    icon: Brain,
    title: 'EAPCET Preparation',
    description: 'Early exposure to competitive problem solving and logic building.',
    color: 'text-eapcet',
    bgColor: 'bg-eapcet/10',
  },
];

const Offerings = () => {
  return (
    <section id="courses" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Asli Prep Offerings
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive preparation programs designed to help students excel in their competitive exams
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {offerings.map((offering, index) => (
            <Card 
              key={index} 
              className="card-hover bg-card border-border hover:border-primary/30 cursor-pointer group"
            >
              <CardHeader>
                <div className={`w-14 h-14 ${offering.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <offering.icon className={`h-7 w-7 ${offering.color}`} />
                </div>
                <CardTitle className={`text-xl ${offering.color}`}>
                  {offering.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base">
                  {offering.description}
                </CardDescription>
                <a 
                  href="#" 
                  className={`inline-flex items-center mt-4 ${offering.color} font-medium hover:underline`}
                >
                  Explore More →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Future Unicorns Banner */}
        <Card className="bg-gradient-to-r from-primary to-blue-deep text-primary-foreground overflow-hidden">
          <div className="grid md:grid-cols-3 gap-6 items-center p-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="h-8 w-8 text-accent" />
                <h3 className="text-2xl font-bold">Future Unicorns Launchpad</h3>
              </div>
              <p className="text-primary-foreground/80 text-lg mb-6">
                India's biggest entrepreneurship & talent platform empowering students with innovation, skills, and leadership mindset.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-lg hover:brightness-110 transition-all"
              >
                Know More
              </a>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="w-32 h-32 bg-accent/20 rounded-full flex items-center justify-center">
                <Rocket className="h-16 w-16 text-accent" />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Offerings;
