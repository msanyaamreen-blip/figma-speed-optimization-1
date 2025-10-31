import { PiggyBank, ShieldCheck, Settings } from "lucide-react";

const benefitsData = [
  {
    icon: PiggyBank,
    title: "Save Costs",
    description: "Recycle up to 80% of wastewater and cut down fresh water expenses.",
  },
  {
    icon: ShieldCheck,
    title: "Stay Compliance",
    description: "Meet Pollution Control Board and Government regulations with ease.",
  },
  {
    icon: Settings,
    title: "Custom Solutions",
    description: "Structured plant design for your industry, capacity, and budget.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="services" className="py-24 bg-background-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[40px] leading-tight font-bold text-primary-dark mb-4">
            Why Industries Choose Our STP & ETP Solutions
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsData.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 h-full transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
              >
                <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-teal-500" />
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-4">
                  {benefit.title}
                </h3>
                <p className="text-text-gray">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;