"use client";

import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor?: string;
}

export function CategoryCard({ icon: Icon, title, description, iconColor = "text-orange-600" }: CategoryCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
      <CardContent className="p-6">
        <div className={`w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-4`}>
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}
