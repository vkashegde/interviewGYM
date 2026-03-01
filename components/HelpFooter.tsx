"use client";

export function HelpFooter() {
  return (
    <div className="mt-16 pt-8 border-t border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Latest Updates */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
            Latest Updates
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                New: Executive Presence AI
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                v2.4 Platform Release Notes
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Updated Data Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
            Resources
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Interview Readiness Quiz
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Salary Negotiation Guide
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Resume Optimization Tips
              </a>
            </li>
          </ul>
        </div>

        {/* Popular Articles */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
            Popular Articles
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Mastering the 'STAR' Method
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Remote Interview Tech Setup
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Overcoming Interview Anxiety
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
