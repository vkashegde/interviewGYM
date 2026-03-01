"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export function AISummaryCard() {
  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-blue-50 rounded-lg">
            <Sparkles className="h-5 w-5 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-gray-900 mb-2">AI Summary:</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Your performance was exceptional in technical architecture. You articulated trade-offs clearly between SQL and NoSQL. Communication was steady, though you tended to talk faster during the API design segment. Focus on deliberate pauses to allow the interviewer to interject.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
