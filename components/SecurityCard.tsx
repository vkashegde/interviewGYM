"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { ChevronRight } from "lucide-react";

export function SecurityCard() {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Security</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Change Password */}
        <button className="w-full flex items-center justify-between py-2 hover:bg-gray-50 rounded-lg px-2 -mx-2 transition-colors">
          <span className="text-sm font-medium text-gray-900">Change Password</span>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </button>

        {/* Two-Factor Auth */}
        <div className="flex items-center justify-between py-2">
          <div>
            <div className="text-sm font-medium text-gray-900">Two-Factor Auth</div>
            <div className="text-xs text-gray-500 mt-0.5">Secure your account</div>
          </div>
          <Switch checked={twoFactorEnabled} onCheckedChange={setTwoFactorEnabled} />
        </div>
      </CardContent>
    </Card>
  );
}
