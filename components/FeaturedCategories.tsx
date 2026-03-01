"use client";

import { Rocket, Lightbulb, FileText, Settings } from "lucide-react";
import { CategoryCard } from "@/components/CategoryCard";

export function FeaturedCategories() {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-2 mb-6">
        <Rocket className="h-5 w-5 text-orange-600" />
        <h2 className="text-xl font-bold text-gray-900">Featured Categories</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <CategoryCard
          icon={Rocket}
          title="Getting Started"
          description="Everything you need to know to set up your profile and start practicing."
        />
        <CategoryCard
          icon={Lightbulb}
          title="Interview Tips"
          description="Expert strategies for behavioral, technical, and executive interviews."
        />
        <CategoryCard
          icon={FileText}
          title="Account & Billing"
          description="Manage your subscription, update payment methods, and view invoices."
        />
        <CategoryCard
          icon={Settings}
          title="Technical Support"
          description="Troubleshooting video issues, audio lag, and browser compatibility."
        />
      </div>
    </div>
  );
}
