"use client";

import { useState } from "react";
import { HelpCircle } from "lucide-react";
import { Accordion, AccordionItem } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the AI feedback work?",
    answer:
      "Our proprietary AI analyzes your facial expressions, tone of voice, and semantic content of your answers to provide actionable insights based on industry standards and common recruiter expectations.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period, and you won't be charged for the next cycle.",
  },
  {
    question: "Is my practice data kept private?",
    answer:
      "Absolutely. All your practice sessions and data are encrypted and stored securely. We never share your information with third parties, and you can delete your data at any time from your account settings.",
  },
  {
    question: "Do you offer custom plans for universities?",
    answer:
      "Yes, we offer special educational pricing for universities and institutions. Please contact our sales team at sales@interviewgym.com to discuss custom plans and volume discounts.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First FAQ open by default

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mb-12">
      <div className="flex items-center gap-2 mb-6">
        <HelpCircle className="h-5 w-5 text-orange-600" />
        <h2 className="text-xl font-bold text-gray-900">Frequently Asked Questions</h2>
      </div>
      <Accordion>
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </Accordion>
    </div>
  );
}
