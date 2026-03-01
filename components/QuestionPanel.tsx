"use client";

import { AIInterviewerProfile } from "@/components/AIInterviewerProfile";
import { Badge } from "@/components/ui/badge";

interface QuestionPanelProps {
  question: string;
  hint?: string;
  tags?: string[];
}

export function QuestionPanel({ question, hint, tags = [] }: QuestionPanelProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 h-full">
      <AIInterviewerProfile />

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 leading-relaxed">{question}</h2>

        {hint && (
          <p className="text-sm text-gray-600 leading-relaxed">{hint}</p>
        )}

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-gray-50 text-gray-700 border-gray-200"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
