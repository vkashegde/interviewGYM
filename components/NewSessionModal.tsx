"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Info, ArrowRight } from "lucide-react";
import { SegmentedButton } from "@/components/SegmentedButton";

interface NewSessionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onStartSession?: (data: SessionData) => void;
}

export interface SessionData {
  topic: string;
  roleType: string;
  difficulty: string;
  mode: "voice" | "text";
}

export function NewSessionModal({ open, onOpenChange, onStartSession }: NewSessionModalProps) {
  const [topic, setTopic] = useState("");
  const [roleType, setRoleType] = useState("");
  const [difficulty, setDifficulty] = useState("Entry");
  const [mode, setMode] = useState<"voice" | "text">("voice");

  const handleStart = () => {
    if (topic && roleType) {
      onStartSession?.({
        topic,
        roleType,
        difficulty,
        mode,
      });
      // Reset form
      setTopic("");
      setRoleType("");
      setDifficulty("Entry");
      setMode("voice");
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent onClose={() => onOpenChange(false)}>
        <DialogHeader>
          <DialogTitle>Start New Mock Interview</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Interview Topic */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Interview Topic
            </label>
            <Select
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            >
              <option value="">Select topic</option>
              <option value="system-design">System Design</option>
              <option value="data-structures">Data Structures & Algorithms</option>
              <option value="backend">Backend Engineering</option>
              <option value="frontend">Frontend Development</option>
              <option value="fullstack">Full Stack Development</option>
              <option value="behavioral">Behavioral Interview</option>
              <option value="database">Database Design</option>
              <option value="api-design">API Design</option>
            </Select>
            <p className="text-xs text-gray-600 mt-1">
              Choose the core focus of your practice session.
            </p>
          </div>

          {/* Role Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Role Type
            </label>
            <Select
              value={roleType}
              onChange={(e) => setRoleType(e.target.value)}
            >
              <option value="">Select target role</option>
              <option value="sde-1">Software Engineer I</option>
              <option value="sde-2">Software Engineer II</option>
              <option value="senior-sde">Senior Software Engineer</option>
              <option value="staff-sde">Staff Software Engineer</option>
              <option value="principal-sde">Principal Software Engineer</option>
              <option value="tech-lead">Tech Lead</option>
              <option value="engineering-manager">Engineering Manager</option>
            </Select>
          </div>

          {/* Difficulty Level */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Difficulty Level
            </label>
            <SegmentedButton
              options={[
                { value: "Entry", label: "Entry" },
                { value: "Mid-Level", label: "Mid-Level" },
                { value: "Senior", label: "Senior" },
              ]}
              value={difficulty}
              onChange={setDifficulty}
            />
          </div>

          {/* Interview Mode */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mode
            </label>
            <SegmentedButton
              options={[
                { value: "voice", label: "Voice" },
                { value: "text", label: "Text" },
              ]}
              value={mode}
              onChange={(value) => setMode(value as "voice" | "text")}
            />
          </div>

          {/* Information Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-blue-900">
              Your session will last approximately 45 minutes. Ensure you are in a quiet environment with a stable internet connection.
            </p>
          </div>

          {/* Start Session Button */}
          <Button
            onClick={handleStart}
            disabled={!topic || !roleType}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-base"
          >
            Start Session
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>

          {/* Disclaimer */}
          <p className="text-xs text-gray-500 text-center">
            By starting, you agree to our{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Session Guidelines
            </a>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
