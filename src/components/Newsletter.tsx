import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AnimateIn from './AnimateIn';

const Newsletter = () => {
  return (
    <section className="py-16 section-navy relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="container mx-auto relative z-10">
        <AnimateIn animation="scale" duration={1000} className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center">
              <Mail className="h-7 w-7 text-accent" />
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Stay Updated
          </h2>
          <p className="text-white/70 mb-8">
            Newsletter signup for updates. Latest exam updates and news, parenting tips for competitive exam prep.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
            />
            <Button type="submit" className="bg-accent text-accent-foreground font-bold px-8 h-12 shrink-0 transition-all duration-300 hover:scale-105 hover:brightness-110">
              Subscribe
            </Button>
          </form>
        </AnimateIn>
      </div>
    </section>
  );
};

export default Newsletter;
