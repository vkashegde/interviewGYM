import { Sidebar } from "@/components/Sidebar";
import { AllDrillsGrid } from "@/components/AllDrillsGrid";

export default function DrillsPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 flex items-center justify-between px-8 py-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">All Drills</h1>
            <p className="text-sm text-gray-600 mt-1">
              Explore all available practice drills to improve your interview skills.
            </p>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto">
            <AllDrillsGrid />
          </div>
        </main>
      </div>
    </div>
  );
}
