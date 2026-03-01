"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select } from "@/components/ui/select";
import { SegmentedButton } from "@/components/SegmentedButton";
import { Tag } from "@/components/ui/tag";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const focusAreas = ["System Design", "Behavioral", "Data Structures"];

export function InterviewPreferencesCard() {
  const [difficulty, setDifficulty] = useState("Entry");
  const [areas, setAreas] = useState(focusAreas);

  const handleRemoveArea = (areaToRemove: string) => {
    setAreas(areas.filter((area) => area !== areaToRemove));
  };

  const handleAddArea = () => {
    // In a real app, this would open a modal or input
    const newArea = prompt("Enter focus area:");
    if (newArea && !areas.includes(newArea)) {
      setAreas([...areas, newArea]);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Interview Preferences</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* AI Interviewer Voice */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            AI Interviewer Voice
          </label>
          <Select defaultValue="jordan">
            <option value="jordan">Natural Male (Jordan)</option>
            <option value="sarah">Natural Female (Sarah)</option>
            <option value="david">Professional Male (David)</option>
            <option value="emma">Professional Female (Emma)</option>
          </Select>
        </div>

        {/* Interview Difficulty */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Interview Difficulty
          </label>
          <SegmentedButton
            options={[
              { value: "Entry", label: "Entry" },
              { value: "Mid-Level", label: "Mid-Level" },
              { value: "Senior", label: "Senior" },
            ]}
            value={difficulty}
            onChange={setDifficulty}
          />
        </div>

        {/* Core Focus Areas */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Core Focus Areas
          </label>
          <div className="flex flex-wrap gap-2 items-center">
            {areas.map((area) => (
              <Tag
                key={area}
                label={area}
                onRemove={() => handleRemoveArea(area)}
              />
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleAddArea}
              className="h-8"
            >
              <Plus className="mr-1 h-3 w-3" />
              Add Area
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
