"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqData = [
  {
    id: "item-1",
    question: "What is the typical cost of an STP/ETP plant?",
    answer:
      "The cost varies significantly based on capacity, the technology used, and site-specific conditions. A small-scale plant might start from a few lakhs, while larger industrial setups can be more. We provide a detailed, transparent quote after a free consultation and site assessment to match your specific needs and budget.",
  },
  {
    id: "item-2",
    question: "Do you handle government approvals?",
    answer:
      "Yes, absolutely. We have extensive experience navigating the approval process with the Pollution Control Board (PCB) and other government bodies. Our service includes assistance with all necessary documentation and ensuring your plant meets all compliance requirements from day one.",
  },
  {
    id: "item-3",
    question: "Do you provide maintenance services?",
    answer:
      "Yes, we offer comprehensive Annual Maintenance Contracts (AMC) to ensure your plant operates at peak efficiency and remains compliant with regulations. Our AMC includes regular check-ups, preventive maintenance, troubleshooting, and emergency support from our expert technical team.",
  },
];

const Faq = () => {
  const handleContactClick = () => {
    const officeContactSection = document.getElementById("office");
    if (officeContactSection) {
      officeContactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="faq"
      className="py-24 bg-gradient-to-b from-white to-gray-50/50"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-primary-dark mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-text-gray">
            Get answers to common questions about our water treatment solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="bg-white rounded-xl shadow-lg border-none transition-all duration-300 hover:shadow-xl"
              >
                <AccordionTrigger className="text-left font-semibold text-lg text-primary-dark px-8 py-5 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-5 text-base text-text-gray">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-16">
          <p className="text-xl font-medium text-primary-dark mb-6">
            Still have questions? We're here to help!
          </p>
          <Button
            size="lg"
            onClick={handleContactClick}
            className="bg-accent-teal text-white font-semibold rounded-lg px-8 py-6 text-base shadow-lg hover:shadow-xl hover:bg-accent-cyan transition-all duration-300 hover:scale-105"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Faq;