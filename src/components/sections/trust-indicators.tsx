import { Factory, Medal, ShieldCheck, FlaskConical, Shirt, UtensilsCrossed, Beaker, Layers3, School, GraduationCap, Building2 } from 'lucide-react';

type StatCardProps = {
  icon: React.ReactNode;
  value: string;
  label: string;
  valueColor: string;
  animationDelay?: string;
};

const StatCard = ({ icon, value, label, valueColor, animationDelay }: StatCardProps) => (
  <div
    className={`bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col items-center text-center animate-fade-in-up`}
    style={{ animationDelay }}
  >
    <div className="bg-gradient-to-br from-teal-50 to-blue-100 p-4 rounded-full mb-6">
      {icon}
    </div>
    <p className={`text-5xl font-bold ${valueColor}`}>{value}</p>
    <p className="text-lg text-gray-500 font-medium mt-2">{label}</p>
  </div>
);

type IndustryCardProps = {
  icon: React.ReactNode;
  name: string;
  animationDelay?: string;
};

const IndustryCard = ({ icon, name, animationDelay }: IndustryCardProps) => (
  <div
    className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col items-center justify-center text-center gap-4 animate-fade-in-up"
    style={{ animationDelay }}
  >
    <div className="bg-gray-100 rounded-full p-4 flex items-center justify-center">
      {icon}
    </div>
    <span className="font-semibold text-primary-dark">{name}</span>
  </div>
);

const TrustIndicators = () => {
  const stats = [
    {
      icon: <Medal className="w-10 h-10 text-primary-blue-green" />,
      value: "15+",
      label: "Years of Expertise",
      valueColor: "text-accent-teal",
      animationDelay: '400ms'
    },
    {
      icon: <Factory className="w-10 h-10 text-primary-blue-green" />,
      value: "200+",
      label: "Installations",
      valueColor: "text-primary-blue-green",
      animationDelay: '600ms'
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-primary-blue-green" />,
      value: "100%",
      label: "PCB Compliance",
      valueColor: "text-accent-teal",
      animationDelay: '800ms'
    },
  ];

  const industries = [
    { icon: <Factory className="w-8 h-8 text-primary-dark" />, name: "Manufacturing" },
    { icon: <FlaskConical className="w-8 h-8 text-primary-dark" />, name: "Pharma" },
    { icon: <Shirt className="w-8 h-8 text-primary-dark" />, name: "Textiles" },
    { icon: <UtensilsCrossed className="w-8 h-8 text-primary-dark" />, name: "Food Processing" },
    { icon: <Beaker className="w-8 h-8 text-primary-dark" />, name: "Chemicals" },
    { icon: <Layers3 className="w-8 h-8 text-primary-dark" />, name: "Tannery" },
    { icon: <School className="w-8 h-8 text-primary-dark" />, name: "Schools" },
    { icon: <GraduationCap className="w-8 h-8 text-primary-dark" />, name: "Colleges" },
    { icon: <Building2 className="w-8 h-8 text-primary-dark" />, name: "Large Hotels" },
  ];

  return (
    <section id="about" className="py-24 scroll-mt-20 relative overflow-hidden bg-background-light-gray">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-cyan-100 to-blue-200 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-teal-100 to-green-200 rounded-full blur-3xl animate-float"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-primary-dark mb-6 animate-fade-in-up">
            Trusted by Leading Industries Across India
          </h2>
          <div className="flex justify-center items-center gap-3 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="h-1 w-20 rounded-full bg-gradient-to-r from-teal-400 to-blue-500"></div>
            <div className="w-3 h-3 rounded-full bg-blue-600"></div>
            <div className="h-1 w-20 rounded-full bg-gradient-to-l from-teal-400 to-blue-500"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-semibold text-primary-dark mb-12 animate-fade-in-up" style={{animationDelay: '1000ms'}}>
            Industries Served:
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <IndustryCard key={index} {...industry} animationDelay={`${1200 + index * 100}ms`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;