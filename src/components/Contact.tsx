import { MapPin, Phone, Mail, Send, MessageCircle } from 'lucide-react';
import AnimateIn from './AnimateIn';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimateIn animation="fade-up" duration={900} className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary font-bold px-4 py-2 rounded-full text-sm mb-4">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">
            Partner With <span className="text-gradient-teal">Asli Prep</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to elevate your institution's academic excellence? Let's discuss how we can work together.
          </p>
        </AnimateIn>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <AnimateIn animation="slide-left" duration={900} className="space-y-8">
          <div className="space-y-8">
            <div className="card-teal rounded-2xl p-8 text-white transition-all duration-300 hover:shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 text-white">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-white">Address</p>
                    <p className="text-white/95">
                      Plot No. 47, Rd No: 4A,<br />
                      Golden Tulip Estates, Kondapur,<br />
                      Hyderabad, Telangana - 500 084
                    </p>
                    <a 
                      href="https://maps.google.com/?q=Plot+No.+47,+Rd+No:+4A,+Golden+Tulip+Estates,+Kondapur,+Hyderabad,+Telangana+500084" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-sm text-white/95 hover:text-white underline"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 text-white">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-white">Phone</p>
                    <p className="text-white/95">+91 9346832477</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 text-white">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-white">Email</p>
                    <p className="text-white/95">info@asliprep.com</p>
                    <p className="text-white/95">asliprep@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA - teal-green aligned with brand */}
            <a 
              href="https://wa.me/919346832477" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 whatsapp-cta text-white rounded-2xl p-6 transition-all shadow-lg"
            >
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="h-8 w-8" />
              </div>
              <div>
                <p className="font-bold text-lg">Chat on WhatsApp</p>
                <p className="opacity-95">Quick response guaranteed</p>
              </div>
            </a>
          </div>
          </AnimateIn>

          {/* Contact Form */}
          <AnimateIn animation="slide-right" delay={150} duration={900}>
          <div className="bg-white rounded-2xl shadow-xl border border-border p-8 transition-all duration-300 hover:shadow-2xl hover:border-primary/20">
            <h3 className="text-2xl font-bold text-secondary mb-6">Contact Us – Institutional Partnerships</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Institution Name *</label>
                  <Input placeholder="Your School/Institution Name" className="bg-muted border-border" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Contact Person *</label>
                  <Input placeholder="Your Full Name" className="bg-muted border-border" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Designation</label>
                  <Input placeholder="Principal / Administrator" className="bg-muted border-border" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">City/State *</label>
                  <Input placeholder="Your City, State" className="bg-muted border-border" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                  <Input type="email" placeholder="email@institution.com" className="bg-muted border-border" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone *</label>
                  <Input type="tel" placeholder="+91 9876543210" className="bg-muted border-border" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Number of Students</label>
                <Select>
                  <SelectTrigger className="bg-muted border-border">
                    <SelectValue placeholder="Select student count" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="50-100">50 - 100</SelectItem>
                    <SelectItem value="100-250">100 - 250</SelectItem>
                    <SelectItem value="250-500">250 - 500</SelectItem>
                    <SelectItem value="500-1000">500 - 1,000</SelectItem>
                    <SelectItem value="1000+">1,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Program Interest</label>
                <div className="flex flex-wrap gap-3">
                  {['Alpha', 'Beta', 'Gamma', 'All Programs'].map((program) => (
                    <label key={program} className="flex items-center gap-2 bg-muted px-4 py-2 rounded-lg cursor-pointer hover:bg-primary/10 transition-colors">
                      <input type="checkbox" className="w-4 h-4 accent-primary" />
                      <span className="text-sm font-medium">{program}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <Textarea 
                  placeholder="Tell us about your institution and requirements..." 
                  rows={4}
                  className="bg-muted border-border"
                />
              </div>

              <Button type="submit" className="btn-lift w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 text-lg transition-all duration-300">
                <Send className="mr-2 h-5 w-5" />
                Submit Inquiry
              </Button>
            </form>
          </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
