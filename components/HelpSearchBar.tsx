"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function HelpSearchBar() {
  return (
    <div className="max-w-2xl mx-auto mb-12">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <Input
          type="search"
          placeholder="Search for help, articles, or tutorials..."
          className="pl-12 h-14 text-base"
        />
      </div>
    </div>
  );
}
