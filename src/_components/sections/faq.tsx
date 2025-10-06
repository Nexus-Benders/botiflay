"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SectionHeader from "../headers/section-header";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm drop-shadow mb-4 overflow-hidden transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
      >
        <span className="text-lg font-medium text-gray-800">{question}</span>
        <div className="flex-shrink-0 ml-4">
          {isOpen ? (
            <Minus className="w-6 h-6 text-gray-600" />
          ) : (
            <Plus className="w-6 h-6 text-gray-600" />
          )}
        </div>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-8 pb-6 text-gray-600 leading-relaxed">{answer}</div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqData = [
    {
      question: "How long does a typical UI/UX project take?",
      answer:
        "Project timelines vary based on complexity, but a standard project takes 4-8 weeks. Larger projects may take longer, depending on scope and revisions.",
    },
    {
      question: "What tools do you use for UI/UX design?",
      answer:
        "We use industry-standard tools including Figma for design and prototyping, Adobe Creative Suite for assets, and various user testing platforms to ensure the best user experience.",
    },
    {
      question: "How do you handle revisions?",
      answer:
        "We include multiple revision rounds in our process. Each project includes structured feedback sessions where we refine the design based on your input until we achieve the perfect result.",
    },
    {
      question: "Do you work with existing development teams?",
      answer:
        "Yes, we collaborate seamlessly with development teams. We provide detailed design specifications, assets, and ongoing support to ensure smooth implementation of the designs.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="flex flex-col min-h-dvh  gap-14 justify-center items-center text-center py-12">
      <SectionHeader
        headline={
          <p>
            FREQUENTLY ASKED <br /> QUESTIONS
          </p>
        }
      />
      <div className="space-y-0 max-w-3xl text-start">
        {faqData.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
}
