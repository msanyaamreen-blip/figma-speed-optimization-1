import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Address",
    content: "No 1-4, Abirami Homes,Bhuvaneshwari Nagar,1st Cross Street, Velachery,Chennai – 600 042",
    href: null,
  },
  {
    icon: Phone,
    title: "Phone Number",
    content: "+91 98410 12345",
    href: "tel:+919841012345",
  },
  {
    icon: Mail,
    title: "Email Address",
    content: "info@amphitrite.com",
    href: "mailto:info@amphitrite.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Monday - Saturday: 9:00 AM - 6:00 PM",
    href: null,
  },
];

const OfficeContact = () => {
  return (
    <section id="office" className="py-24 scroll-mt-20 bg-white text-gray-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-primary-dark mb-4">Our Office</h2>
          <p className="text-xl text-text-gray">
            Visit us at our Chennai location or get in touch to schedule a consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="rounded-2xl overflow-hidden shadow-xl h-[520px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.32049909068!2d80.2203362153545!3d12.971842990826601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d688f0a15ab%3A0x6b245cf3305a415!2sVelachery%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1678886365123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location Map"
            ></iframe>
          </div>

          <div className="space-y-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-6 p-6 rounded-2xl bg-background-light-gray shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center bg-accent-teal/10 text-accent-teal">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-primary-dark">{item.title}</h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-text-gray hover:text-accent-teal hover:underline transition-colors"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-text-gray">{item.content}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeContact;