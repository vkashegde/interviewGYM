"use client";

import { cn } from "@/lib/utils";

interface SegmentedButtonOption {
  value: string;
  label: string;
}

interface SegmentedButtonProps {
  options: SegmentedButtonOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function SegmentedButton({
  options,
  value,
  onChange,
  className,
}: SegmentedButtonProps) {
  return (
    <div className={cn("inline-flex rounded-lg border border-gray-300 bg-white p-1", className)}>
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={cn(
            "px-4 py-2 text-sm font-medium rounded-md transition-colors",
            value === option.value
              ? "bg-blue-600 text-white shadow-sm"
              : "text-gray-700 hover:bg-gray-50"
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
