import { Briefcase, Award, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const CtaBanner = () => {
  return (
    <section className="bg-gradient-to-br from-[#2C5F6F] to-[#1E3A47] py-16 md:py-24 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Save Environment by Treating Water!
        </h2>
        <p className="text-lg md:text-xl text-blue-200 mb-12 max-w-3xl mx-auto">
          Get all your water treatment needs fulfilled by Amphitrite Technologies
        </p>

        <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-8 md:gap-16 mb-16">
          <div className="flex items-center gap-4">
            <Briefcase className="h-10 w-10 text-[#00D4AA] flex-shrink-0" />
            <div className="text-left">
              <p className="text-4xl font-bold leading-none">15+</p>
              <p className="text-sm text-blue-200 mt-1">Years Industry Experience</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Award className="h-10 w-10 text-[#00D4AA] flex-shrink-0" />
            <div className="text-left">
              <p className="text-4xl font-bold leading-none">200+</p>
              <p className="text-sm text-blue-200 mt-1">Projects Completed</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ShieldCheck className="h-10 w-10 text-[#00D4AA] flex-shrink-0" />
            <div className="text-left">
              <p className="text-4xl font-bold leading-none">100%</p>
              <p className="text-sm text-blue-200 mt-1">PCB Compliance</p>
            </div>
          </div>
        </div>

        <Button 
          asChild 
          size="lg" 
          className="bg-white text-[#1E3A47] hover:bg-gray-200 rounded-lg text-lg font-semibold h-auto px-10 py-4 transition-transform duration-300 hover:scale-105 shadow-xl"
        >
          <Link href="#lead-form">
            Get Started
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default CtaBanner;