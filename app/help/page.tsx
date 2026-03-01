import { Sidebar } from "@/components/Sidebar";
import { HelpSearchBar } from "@/components/HelpSearchBar";
import { FeaturedCategories } from "@/components/FeaturedCategories";
import { FAQSection } from "@/components/FAQSection";
import { SupportSidebar } from "@/components/SupportSidebar";
import { HelpFooter } from "@/components/HelpFooter";

export default function HelpPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Main Content */}
              <div className="lg:col-span-2">
                {/* Header */}
                <div className="text-center mb-8">
                  <h1 className="text-4xl font-bold text-gray-900 mb-3">
                    How can we help you today?
                  </h1>
                  <p className="text-lg text-gray-600">
                    Search our knowledge base or browse categories below to find what you need.
                  </p>
                </div>

                {/* Search Bar */}
                <HelpSearchBar />

                {/* Featured Categories */}
                <FeaturedCategories />

                {/* FAQ Section */}
                <FAQSection />

                {/* Footer Links */}
                <HelpFooter />
              </div>

              {/* Right Column - Support Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  <SupportSidebar />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
