"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AIInterviewerProfile() {
  return (
    <div className="flex items-center gap-4 mb-6">
      <Avatar className="h-16 w-16">
        <AvatarImage src="/ai-interviewer.png" alt="AI Interviewer" />
        <AvatarFallback className="bg-blue-100 text-blue-600 text-xl">
          AI
        </AvatarFallback>
      </Avatar>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">AI Interviewer</h3>
        <p className="text-sm text-gray-600">Software Engineering Lead</p>
      </div>
    </div>
  );
}
