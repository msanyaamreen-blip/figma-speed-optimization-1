'use client';

import * as React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Sparkles, CircleCheckBig, MoveRight, ChevronDown } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const HeroSection = () => {
  const router = useRouter();
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    company: '',
    email: '',
    service: '',
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.email || !formData.service) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Consultation request sent successfully! We will contact you soon.');
        setFormData({
          name: '',
          phone: '',
          company: '',
          email: '',
          service: '',
        });
      } else {
        toast.error('Failed to send request. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03e35456-c097-4642-82ca-d49af5b77be0-wink-shade-59488103-figma-site/assets/images/images_1.jpg"
          alt="Industrial water treatment plant"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(15,23,42,0.8)] via-[rgba(15,23,42,0.6)] to-[rgba(15,23,42,0.4)]"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen items-center justify-center pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8 animate-fade-in-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-teal/10 border border-accent-teal/30 animate-fade-in-down">
                <Sparkles className="w-4 h-4 text-accent-teal" />
                <span className="text-sm font-semibold text-accent-teal">
                  15+ Years of Excellence
                </span>
              </div>

              <h1 className="text-5xl md:text-[56px] font-bold leading-tight">
                Recycle Water and Wastewater Treatment to{' '}
                <span className="text-accent-teal">Reduce Costs</span> &amp;{' '}
                <span className="text-accent-teal">Stay Compliant</span>
              </h1>

              <div className="space-y-5 animate-fade-in-left delay-400">
                <h2 className="text-2xl font-semibold">End-to-end Setup For</h2>
                <ul className="space-y-4 text-lg">
                  <ListItem>Sewage Treatment Plant (STP)</ListItem>
                  <ListItem>Effluent Treatment Plant (ETP)</ListItem>
                  <ListItem>Reverse Osmosis (RO) Water</ListItem>
                </ul>
              </div>

              <p className="text-xl text-slate-300 leading-relaxed animate-fade-in-left delay-700">
                Design, Installation, and Maintenance for industries across
                India.
              </p>

              <div className="pt-4 animate-fade-in-up delay-1000">
                <Button
                  size="lg"
                  className="bg-white text-primary-dark hover:bg-gray-200 h-auto px-8 py-5 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 group"
                  onClick={() => router.push('/industries')}
                >
                  Explore Our Solutions
                  <MoveRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end animate-fade-in-up">
              <Card
                id="lead-form"
                className="w-full max-w-md shadow-2xl rounded-2xl bg-white/95 backdrop-blur-sm border-0 scroll-mt-24"
              >
                <CardHeader className="text-center">
                  <h3 className="text-2xl font-bold text-primary-blue-green">
                    Request Free Consultation
                  </h3>
                  <p className="text-text-gray text-sm">
                    Get expert advice tailored to your needs
                  </p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-700">Name: *</Label>
                      <Input 
                        id="name" 
                        placeholder="Enter your name" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-700">Phone: *</Label>
                      <Input 
                        id="phone" 
                        placeholder="Enter your phone number" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-gray-700">Company Name:</Label>
                      <Input
                        id="company"
                        placeholder="Enter your company name"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700">Email id: *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Enter your email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-gray-700">Service Need: *</Label>
                      <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                        <SelectTrigger id="service">
                          <SelectValue placeholder="Select service required" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="stp">
                            Sewage Treatment Plant (STP)
                          </SelectItem>
                          <SelectItem value="etp">
                            Effluent Treatment Plant (ETP)
                          </SelectItem>
                          <SelectItem value="ro">
                            Reverse Osmosis (RO) Water
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-accent-teal hover:bg-accent-teal/90 text-white font-semibold py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Get Consultation'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-center gap-4 group">
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
      <CircleCheckBig className="w-5 h-5 text-accent-teal" />
    </div>
    <span className="font-medium group-hover:translate-x-2 transition-transform duration-300">
      {children}
    </span>
  </li>
);

export default HeroSection;