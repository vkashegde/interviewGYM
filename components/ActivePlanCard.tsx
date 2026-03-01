"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function ActivePlanCard() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <Badge className="mb-3 bg-blue-100 text-blue-700 border-blue-200 uppercase">
              Active Plan
            </Badge>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional Plan</h3>
            <p className="text-sm text-gray-600">
              Your next billing date is October 12, 2024.
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">Manage Billing</Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Upgrade
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
