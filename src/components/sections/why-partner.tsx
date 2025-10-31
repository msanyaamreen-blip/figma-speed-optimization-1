import { ShieldCheck, Wrench, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
}

const benefits: BenefitCardProps[] = [
  {
    icon: ShieldCheck,
    title: "Govt & PCB Approved Designs",
  },
  {
    icon: Wrench,
    title: "Turnkey Installation & AMC Support",
  },
  {
    icon: Users,
    title: "200+ Industrial Clients Served",
  },
];

const BenefitCard = ({ icon: Icon, title }: BenefitCardProps) => (
  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
    <div className="p-8 space-y-5">
      <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
        <Icon className="w-8 h-8 text-accent-teal" />
      </div>
      <h3 className="text-xl font-semibold text-primary-dark leading-snug">
        {title}
      </h3>
    </div>
  </div>
);

const WhyPartner = () => {
  return (
    <section className="py-24 bg-background-light-gray relative overflow-hidden">
      {/* Decorative background blobs - using static blobs as animation definitions are not provided */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-2xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-2xl animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[40px] font-bold text-primary-dark mb-4 leading-tight tracking-tight">
            Why Partner With Amphitrite?
          </h2>
          <p className="text-lg text-text-gray">
            Our commitment to quality, compliance, and customer satisfaction sets us apart
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPartner;