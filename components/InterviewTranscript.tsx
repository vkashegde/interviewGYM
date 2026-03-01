"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThumbsUp, AlertCircle } from "lucide-react";

interface TranscriptEntry {
  speaker: "interviewer" | "user";
  text: string;
  timestamp: string;
  insights?: {
    type: "strength" | "improvement";
    text: string;
  };
}

const transcriptData: TranscriptEntry[] = [
  {
    speaker: "interviewer",
    text: "Can you walk me through how you would design a distributed system for handling millions of requests per second?",
    timestamp: "00:15",
  },
  {
    speaker: "user",
    text: "I'd start with a load balancer to distribute traffic across multiple servers. Then I'd use a consistent hashing algorithm to shard the data across database nodes. For caching, I'd implement a multi-layer cache with Redis at the edge and in-memory caches closer to the application servers. The key consideration is latency - we need to minimize round trips.",
    timestamp: "00:32",
    insights: {
      type: "strength",
      text: "STRENGTH: EXCELLENT MENTION OF LATENCY & CONSISTENT HASHING",
    },
  },
  {
    speaker: "interviewer",
    text: "What happens when a shard becomes a hot key?",
    timestamp: "02:45",
  },
  {
    speaker: "user",
    text: "Uh, well, we could... um, maybe add more replicas? Or use some kind of dynamic resharding? I'm not entirely sure about the best approach here.",
    timestamp: "03:12",
    insights: {
      type: "improvement",
      text: "IMPROVEMENT: RESEARCH 'DYNAMIC RESHARDING' AND 'CACHING LAYERS'",
    },
  },
];

export function InterviewTranscript() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Interview Transcript</CardTitle>
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            Filter: AI Insights
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {transcriptData.map((entry, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold text-gray-500 uppercase">
                {entry.speaker === "interviewer" ? "Interviewer" : "You"}
              </span>
              <span className="text-xs text-gray-400">{entry.timestamp}</span>
            </div>
            <div
              className={`p-4 rounded-lg ${
                entry.speaker === "interviewer"
                  ? "bg-gray-50 text-gray-900"
                  : "bg-blue-50 text-gray-900 border border-blue-200"
              }`}
            >
              <p className="text-sm leading-relaxed">{entry.text}</p>
            </div>
            {entry.insights && (
              <div
                className={`p-4 rounded-lg flex items-start gap-3 border-2 ${
                  entry.insights.type === "strength"
                    ? "bg-green-50 border-green-300"
                    : "bg-red-50 border-red-300"
                }`}
              >
                {entry.insights.type === "strength" ? (
                  <ThumbsUp className="h-5 w-5 text-green-700 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-red-700 flex-shrink-0 mt-0.5" />
                )}
                <div className="flex-1">
                  <p
                    className={`text-sm font-bold ${
                      entry.insights.type === "strength"
                        ? "text-green-800"
                        : "text-red-800"
                    }`}
                  >
                    {entry.insights.text}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
