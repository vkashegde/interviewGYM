"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Camera } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ProfileCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Avatar Section */}
        <div className="flex items-center gap-6">
          <div className="relative">
            <Avatar className="h-20 w-20">
              <AvatarImage src="/avatar.png" alt="Alex Johnson" />
              <AvatarFallback className="bg-orange-100 text-orange-600 text-xl">
                AJ
              </AvatarFallback>
            </Avatar>
            <button className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 transition-colors shadow-lg">
              <Camera className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">
              Full Name
            </label>
            <Input defaultValue="Alex Johnson" />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">
              Professional Title
            </label>
            <Input defaultValue="SDE-II Candidate" />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">
              Email Address
            </label>
            <Input type="email" defaultValue="alex.j@example.com" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
