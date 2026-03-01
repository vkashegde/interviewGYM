"use client";

import { Video, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function WelcomeSection() {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Alex</h2>
      <p className="text-gray-600 mb-6">
        You have 12 days left until your scheduled Meta interview.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Session Card */}
        <Card className="border-l-4 border-l-blue-500">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2">
                  Upcoming Session
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  System Design Deep-Dive
                </h3>
                <p className="text-sm text-gray-600">
                  Today at 3:00 PM • With Senior Engineer Sarah K.
                </p>
              </div>
              <button className="p-2 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                <div className="relative">
                  <Video className="w-5 h-5 text-blue-600" />
                  <Plus className="w-3 h-3 text-blue-600 absolute -top-1 -right-1" />
                </div>
              </button>
            </div>
            <div className="flex gap-4 mt-6">
              <Button className="flex-1">Join Call</Button>
              <Button variant="outline" className="flex-1">
                Reschedule
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Overall Performance Card */}
        <Card>
          <CardContent className="p-6">
            <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-4">
              Overall Performance
            </p>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-4xl font-bold text-gray-900">84%</span>
              <span className="text-sm font-medium text-green-600 flex items-center gap-1">
                <span>↑</span>
                +4.2%
              </span>
            </div>
            
            {/* Bar Chart */}
            <div className="flex items-end gap-2 h-24 mb-4">
              {[20, 35, 45, 50, 55, 75, 84].map((height, index) => (
                <div
                  key={index}
                  className="flex-1 bg-gray-200 rounded-t"
                  style={{
                    height: `${height}%`,
                    backgroundColor: index >= 5 ? "#3b82f6" : "#e5e7eb",
                  }}
                />
              ))}
            </div>
            
            <p className="text-sm text-gray-600">
              Higher than 78% of SDE-II candidates this month.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
