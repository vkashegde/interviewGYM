"use client";

import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { SessionsTable } from "@/components/SessionsTable";
import { NewSessionModal, SessionData } from "@/components/NewSessionModal";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SessionsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleStartSession = (data: SessionData) => {
    // Handle session start - navigate to appropriate interview page based on mode
    console.log("Starting session with:", data);
    if (data.mode === "voice") {
      router.push(`/interview/audio?topic=${data.topic}&role=${data.roleType}&difficulty=${data.difficulty}`);
    } else {
      router.push(`/interview/text?topic=${data.topic}&role=${data.roleType}&difficulty=${data.difficulty}`);
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 flex items-center justify-between px-8 py-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Sessions</h1>
            <p className="text-sm text-gray-600 mt-1">
              Manage and review your interview practice sessions.
            </p>
          </div>
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Plus className="mr-2 h-4 w-4" />
            New Session
          </Button>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto">
            <SessionsTable onNewSession={() => setIsModalOpen(true)} />

            {/* Schedule Another Session Button - Only show if there are sessions */}
            <div className="mt-8 flex justify-center">
              <Button
                onClick={() => setIsModalOpen(true)}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base h-auto"
              >
                <Plus className="mr-2 h-5 w-5" />
                Schedule Another Session
              </Button>
            </div>
          </div>
        </main>
      </div>

      {/* New Session Modal */}
      <NewSessionModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        onStartSession={handleStartSession}
      />
    </div>
  );
}
