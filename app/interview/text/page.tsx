"use client";

import { Sidebar } from "@/components/Sidebar";
import { InterviewProgress } from "@/components/InterviewProgress";
import { QuestionPanel } from "@/components/QuestionPanel";
import { TextEditor } from "@/components/TextEditor";

export default function TextInterviewPage() {
  const currentQuestion = 3;
  const totalQuestions = 10;
  const interviewType = "System Design Interview";

  const question =
    "Can you explain how you would optimize a slow database query in a production environment?";
  const hint =
    "Think about the steps from identifying the bottleneck to implementing the fix. Consider aspects like indexing, query structure, and server-side configurations.";
  const tags = ["Databases", "Optimization", "Production"];

  const handleSave = (content: string) => {
    // Handle autosave
    // Autosave logic would go here
  };

  const handleSubmit = (content: string) => {
    // Handle answer submission
    // Navigate to next question or show feedback
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <InterviewProgress
          currentQuestion={currentQuestion}
          totalQuestions={totalQuestions}
          interviewType={interviewType}
        />

        <main className="flex-1 overflow-hidden p-8">
          <div className="max-w-7xl mx-auto h-full grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Panel - Question */}
            <QuestionPanel question={question} hint={hint} tags={tags} />

            {/* Right Panel - Text Editor */}
            <TextEditor onSave={handleSave} onSubmit={handleSubmit} />
          </div>
        </main>
      </div>
    </div>
  );
}
