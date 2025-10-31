import { Droplets, BadgeIndianRupee, ShieldCheck } from "lucide-react";

const resultsData = [
  {
    icon: Droplets,
    value: "80%",
    description: "Reduced freshwater consumption",
  },
  {
    icon: BadgeIndianRupee,
    value: "₹15L+",
    description: "Saved annually through recycling",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    description: "PCB compliance achieved",
  },
];

const Results = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-blue-50/20 to-cyan-50/20">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-200 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite_4s]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-primary-dark mb-4">
            Proven Results from Our Installations
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resultsData.map((item, index) => {
            const Icon = item.icon;
            const delayClass = `delay-[${(index + 1) * 200}ms]`;
            return (
              <div
                key={index}
                className={`bg-background rounded-[20px] shadow-lg hover:shadow-xl border border-border/30 hover:border-accent-cyan/50 transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up ${delayClass}`}
              >
                <div className="p-8 text-center">
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-teal-50">
                    <Icon
                      className="w-10 h-10 text-accent-teal"
                      strokeWidth={1.5}
                    />
                  </div>
                  <p className="text-6xl font-bold text-accent-teal mb-4">
                    {item.value}
                  </p>
                  <h4 className="text-lg font-semibold text-primary-dark leading-none">
                    {item.description}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Results;