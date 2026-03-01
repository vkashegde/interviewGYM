"use client";

import Link from "next/link";
import { Settings, HelpCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function InterviewHeader() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
          <span className="text-white font-bold text-xl">X</span>
        </div>
        <span className="text-lg font-semibold text-gray-900">InterviewGym</span>
      </Link>

      <div className="flex items-center gap-4">
        <Badge className="bg-blue-600 text-white border-0 flex items-center gap-2 px-3 py-1.5">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
          SESSION LIVE
        </Badge>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Settings className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <HelpCircle className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </header>
  );
}
