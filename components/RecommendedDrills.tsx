"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Layers, Database, Target } from "lucide-react";
import { EmptyState } from "@/components/EmptyState";

interface Drill {
  icon: typeof Code;
  title: string;
  modules: string;
  level: string;
  progress: number;
  color: "purple" | "orange" | "green" | "blue" | "red" | "yellow";
}

interface RecommendedDrillsProps {
  drills?: Drill[];
}

const defaultDrills: Drill[] = [
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

export function RecommendedDrills({ drills = defaultDrills }: RecommendedDrillsProps) {
  const router = useRouter();

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-900">Recommended Drills</h2>
        {drills.length > 0 && (
          <Link 
            href="/drills"
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            View All Drills
          </Link>
        )}
      </div>

      {drills.length === 0 ? (
        <div className="bg-white rounded-lg border border-gray-200">
          <EmptyState
            icon={Target}
            title="No recommended drills"
            description="Complete some interviews to get personalized drill recommendations based on your performance."
            actionLabel="Browse All Drills"
            onAction={() => router.push("/drills")}
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {drills.map((drill, index) => {
            const Icon = drill.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className={`w-10 h-10 ${colorClasses[drill.color as keyof typeof colorClasses]} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {drill.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {drill.modules} • {drill.level}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>Progress</span>
                      <span>{drill.progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${progressColors[drill.color as keyof typeof progressColors]}`}
                        style={{ width: `${drill.progress}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
