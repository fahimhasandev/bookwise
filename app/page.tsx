import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
        <div className="container max-auto px-4 py-4 ">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-linear-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">B</span>
              </div>
              <span className="text-2xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                BookWise
              </span>
            </Link>
            <div className="flex items-center space-x-6">
              <Link
                href="/login"
                className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-6 py-2.5 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
              >
                Get Started Free
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <div className="inline-block mb-6 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold shadow-sm">
            📚 Over 1000+ Book Summaries Available
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-tight">
            Learn from the best books in
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              just 15 minutes
            </span>
          </h1>
          <p className="text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Get key insights from bestselling books. Read or listen anytime,
            anywhere.
          </p>
          <div className="flex gap-4 justify-center mb-16">
            <Link
              href="/register"
              className="px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg rounded-xl font-bold shadow-2xl hover:shadow-indigo-500/50 transform hover:scale-105 transition-all"
            >
              Start Free Today
            </Link>
            <Link
              href="/books"
              className="px-10 py-5 bg-white border-2 border-gray-300 text-gray-900 text-lg rounded-xl font-bold hover:border-indigo-400 hover:bg-gray-50 transition-all"
            >
              Browse Library
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-12 max-w-3xl mx-auto pt-12 border-t-2 border-gray-200">
            <div>
              <div className="text-4xl font-black text-indigo-600">1000+</div>
              <div className="text-gray-600 font-medium">Summaries</div>
            </div>
            <div>
              <div className="text-4xl font-black text-purple-600">15min</div>
              <div className="text-gray-600 font-medium">Per Book</div>
            </div>
            <div>
              <div className="text-4xl font-black text-pink-600">20+</div>
              <div className="text-gray-600 font-medium">Categories</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
