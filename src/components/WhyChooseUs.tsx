import { 
  GraduationCap, 
  MonitorPlay, 
  FileText, 
  BarChart3, 
  Users, 
  Palette,
  CheckCircle
} from 'lucide-react';

const features = [
  {
    icon: GraduationCap,
    title: 'Expert Faculty',
    description: 'Highly qualified teachers with extensive experience and proven track record',
    color: 'bg-primary',
  },
  {
    icon: MonitorPlay,
    title: 'Flexible Delivery',
    description: 'Online, offline, and hybrid learning options to suit every institution',
    color: 'bg-secondary',
  },
  {
    icon: Palette,
    title: 'White-Label Solutions',
    description: 'Brand content as your own with customizable study materials',
    color: 'bg-accent',
  },
  {
    icon: FileText,
    title: 'Comprehensive Resources',
    description: 'Study materials, video lectures, assessments, and LMS access',
    color: 'bg-primary',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Tracking',
    description: 'Regular assessments with personalized feedback and progress reports',
    color: 'bg-secondary',
  },
  {
    icon: Users,
    title: 'Teacher Training',
    description: 'Professional development modules for your educators',
    color: 'bg-accent',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 section-navy relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent text-accent-foreground font-bold px-4 py-2 rounded-full text-sm mb-4">
            WHY PARTNER WITH US
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Why Schools <span className="text-gradient-gold">Choose Us</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Partner with excellence, achieve excellence. Here's what makes Asli Prep Foundation the preferred choice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Key Messages */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border border-primary/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">For Schools & Institutions</h3>
            <ul className="space-y-4">
              {[
                'Seamless integration with existing curriculum',
                'Marketing support for your institution',
                'Dedicated relationship manager',
                'Institutional pricing options',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/90">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-accent/20 to-accent/5 backdrop-blur-sm border border-accent/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">For Students & Parents</h3>
            <ul className="space-y-4">
              {[
                'Board + Competitive exam integrated approach',
                'Regular progress reports and feedback',
                'Access to AI assistant VIDYA',
                'Proven track record of success',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/90">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
