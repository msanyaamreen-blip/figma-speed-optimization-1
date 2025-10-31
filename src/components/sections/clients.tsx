import { PlayCircle } from 'lucide-react';

const clients = [
  { name: 'ABC Textiles Ltd.', hasVideo: false },
  { name: 'PharmaLife Industries', hasVideo: true },
  { name: 'GrandView Resorts', hasVideo: false },
  { name: 'FoodCorp Industries', hasVideo: false },
  { name: 'Metro Real Estate', hasVideo: true },
];

const ClientsSection = () => {
  return (
    <section id="clients" className="py-24 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-primary-dark mb-4">
            Our Clients
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            Trusted by leading companies across industries
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center justify-center text-center h-48 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <h4 className="font-semibold text-xl text-gray-800">{client.name}</h4>
              {client.hasVideo && (
                <div className="mt-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-700">
                    <PlayCircle className="w-4 h-4" />
                    <span>Case Study Video</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;