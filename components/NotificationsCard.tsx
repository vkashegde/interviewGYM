"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Mail, Bell } from "lucide-react";

export function NotificationsCard() {
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [browserPopups, setBrowserPopups] = useState(false);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Email Alerts */}
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-gray-400" />
            <span className="text-sm font-medium text-gray-900">Email Alerts</span>
          </div>
          <Switch checked={emailAlerts} onCheckedChange={setEmailAlerts} />
        </div>

        {/* Browser Popups */}
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-3">
            <Bell className="h-5 w-5 text-gray-400" />
            <span className="text-sm font-medium text-gray-900">Browser Popups</span>
          </div>
          <Switch checked={browserPopups} onCheckedChange={setBrowserPopups} />
        </div>
      </CardContent>
    </Card>
  );
}
