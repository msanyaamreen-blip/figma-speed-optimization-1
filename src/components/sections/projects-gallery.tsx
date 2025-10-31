import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

interface Project {
  name: string;
  industry: string;
  image: string;
  alt: string;
}

const projects: Project[] = [
  {
    name: 'ABC Textile Mill ETP',
    industry: 'Textile Industry',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03e35456-c097-4642-82ca-d49af5b77be0-wink-shade-59488103-figma-site/assets/images/images_3.jpg',
    alt: 'ABC Textile Mill ETP installation',
  },
  {
    name: 'Metro Residency STP',
    industry: 'Real Estate',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03e35456-c097-4642-82ca-d49af5b77be0-wink-shade-59488103-figma-site/assets/images/images_4.jpg',
    alt: 'Metro Residency STP system',
  },
  {
    name: 'PharmaLife Industries ETP',
    industry: 'Pharmaceutical',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03e35456-c097-4642-82ca-d49af5b77be0-wink-shade-59488103-figma-site/assets/images/images_5.jpg',
    alt: 'PharmaLife Industries ETP facility',
  },
  {
    name: 'ChemTech Solutions ETP',
    industry: 'Chemical Industry',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03e35456-c097-4642-82ca-d49af5b77be0-wink-shade-59488103-figma-site/assets/images/images_6.jpg',
    alt: 'ChemTech Solutions ETP plant',
  },
  {
    name: 'GrandView Hotel STP',
    industry: 'Hospitality',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03e35456-c097-4642-82ca-d49af5b77be0-wink-shade-59488103-figma-site/assets/images/images_7.jpg',
    alt: 'GrandView Hotel STP project',
  },
  {
    name: 'FoodCorp Processing ETP',
    industry: 'Food Processing',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03e35456-c097-4642-82ca-d49af5b77be0-wink-shade-59488103-figma-site/assets/images/images_8.jpg',
    alt: 'FoodCorp Processing ETP unit',
  },
];

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
    <Image
      src={project.image}
      alt={project.alt}
      width={400}
      height={240}
      className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
    <div className="absolute inset-0 flex flex-col justify-end p-6">
      <div className="absolute top-4 right-4">
        <div className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-sm">
          {project.industry}
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
    </div>
    <div className="absolute inset-0 bg-accent-teal/10 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
      <div className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-black/50 backdrop-blur-sm transform scale-90 group-hover:scale-100 transition-all duration-300">
        <ExternalLink className="w-4 h-4" />
        View Details
      </div>
    </div>
  </div>
);

export default function ProjectsGallery() {
  return (
    <section id="projects" className="py-24 bg-background scroll-mt-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-primary-dark mb-4">Our Projects Gallery</h2>
          <p className="text-lg text-text-gray max-w-3xl mx-auto">
            See our successful installations across various industries. Each project demonstrates our commitment to quality and regulatory compliance.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}