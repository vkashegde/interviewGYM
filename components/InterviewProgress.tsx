"use client";

import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { PhoneOff } from "lucide-react";
import { useState, useEffect } from "react";

interface InterviewProgressProps {
  currentQuestion: number;
  totalQuestions: number;
  interviewType: string;
}

export function InterviewProgress({
  currentQuestion,
  totalQuestions,
  interviewType,
}: InterviewProgressProps) {
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="bg-white border-b border-gray-200 px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-lg font-semibold text-gray-900">{interviewType}</h2>
            <span className="text-sm text-gray-600">
              Question {currentQuestion} of {totalQuestions}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="flex items-center gap-4">
          <div className="text-lg font-mono text-gray-900">{formatTime(timeElapsed)}</div>
          <Button
            variant="destructive"
            size="sm"
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            <PhoneOff className="w-4 h-4 mr-2" />
            End Session
          </Button>
        </div>
      </div>
    </div>
  );
}
