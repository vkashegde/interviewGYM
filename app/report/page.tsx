import { Sidebar } from "@/components/Sidebar";
import { ReportHeader } from "@/components/ReportHeader";
import { AISummaryCard } from "@/components/AISummaryCard";
import { OverallScoreCard } from "@/components/OverallScoreCard";
import { PerformanceMetrics } from "@/components/PerformanceMetrics";
import { InterviewTranscript } from "@/components/InterviewTranscript";
import { StrengthsAndImprovements } from "@/components/StrengthsAndImprovements";
import { ReadyToImproveCard } from "@/components/ReadyToImproveCard";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

export default function ReportPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 flex items-center justify-between px-8 py-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Performance Report</h1>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-6xl mx-auto">
            <ReportHeader />

            {/* Top Section: AI Summary and Overall Score */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="lg:col-span-2">
                <AISummaryCard />
              </div>
              <div>
                <OverallScoreCard />
              </div>
            </div>

            {/* Performance Metrics */}
            <PerformanceMetrics />

            {/* Interview Transcript */}
            <InterviewTranscript />

            {/* Strengths and Improvements */}
            <StrengthsAndImprovements />

            {/* Ready to Improve Card */}
            <ReadyToImproveCard />

            {/* Retry Button */}
            <div className="flex justify-center mb-8">
              <Button
                size="lg"
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-base h-auto"
              >
                <RefreshCw className="mr-2 h-5 w-5" />
                Retry Mock Interview
              </Button>
            </div>

            {/* Footer */}
            <footer className="text-center text-sm text-gray-500 py-6 border-t border-gray-200">
              <p>© 2024 InterviewGym AI • Private Performance Data</p>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
