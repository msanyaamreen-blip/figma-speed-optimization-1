"use client";

import * as React from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const testimonialsData = [
  {
    name: "Ramesh Krishnan",
    title: "Plant Manager, ABC Textiles",
    quote: "Amphitrite Technologies delivered an exceptional ETP system for our textile plant. The team was professional, and we achieved 100% PCB compliance on the first inspection.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03e35456-c097-4642-82ca-d49af5b77be0-wink-shade-59488103-figma-site/assets/images/images_14.jpg",
  },
  {
    name: "Lakshmi Iyer",
    title: "Facility Head, Metro Residency",
    quote: "Outstanding service and support. The STP installation was completed on time, and their AMC team is always responsive. Highly recommend for any industrial water treatment needs.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03e35456-c097-4642-82ca-d49af5b77be0-wink-shade-59488103-figma-site/assets/images/images_15.jpg",
  },
  {
    name: "Dr. Ashok Mehta",
    title: "Director, PharmaLife Industries",
    quote: "We saved ₹15 lakhs annually on water costs after installing their water recycling system. The ROI was evident within the first year. Excellent technical expertise!",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03e35456-c097-4642-82ca-d49af5b77be0-wink-shade-59488103-figma-site/assets/images/images_16.jpg",
  },
  {
    name: "Sunil Reddy",
    title: "Operations Head, ChemTech Solutions",
    quote: "Professional team with deep knowledge of PCB regulations. They guided us through the entire compliance process and delivered a custom ETP solution that perfectly fits our needs.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03e35456-c097-4642-82ca-d49af5b77be0-wink-shade-59488103-figma-site/assets/images/images_17.jpg",
  },
  {
    name: "Meera Nambiar",
    title: "GM Operations, GrandView Resorts",
    quote: "15 years of excellent service! From initial consultation to ongoing maintenance, Amphitrite has been our trusted partner for all water treatment needs across our hotel properties.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03e35456-c097-4642-82ca-d49af5b77be0-wink-shade-59488103-figma-site/assets/images/images_18.jpg",
  },
];

const chunk = <T,>(arr: T[], size: number): T[][] =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_v, i) =>
    arr.slice(i * size, i * size + size)
  );

const testimonialSlides = chunk(testimonialsData, 2);

type Testimonial = (typeof testimonialsData)[0];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="relative bg-white p-8 rounded-3xl shadow-lg border-t-4 border-accent-teal h-full flex flex-col">
    <Quote className="absolute top-6 left-6 w-12 h-12 text-gray-100/80 -translate-x-2 -translate-y-2" fill="currentColor" />
    <div className="relative z-10 space-y-4 flex flex-col flex-grow">
      <div className="flex gap-1 text-yellow-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-5 h-5" fill="currentColor" />
        ))}
      </div>
      <p className="text-gray-600 leading-relaxed text-base flex-grow">"{testimonial.quote}"</p>
      <div className="flex items-center gap-4 pt-4">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={56}
          height={56}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-lg text-primary-dark">{testimonial.name}</p>
          <p className="text-sm text-gray-500">{testimonial.title}</p>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <section id="testimonials" className="py-20 scroll-mt-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary-dark">
            What Our <span className="relative inline-block">Clients Say</span>
          </h2>
          <p className="text-lg text-text-gray max-w-2xl mx-auto">
            Real reviews from our satisfied clients
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <Carousel setApi={setApi} opts={{ loop: true }} className="relative">
            <CarouselContent>
              {testimonialSlides.map((slide, slideIndex) => (
                <CarouselItem key={slideIndex}>
                  <div className="grid md:grid-cols-2 gap-8 items-stretch">
                    <TestimonialCard testimonial={slide[0]} />
                    {slide[1] && (
                      <div className="hidden md:block">
                        <TestimonialCard testimonial={slide[1]} />
                      </div>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    current === index
                      ? "bg-accent-teal"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;