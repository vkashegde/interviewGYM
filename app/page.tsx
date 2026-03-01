"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { WelcomeSection } from "@/components/WelcomeSection";
import { RecommendedDrills } from "@/components/RecommendedDrills";
import { ActivityFeed } from "@/components/ActivityFeed";
import { NewSessionModal, SessionData } from "@/components/NewSessionModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleStartSession = (data: SessionData) => {
    console.log("Starting session with:", data);
    // Navigate to appropriate interview page based on mode
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
        <Header onNewSessionClick={() => setIsModalOpen(true)} />
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto">
            <WelcomeSection />
            <RecommendedDrills />
            <ActivityFeed />
            
            {/* Footer */}
            <footer className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
              <p className="text-center sm:text-left">© 2024 InterviewGym. All practice sessions are recorded for your review.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-gray-700">Support</a>
                <a href="#" className="hover:text-gray-700">Help Center</a>
                <a href="#" className="hover:text-gray-700">Privacy Policy</a>
              </div>
            </footer>
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
