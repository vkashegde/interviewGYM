"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen?: boolean;
  onToggle?: () => void;
}

export function AccordionItem({ question, answer, isOpen = false, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="text-base font-medium text-gray-900 pr-4">{question}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-gray-500 flex-shrink-0 transition-transform",
            isOpen && "transform rotate-180"
          )}
        />
      </button>
      {isOpen && (
        <div className="pb-4 text-sm text-gray-600 leading-relaxed">{answer}</div>
      )}
    </div>
  );
}

interface AccordionProps {
  children: React.ReactNode;
  className?: string;
}

export function Accordion({ children, className }: AccordionProps) {
  return <div className={cn("space-y-0", className)}>{children}</div>;
}
