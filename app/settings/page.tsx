import { Sidebar } from "@/components/Sidebar";
import { ProfileCard } from "@/components/ProfileCard";
import { InterviewPreferencesCard } from "@/components/InterviewPreferencesCard";
import { SecurityCard } from "@/components/SecurityCard";
import { NotificationsCard } from "@/components/NotificationsCard";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function SettingsPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 flex items-center justify-between px-8 py-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
            <p className="text-sm text-gray-600 mt-1">
              Manage your account and preferences.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <Avatar className="h-10 w-10">
              <AvatarImage src="/avatar.png" alt="Alex Johnson" />
              <AvatarFallback className="bg-orange-100 text-orange-600">
                AJ
              </AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-5xl mx-auto space-y-6">
            {/* Profile Information */}
            <ProfileCard />

            {/* Interview Preferences */}
            <InterviewPreferencesCard />

            {/* Security and Notifications - Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SecurityCard />
              <NotificationsCard />
            </div>

            {/* Bottom Action Buttons */}
            <div className="flex justify-end gap-4 pt-6 border-t border-gray-200">
              <Button variant="outline" className="px-6">
                Discard
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
                Save Changes
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
