"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-6 py-10">
      <h1 className="text-5xl font-bold mb-4">
        MetaQuant<span className="text-blue-500">Pro</span>
      </h1>
      <p className="text-center max-w-2xl text-gray-300 mb-10">
        Your AI-powered Trading Assistant — combining live market insights,
        education, and analytics to help traders make smarter decisions.
      </p>

      <Link
        href="/ai-insights"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition mb-8"
      >
        🚀 Explore Now
      </Link>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
        <Link
          href="/ai-insights"
          className="bg-gray-800 hover:bg-gray-700 p-6 rounded-2xl transition text-center"
        >
          <h2 className="text-xl font-bold text-blue-400 mb-2">
            AI Insights
          </h2>
          <p className="text-gray-300 text-sm">
            Real-time market analysis powered by advanced AI models.
          </p>
        </Link>

        <Link
          href="/trading-analytics"
          className="bg-gray-800 hover:bg-gray-700 p-6 rounded-2xl transition text-center"
        >
          <h2 className="text-xl font-bold text-blue-400 mb-2">
            Trading Analytics
          </h2>
          <p className="text-gray-300 text-sm">
            Performance tracking, trade journaling, and smart portfolio analytics.
          </p>
        </Link>

        <Link
          href="/education-hub"
          className="bg-gray-800 hover:bg-gray-700 p-6 rounded-2xl transition text-center"
        >
          <h2 className="text-xl font-bold text-blue-400 mb-2">
            Education Hub
          </h2>
          <p className="text-gray-300 text-sm">
            Learn proven trading strategies and upgrade your market knowledge.
          </p>
        </Link>
      </div>
    </main>
  );
}

