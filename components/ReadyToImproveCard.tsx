"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ReadyToImproveCard() {
  return (
    <Card className="bg-blue-600 text-white border-0 mb-8">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">Ready to improve?</h3>
        <p className="text-sm opacity-90 mb-4">
          We've generated a custom learning path based on your 'hot-key' knowledge gap.
        </p>
        <Button className="bg-white text-blue-600 hover:bg-gray-100">
          Start Learning Path
        </Button>
      </CardContent>
    </Card>
  );
}
