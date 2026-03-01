"use client";

import { useEffect, useState } from "react";

export function AudioWaveform() {
  const [bars, setBars] = useState<number[]>([]);

  useEffect(() => {
    // Initialize bars
    const initialBars = Array.from({ length: 20 }, () => Math.random() * 100);
    setBars(initialBars);

    // Animate bars
    const interval = setInterval(() => {
      setBars((prev) =>
        prev.map(() => Math.random() * 60 + 20) // Bars between 20-80% height
      );
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-end justify-center gap-1.5 h-24 mb-4">
      {bars.map((height, index) => (
        <div
          key={index}
          className="w-2 bg-blue-600 rounded-full transition-all duration-150"
          style={{ height: `${height}%` }}
        />
      ))}
    </div>
  );
}
