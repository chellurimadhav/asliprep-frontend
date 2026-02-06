import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <ContactCard 
              icon={Phone}
              title="Phone"
              content="+91 98765 43210"
              color="bg-jee/10 text-jee"
            />
            <ContactCard 
              icon={Mail}
              title="Email"
              content="info@asliprep.in"
              color="bg-neet/10 text-neet"
            />
            <ContactCard 
              icon={MapPin}
              title="Location"
              content="Bangalore, Karnataka, India"
              color="bg-kcet/10 text-kcet"
            />
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 bg-card border-border">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-foreground font-medium mb-2">Name</label>
                    <Input 
                      placeholder="Your Name" 
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-foreground font-medium mb-2">Email</label>
                    <Input 
                      type="email" 
                      placeholder="your@email.com" 
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-foreground font-medium mb-2">Phone</label>
                  <Input 
                    placeholder="+91 XXXXX XXXXX" 
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-foreground font-medium mb-2">Course Interest</label>
                  <select className="w-full h-10 px-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Select a course</option>
                    <option>JEE Preparation</option>
                    <option>NEET Preparation</option>
                    <option>KCET Preparation</option>
                    <option>EAPCET Preparation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-foreground font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us about your requirements..." 
                    rows={4}
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 text-lg">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

const ContactCard = ({ 
  icon: Icon, 
  title, 
  content, 
  color 
}: { 
  icon: React.ElementType; 
  title: string; 
  content: string; 
  color: string;
}) => (
  <Card className="bg-card border-border card-hover">
    <CardContent className="p-6">
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color}`}>
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <div className="text-muted-foreground text-sm">{title}</div>
          <div className="text-foreground font-semibold">{content}</div>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default Contact;
