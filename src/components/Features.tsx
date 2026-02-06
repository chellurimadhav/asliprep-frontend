import { Check, Users, BarChart3, LineChart, BookCheck, School } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const studentFeatures = [
  'Smart test-based learning platform',
  'AI-powered performance insights',
  'Personalized revision plans',
  'Previous year question analysis',
];

const institutionFeatures = [
  'Institute-level analytics dashboard',
  'Batch performance tracking',
  'Custom test creation tools',
  'White-label solution options',
];

const Features = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Become Confident While Focusing On Competitive Exams
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our platform is designed to empower both students and institutions with cutting-edge tools
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* For Students */}
          <Card className="card-hover border-2 border-jee/30 bg-gradient-to-br from-jee/5 to-transparent">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-jee/10 rounded-xl flex items-center justify-center">
                  <Users className="h-7 w-7 text-jee" />
                </div>
                <CardTitle className="text-2xl text-jee">Asli Prep For Students</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {studentFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-neet/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4 text-neet" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* For Institutions */}
          <Card className="card-hover border-2 border-kcet/30 bg-gradient-to-br from-kcet/5 to-transparent">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-kcet/10 rounded-xl flex items-center justify-center">
                  <School className="h-7 w-7 text-kcet" />
                </div>
                <CardTitle className="text-2xl text-kcet">Asli Prep For Institutions</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {institutionFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-neet/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4 text-neet" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatItem icon={BookCheck} number="50K+" label="Practice Questions" color="text-jee" />
          <StatItem icon={BarChart3} number="1000+" label="Mock Tests" color="text-neet" />
          <StatItem icon={LineChart} number="200+" label="Video Lectures" color="text-kcet" />
          <StatItem icon={Users} number="100+" label="Expert Faculty" color="text-eapcet" />
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ 
  icon: Icon, 
  number, 
  label, 
  color 
}: { 
  icon: React.ElementType; 
  number: string; 
  label: string; 
  color: string;
}) => (
  <div className="text-center p-6 bg-secondary rounded-2xl card-hover">
    <div className={`w-12 h-12 mx-auto ${color} bg-current/10 rounded-xl flex items-center justify-center mb-4`}>
      <Icon className={`h-6 w-6 ${color}`} />
    </div>
    <div className={`text-3xl font-bold ${color} mb-2`}>{number}</div>
    <div className="text-muted-foreground">{label}</div>
  </div>
);

export default Features;
