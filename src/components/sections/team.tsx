import Image from 'next/image';

const teamMembers = [
  {
    name: 'Dr. Rajesh Kumar',
    title: 'Founder & Chief Engineer',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/03e35456-c097-4642-82ca-d49af5b77be0/generated_images/professional-corporate-headshot-portrait-22e29034-20251030152056.jpg',
  },
  {
    name: 'Priya Sharma',
    title: 'Senior Project Manager',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/03e35456-c097-4642-82ca-d49af5b77be0/generated_images/professional-corporate-headshot-portrait-0674a63d-20251030152056.jpg',
  },
  {
    name: 'Amit Patel',
    title: 'Technical Head - ETP',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/03e35456-c097-4642-82ca-d49af5b77be0/generated_images/professional-corporate-headshot-portrait-3f6d4615-20251030152056.jpg',
  },
  {
    name: 'Kavita Desai',
    title: 'Environmental Compliance Officer',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/03e35456-c097-4642-82ca-d49af5b77be0/generated_images/professional-corporate-headshot-portrait-49c77929-20251030152055.jpg',
  },
  {
    name: 'Suresh Nair',
    title: 'Operations Manager',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/03e35456-c097-4642-82ca-d49af5b77be0/generated_images/professional-corporate-headshot-portrait-65810d38-20251030152055.jpg',
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-24 scroll-mt-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary-dark">Our Team</h2>
          <p className="text-lg text-text-gray max-w-2xl mx-auto">
            Meet the experts behind our successful installations
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative w-40 h-40 mx-auto mb-6">
                <Image
                  src={member.imageUrl}
                  alt={`Photo of ${member.name}`}
                  width={160}
                  height={160}
                  className="w-full h-full object-cover rounded-full shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h4 className="text-xl font-bold mb-1 text-primary-dark">{member.name}</h4>
              <p className="text-text-gray">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;