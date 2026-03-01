"use client";

import { cn } from "@/lib/utils";

type Status = "Completed" | "Scheduled" | "In Progress";

interface StatusBadgeProps {
  status: Status;
  className?: string;
}

const statusStyles: Record<Status, string> = {
  Completed: "bg-green-100 text-green-700 border-green-200",
  Scheduled: "bg-blue-100 text-blue-700 border-blue-200",
  "In Progress": "bg-yellow-100 text-yellow-700 border-yellow-200",
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border",
        statusStyles[status],
        className
      )}
    >
      {status}
    </span>
  );
}
