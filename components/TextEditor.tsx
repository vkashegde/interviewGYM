"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mic, ArrowRight, Info } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TextEditorProps {
  onSave?: (content: string) => void;
  onSubmit?: (content: string) => void;
}

export function TextEditor({ onSave, onSubmit }: TextEditorProps) {
  const [activeTab, setActiveTab] = useState("explanation");
  const [explanation, setExplanation] = useState("");
  const [code, setCode] = useState("");
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [isListening, setIsListening] = useState(false);
  const saveIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Auto-save every 2 seconds
    saveIntervalRef.current = setInterval(() => {
      const content = activeTab === "explanation" ? explanation : code;
      if (content.trim()) {
        onSave?.(content);
        setLastSaved(new Date());
      }
    }, 2000);

    return () => {
      if (saveIntervalRef.current) {
        clearInterval(saveIntervalRef.current);
      }
    };
  }, [explanation, code, activeTab, onSave]);

  const handleSubmit = () => {
    const content = activeTab === "explanation" ? explanation : code;
    onSubmit?.(content);
  };

  const currentContent = activeTab === "explanation" ? explanation : code;
  const setCurrentContent = activeTab === "explanation" ? setExplanation : setCode;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 h-full flex flex-col">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
        <TabsList className="mb-4">
          <TabsTrigger value="explanation">Explanation</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="explanation" className="flex-1 flex flex-col">
          <textarea
            value={explanation}
            onChange={(e) => setExplanation(e.target.value)}
            placeholder="Type your detailed explanation here..."
            className="flex-1 w-full p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </TabsContent>

        <TabsContent value="code" className="flex-1 flex flex-col">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Type your code here..."
            className="flex-1 w-full p-4 border border-gray-300 rounded-lg resize-none font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </TabsContent>
      </Tabs>

      <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {lastSaved && (() => {
            const secondsAgo = Math.floor((Date.now() - lastSaved.getTime()) / 1000);
            const timeText = secondsAgo < 5 ? "Just now" : `${secondsAgo}s ago`;
            return (
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <Info className="w-4 h-4" />
                <span>Autosaved {timeText}</span>
              </div>
            );
          })()}

          <button
            onClick={() => setIsListening(!isListening)}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
              isListening
                ? "bg-blue-100 text-blue-600"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            <Mic className="w-4 h-4" />
            {isListening ? "LISTENING FOR THOUGHTS..." : "Voice Input"}
          </button>
        </div>

        <Button
          onClick={handleSubmit}
          disabled={!currentContent.trim()}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          Submit Answer
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}
