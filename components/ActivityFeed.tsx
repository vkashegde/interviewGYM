"use client";

import { CheckCircle2, Award, Clock, Activity } from "lucide-react";
import { EmptyState } from "@/components/EmptyState";

interface ActivityItem {
  icon: typeof CheckCircle2;
  title: string;
  time: string;
  description: string;
  iconColor: string;
  bgColor: string;
}

interface ActivityFeedProps {
  activities?: ActivityItem[];
}

const defaultActivities: ActivityItem[] = [
  {
    icon: CheckCircle2,
    title: "Mock Session Completed",
    time: "Yesterday at 4:30 PM",
    description: "Feedback received: 'Strong coding skills, needs better time estimation.'",
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Award,
    title: "New Badge Earned",
    time: "2 days ago",
    description: "Consistency King: 7-day streak!",
    iconColor: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Clock,
    title: "Interview Scheduled",
    time: "3 days ago",
    description: "Coming soon",
    iconColor: "text-gray-600",
    bgColor: "bg-gray-50",
  },
];

export function ActivityFeed({ activities = defaultActivities }: ActivityFeedProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Activity Feed</h2>
      {activities.length === 0 ? (
        <div className="bg-white rounded-lg border border-gray-200">
          <EmptyState
            icon={Activity}
            title="No activity yet"
            description="Your recent activities and achievements will appear here once you start practicing."
          />
        </div>
      ) : (
        <div className="space-y-4">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <div key={index} className="flex gap-4">
                <div className={`w-10 h-10 ${activity.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-5 h-5 ${activity.iconColor}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-sm font-semibold text-gray-900">
                      {activity.title}
                    </h3>
                    <span className="text-xs text-gray-500">{activity.time}</span>
                  </div>
                  {activity.description && (
                    <p className="text-sm text-gray-600">{activity.description}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
