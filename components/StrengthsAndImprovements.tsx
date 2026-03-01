"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, AlertCircle } from "lucide-react";

interface StrengthItem {
  category: string;
  description: string;
}

interface ImprovementItem {
  category: string;
  description: string;
}

const strengths: StrengthItem[] = [
  {
    category: "Architecture Knowledge",
    description: "Mastery of microservices patterns.",
  },
  {
    category: "Confidence",
    description: "Maintained strong eye contact and posture.",
  },
];

const improvements: ImprovementItem[] = [
  {
    category: "Fillers & Hesitation",
    description: "Used 'uh' and 'um' 12 times in 10 mins.",
  },
  {
    category: "Scalability Edge Cases",
    description: "Struggled with hot-key re-balancing.",
  },
];

export function StrengthsAndImprovements() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {/* Top Strengths */}
      <Card>
        <CardHeader>
          <CardTitle>Top Strengths</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {strengths.map((strength, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-1">
                  {strength.category}:
                </p>
                <p className="text-sm text-gray-600">{strength.description}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Areas for Improvement */}
      <Card>
        <CardHeader>
          <CardTitle>Areas for Improvement</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {improvements.map((improvement, index) => (
            <div key={index} className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-1">
                  {improvement.category}:
                </p>
                <p className="text-sm text-gray-600">{improvement.description}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
