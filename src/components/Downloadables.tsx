import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import AnimateIn from './AnimateIn';

const Downloadables = () => {
  return (
    <section className="py-20 section-teal">
      <div className="container mx-auto px-4">
        <AnimateIn animation="fade-up" duration={800} className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary font-bold px-4 py-2 rounded-full text-sm mb-4">
            DOWNLOADABLE RESOURCES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Download Our <span className="text-gradient-teal">Brochure</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get detailed information about our courses, curriculum, and programs. Free sample study materials, downloadable guides, success stories and case studies.
          </p>
        </AnimateIn>
        <AnimateIn animation="fade-up" delay={200} duration={900} className="max-w-2xl mx-auto">
          <Card className="card-hover shimmer-hover bg-white shadow-xl border-border overflow-hidden group hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-0 flex flex-col md:flex-row">
              <div className="md:w-1/2 flex-shrink-0">
                <img
                  src="/images/brocher.png"
                  alt="Asli Prep Brochure"
                  className="w-full h-48 md:h-full object-cover object-top"
                />
              </div>
              <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <h3 className="font-bold text-secondary text-xl mb-2">Program Brochure</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Complete overview of our courses, curriculum, and programs.
                </p>
                <a
                  href="/brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <Button className="bg-primary hover:bg-primary/90 transition-all duration-300 hover:-translate-y-0.5 [&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg]:translate-y-[-2px]">
                    <Download className="mr-2 h-4 w-4" />
                    Download Brochure
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </AnimateIn>
      </div>
    </section>
  );
};

export default Downloadables;
