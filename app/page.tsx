"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-4">
      <h1 className="text-4xl font-bold mb-4">
        MetaQuant<span className="text-blue-500">Pro</span>
      </h1>
      <p className="text-center mb-8 max-w-md text-gray-300">
        Your AI-powered Trading Assistant — combining live market insights, education, 
        and analytics to help traders make smarter decisions.
      </p>

      <Link
        href="/ai-insights"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition mb-8"
      >
        🚀 Explore Now
      </Link>

      <div className="space-y-4 w-full max-w-md">
        <Link
          href="/ai-insights"
          className="block bg-gray-800 p-4 rounded-2xl hover:bg-gray-700 transition"
        >
          <h2 className="text-xl font-semibold text-blue-400">AI Insights</h2>
          <p className="text-gray-400 text-sm">
            Real-time market analysis powered by advanced AI models.
          </p>
        </Link>

        <Link
          href="/ai-insights/trading-analytics"
          className="block bg-gray-800 p-4 rounded-2xl hover:bg-gray-700 transition"
        >
          <h2 className="text-xl font-semibold text-blue-400">Trading Analytics</h2>
          <p className="text-gray-400 text-sm">
            Performance tracking, trade journaling, and smart portfolio analytics.
          </p>
        </Link>

        <Link
          href="/ai-insights/trading-analytics/education-hub"
          className="block bg-gray-800 p-4 rounded-2xl hover:bg-gray-700 transition"
        >
          <h2 className="text-xl font-semibold text-blue-400">Education Hub</h2>
          <p className="text-gray-400 text-sm">
            Learn proven trading strategies and upgrade your market knowledge.
          </p>
        </Link>
      </div>
    </main>
  );
}
