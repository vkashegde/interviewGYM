"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function UpgradeCTA() {
  return (
    <Card className="bg-orange-50 border-orange-200">
      <CardContent className="p-4">
        <h3 className="text-xs font-bold text-orange-900 uppercase tracking-wide mb-2">
          NEED MORE?
        </h3>
        <p className="text-sm text-gray-700 mb-3">
          Get unlimited AI feedback with Premium.
        </p>
        <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white text-sm">
          Upgrade Now
        </Button>
      </CardContent>
    </Card>
  );
}
