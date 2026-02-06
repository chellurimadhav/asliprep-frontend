import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Study materials and guidance were extremely useful for my NEET exam preparation!",
    name: "Priya Sharma",
    role: "NEET Aspirant",
    rating: 5,
    image: "🎓",
  },
  {
    quote: "Regular assessments and feedback helped me prepare systematically for JEE.",
    name: "Rahul Verma",
    role: "JEE Aspirant",
    rating: 5,
    image: "📚",
  },
  {
    quote: "Motivational sessions kept me focused on my career goals throughout the preparation.",
    name: "Ananya Reddy",
    role: "Olympiad Winner",
    rating: 5,
    image: "🏆",
  },
  {
    quote: "Faculty made complex topics easy to understand. Best investment for my child's future.",
    name: "Mrs. Lakshmi",
    role: "Parent",
    rating: 5,
    image: "👩‍👧",
  },
  {
    quote: "The white-label solution helped us elevate our school's academic offerings significantly.",
    name: "Mr. Srinivas",
    role: "School Principal",
    rating: 5,
    image: "🏫",
  },
  {
    quote: "Gained confidence and clarity for competitive exams. Thank you Asli Prep!",
    name: "Aditya Kumar",
    role: "IIT-JEE Qualified",
    rating: 5,
    image: "⭐",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 section-teal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent text-accent-foreground font-bold px-4 py-2 rounded-full text-sm mb-4">
            SUCCESS STORIES
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">
            What Our <span className="text-gradient-teal">Community Says</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from students, parents, and educators who have experienced the Asli Prep difference
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              
              <div className="relative mb-4">
                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                <p className="text-foreground/80 italic pl-6">"{testimonial.quote}"</p>
              </div>
              
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-bold text-secondary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Testimonials CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-secondary rounded-2xl p-8">
            <div className="text-center sm:text-left">
              <p className="text-white font-bold text-xl mb-2">Watch Video Testimonials</p>
              <p className="text-white/70">See real success stories from our students</p>
            </div>
            <button className="bg-accent text-accent-foreground font-bold px-8 py-3 rounded-xl hover:brightness-110 transition-all whitespace-nowrap">
              Watch Now →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
