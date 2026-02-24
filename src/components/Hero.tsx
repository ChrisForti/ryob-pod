export default function Hero() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Card */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Content */}
            <div className="p-8 md:p-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Premium Yacht Merch
                <span className="block text-primary-600 mt-2">
                  Customized for Your Crew
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                High-performance apparel designed for sport fishing
                professionals. Add your boat name, captain branding, or team
                logos to premium gear.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition shadow-sm">
                  Start Customizing
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-primary-600 hover:text-primary-600 transition">
                  View Catalog
                </button>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative h-64 md:h-full min-h-100 bg-linear-to-br from-primary-100 to-primary-50">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  {/* Placeholder for hero image */}
                  <svg
                    className="w-32 h-32 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-sm">Hero image placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
