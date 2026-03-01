"use client";

import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface TagProps {
  label: string;
  onRemove?: () => void;
  className?: string;
}

export function Tag({ label, onRemove, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700",
        className
      )}
    >
      {label}
      {onRemove && (
        <button
          onClick={onRemove}
          className="hover:bg-blue-200 rounded-full p-0.5 transition-colors"
          type="button"
        >
          <X className="h-3 w-3" />
        </button>
      )}
    </span>
  );
}
