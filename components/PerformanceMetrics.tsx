"use client";

import { Code, Volume2, PenTool } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";

export function PerformanceMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <MetricCard
        icon={Code}
        title="Technical Accuracy"
        description="Depth of knowledge and correctness"
        score={92}
        color="green"
      />
      <MetricCard
        icon={Volume2}
        title="Communication Clarity"
        description="Articulating complex thoughts clearly"
        score={78}
        color="blue"
      />
      <MetricCard
        icon={PenTool}
        title="Interview Pace"
        description="Speed of response and time mgmt"
        score={84}
        color="orange"
      />
    </div>
  );
}
