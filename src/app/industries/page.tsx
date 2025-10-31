import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Image from "next/image";
import { Factory, FlaskConical, Shirt, UtensilsCrossed, Beaker, Layers3, School, GraduationCap, Building2 } from "lucide-react";

const industries = [
  {
    name: "Manufacturing",
    icon: Factory,
    description: "Comprehensive water treatment solutions for manufacturing facilities, helping reduce water consumption and meet environmental compliance standards.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
  },
  {
    name: "Pharmaceutical",
    icon: FlaskConical,
    description: "Specialized ETP and RO systems for pharmaceutical industries ensuring ultra-pure water quality and strict regulatory compliance.",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80"
  },
  {
    name: "Textiles",
    icon: Shirt,
    description: "Advanced wastewater treatment systems for textile mills to remove dyes, chemicals, and organic matter effectively.",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea3c0462?w=800&q=80"
  },
  {
    name: "Food Processing",
    icon: UtensilsCrossed,
    description: "Food-grade water treatment solutions ensuring safety, hygiene, and compliance with food safety regulations.",
    image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=800&q=80"
  },
  {
    name: "Chemicals",
    icon: Beaker,
    description: "Robust ETP systems designed to handle complex chemical effluents and hazardous waste streams safely.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80"
  },
  {
    name: "Tannery",
    icon: Layers3,
    description: "Specialized treatment plants for tannery effluents, removing chromium and other heavy metals effectively.",
    image: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=800&q=80"
  },
  {
    name: "Schools",
    icon: School,
    description: "Compact STP solutions for educational institutions promoting water conservation and environmental awareness.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80"
  },
  {
    name: "Colleges & Universities",
    icon: GraduationCap,
    description: "Large-capacity sewage and water treatment systems for college campuses and university complexes.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80"
  },
  {
    name: "Large Hotels",
    icon: Building2,
    description: "Complete water recycling systems for hospitality sector, ensuring guest comfort while saving water costs.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
  }
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen w-full">
      <Navigation />
      <main className="w-full pt-24">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary-blue-green to-primary-dark text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">Industries We Serve</h1>
              <p className="text-xl text-blue-100">
                Delivering tailored water treatment solutions across diverse sectors with proven expertise and commitment to excellence
              </p>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-24 bg-background-light-gray">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={industry.image}
                        alt={industry.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 flex items-center gap-3">
                        <div className="bg-accent-teal rounded-full p-3">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">{industry.name}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-text-gray leading-relaxed">{industry.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6 text-primary-dark">
              Ready to Transform Your Water Treatment?
            </h2>
            <p className="text-xl text-text-gray mb-8 max-w-2xl mx-auto">
              Get in touch with our experts to discuss your specific industry needs
            </p>
            <a href="/#lead-form">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-teal-400/40 h-12 px-8 bg-accent-teal text-white">
                Request Free Consultation
              </button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
