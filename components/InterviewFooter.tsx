"use client";

import { Menu, Mic, PhoneOff, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function InterviewFooter() {
  const [isMuted, setIsMuted] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);

  return (
    <>
      <footer className="bg-white border-t border-gray-200 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Button
            variant="outline"
            onClick={() => setShowTranscript(!showTranscript)}
            className="flex items-center gap-2"
          >
            <Menu className="w-4 h-4" />
            Transcript
          </Button>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className={`p-3 rounded-full transition-colors ${
                isMuted ? "bg-red-100 text-red-600" : "bg-blue-100 text-blue-600"
              }`}
            >
              <Mic className="w-5 h-5" />
            </button>

            <Button
              variant="destructive"
              className="bg-red-600 hover:bg-red-700 text-white px-6"
            >
              <PhoneOff className="w-4 h-4 mr-2" />
              End Session
            </Button>

            <button className="p-3 hover:bg-gray-100 rounded-full transition-colors">
              <Volume2 className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        <p className="text-xs text-gray-600 text-center mt-3">
          Your response is being recorded for feedback. All data is encrypted and private.
        </p>
      </footer>
    </>
  );
}
