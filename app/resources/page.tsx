import { Sidebar } from "@/components/Sidebar";
import { Construction } from "lucide-react";

export default function ResourcesPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 flex items-center justify-between px-8 py-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Resources</h1>
            <p className="text-sm text-gray-600 mt-1">
              Access learning materials, guides, and practice resources.
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto flex items-center justify-center p-8">
          <div className="text-center max-w-md">
            <div className="mb-6 flex justify-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                <Construction className="w-12 h-12 text-blue-600" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon</h2>
            <p className="text-lg text-gray-600 mb-2">
              We're working on something amazing!
            </p>
            <p className="text-sm text-gray-500">
              Resources section will be available soon with guides, tutorials, and practice materials.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
