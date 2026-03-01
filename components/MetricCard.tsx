"use client";

import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  score: number;
  color: "green" | "blue" | "orange";
}

const colorClasses = {
  green: {
    icon: "bg-green-100 text-green-600",
    progress: "bg-green-500",
  },
  blue: {
    icon: "bg-blue-100 text-blue-600",
    progress: "bg-blue-500",
  },
  orange: {
    icon: "bg-orange-100 text-orange-600",
    progress: "bg-orange-500",
  },
};

export function MetricCard({ icon: Icon, title, description, score, color }: MetricCardProps) {
  const colors = colorClasses[color];

  return (
    <Card>
      <CardContent className="p-6">
        <div className={`w-12 h-12 ${colors.icon} rounded-lg flex items-center justify-center mb-4`}>
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-gray-900">{score}%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full ${colors.progress} transition-all duration-500`}
              style={{ width: `${score}%` }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
