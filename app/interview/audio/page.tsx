"use client";

import { InterviewHeader } from "@/components/InterviewHeader";
import { InterviewFooter } from "@/components/InterviewFooter";
import { AudioWaveform } from "@/components/AudioWaveform";
import { Badge } from "@/components/ui/badge";

export default function AudioInterviewPage() {
  const currentQuestion =
    "Can you describe a time you had to manage a difficult stakeholder and how you handled it?";

  return (
    <div className="flex flex-col h-screen bg-white">
      <InterviewHeader />

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        {/* Audio Waveform */}
        <AudioWaveform />

        {/* Listening Indicator */}
        <p className="text-sm text-gray-400 mb-8">AI IS LISTENING...</p>

        {/* Current Question Badge */}
        <Badge
          variant="outline"
          className="mb-4 bg-gray-50 text-gray-600 border-gray-200"
        >
          CURRENT QUESTION
        </Badge>

        {/* Question Text */}
        <div className="max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed">
            {currentQuestion}
          </h2>
        </div>
      </main>

      <InterviewFooter />
    </div>
  );
}
