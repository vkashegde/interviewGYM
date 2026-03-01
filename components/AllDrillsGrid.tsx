"use client";

import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, 
  Layers, 
  Database, 
  Cpu, 
  Network, 
  Lock, 
  GitBranch, 
  Cloud,
  Server,
  Zap,
  Shield,
  Globe,
  BookOpen
} from "lucide-react";
import { EmptyState } from "@/components/EmptyState";

export interface Drill {
  icon: typeof Code;
  title: string;
  modules: string;
  level: string;
  progress: number;
  color: "purple" | "orange" | "green" | "blue" | "red" | "yellow";
}

const allDrills: Drill[] = [
  {
    icon: Code,
    title: "Dynamic Programming",
    modules: "12 modules",
    level: "Advanced",
    progress: 25,
    color: "purple",
  },
  {
    icon: Layers,
    title: "Concurrency & Threads",
    modules: "8 modules",
    level: "Intermediate",
    progress: 30,
    color: "orange",
  },
  {
    icon: Database,
    title: "Database Sharding",
    modules: "5 modules",
    level: "Expert",
    progress: 20,
    color: "green",
  },
  {
    icon: Cpu,
    title: "System Architecture",
    modules: "15 modules",
    level: "Advanced",
    progress: 45,
    color: "blue",
  },
  {
    icon: Network,
    title: "Network Protocols",
    modules: "10 modules",
    level: "Intermediate",
    progress: 60,
    color: "purple",
  },
  {
    icon: Lock,
    title: "Security & Encryption",
    modules: "7 modules",
    level: "Expert",
    progress: 15,
    color: "red",
  },
  {
    icon: GitBranch,
    title: "Version Control",
    modules: "6 modules",
    level: "Entry",
    progress: 80,
    color: "green",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    modules: "14 modules",
    level: "Advanced",
    progress: 35,
    color: "blue",
  },
  {
    icon: Server,
    title: "Server Management",
    modules: "9 modules",
    level: "Intermediate",
    progress: 50,
    color: "orange",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    modules: "11 modules",
    level: "Advanced",
    progress: 40,
    color: "yellow",
  },
  {
    icon: Shield,
    title: "API Security",
    modules: "8 modules",
    level: "Expert",
    progress: 25,
    color: "red",
  },
  {
    icon: Globe,
    title: "Web Technologies",
    modules: "13 modules",
    level: "Intermediate",
    progress: 55,
    color: "blue",
  },
];

const colorClasses = {
  purple: "bg-purple-500",
  orange: "bg-orange-500",
  green: "bg-green-500",
  blue: "bg-blue-500",
  red: "bg-red-500",
  yellow: "bg-yellow-500",
};

const progressColors = {
  purple: "bg-purple-500",
  orange: "bg-orange-500",
  green: "bg-green-500",
  blue: "bg-blue-500",
  red: "bg-red-500",
  yellow: "bg-yellow-500",
};

interface AllDrillsGridProps {
  drills?: Drill[];
}

export function AllDrillsGrid({ drills = allDrills }: AllDrillsGridProps) {
  if (drills.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-gray-200">
        <EmptyState
          icon={BookOpen}
          title="No drills available"
          description="Drills will be available here once they are added to the platform."
        />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {drills.map((drill, index) => {
        const Icon = drill.icon;
        return (
          <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className={`w-12 h-12 ${colorClasses[drill.color]} rounded-lg flex items-center justify-center mb-4`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {drill.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {drill.modules} • {drill.level}
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Progress</span>
                  <span>{drill.progress}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${progressColors[drill.color]}`}
                    style={{ width: `${drill.progress}%` }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
