"use client";

import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

export function OverallScoreCard() {
  return (
    <Card className="bg-blue-600 text-white border-0 mb-6">
      <CardContent className="p-6">
        <p className="text-xs font-semibold uppercase tracking-wide mb-4 opacity-90">
          Overall Score
        </p>
        <div className="flex items-baseline gap-3 mb-4">
          <span className="text-5xl font-bold">85</span>
          <span className="text-2xl font-medium opacity-80">/100</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <TrendingUp className="h-4 w-4" />
          <span className="opacity-90">+5.2% vs last attempt</span>
        </div>
      </CardContent>
    </Card>
  );
}
