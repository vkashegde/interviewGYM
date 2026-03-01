"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Users, FileText } from "lucide-react";

export function SupportSidebar() {
  return (
    <div className="space-y-6">
      {/* Still Need Help Card */}
      <Card className="bg-blue-900 text-white border-0">
        <CardContent className="p-6">
          <h3 className="text-lg font-bold mb-3">Still need help?</h3>
          <p className="text-sm opacity-90 mb-6">
            Our support team is available Monday through Friday, 9am-6pm EST. We typically respond within 2 hours.
          </p>
          <div className="space-y-3">
            <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
              <MessageCircle className="w-4 h-4 mr-2" />
              Live Chat
            </Button>
            <Button variant="outline" className="w-full bg-gray-800 text-white border-gray-700 hover:bg-gray-700">
              <Mail className="w-4 h-4 mr-2" />
              Email Support
            </Button>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-700">
            <p className="text-xs font-semibold uppercase tracking-wide mb-3 opacity-75">
              JOIN OUR COMMUNITY
            </p>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity">
                <Users className="w-4 h-4" />
                <span>Community</span>
              </button>
              <button className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity">
                <FileText className="w-4 h-4" />
                <span>Resources</span>
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
