"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-black text-white px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to MetaQuant<span className="text-blue-500">Pro</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your AI-powered Trading Platform — Combining automated trading, real-time analysis,
            and intelligent insights to help you make smarter investment decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ai-auto-trade"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition text-lg"
            >
              Start Auto Trading
            </Link>
            <Link
              href="/ai-chatbot"
              className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-xl font-semibold transition text-lg"
            >
              Ask AI Assistant
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-black text-white px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Powerful Trading Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* AI Auto Trade */}
            <Link
              href="/ai-auto-trade"
              className="bg-gradient-to-br from-blue-900 to-gray-900 hover:from-blue-800 hover:to-gray-800 p-8 rounded-2xl transition border border-blue-800"
            >
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-blue-400 mb-3">
                AI Auto Trade
              </h3>
              <p className="text-gray-300">
                Let AI execute trades automatically based on advanced algorithms and market analysis.
              </p>
            </Link>

            {/* Chart Analysis */}
            <Link
              href="/chart-analysis"
              className="bg-gradient-to-br from-green-900 to-gray-900 hover:from-green-800 hover:to-gray-800 p-8 rounded-2xl transition border border-green-800"
            >
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-green-400 mb-3">
                Chart Analysis
              </h3>
              <p className="text-gray-300">
                Interactive charts with technical indicators and AI-powered pattern recognition.
              </p>
            </Link>

            {/* News Feed */}
            <Link
              href="/news"
              className="bg-gradient-to-br from-purple-900 to-gray-900 hover:from-purple-800 hover:to-gray-800 p-8 rounded-2xl transition border border-purple-800"
            >
              <div className="text-4xl mb-4">📰</div>
              <h3 className="text-2xl font-bold text-purple-400 mb-3">
                Market News
              </h3>
              <p className="text-gray-300">
                Real-time crypto and Indian market news to stay ahead of market movements.
              </p>
            </Link>

            {/* Risk Calculator */}
            <Link
              href="/risk-calculator"
              className="bg-gradient-to-br from-orange-900 to-gray-900 hover:from-orange-800 hover:to-gray-800 p-8 rounded-2xl transition border border-orange-800"
            >
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-orange-400 mb-3">
                Risk Calculator
              </h3>
              <p className="text-gray-300">
                Calculate position size, stop-loss, and risk-reward ratios for better risk management.
              </p>
            </Link>

            {/* AI Chatbot */}
            <Link
              href="/ai-chatbot"
              className="bg-gradient-to-br from-cyan-900 to-gray-900 hover:from-cyan-800 hover:to-gray-800 p-8 rounded-2xl transition border border-cyan-800"
            >
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-3">
                AI Chatbot
              </h3>
              <p className="text-gray-300">
                Get instant answers to your trading questions from our intelligent AI assistant.
              </p>
            </Link>

            {/* Live Chats */}
            <Link
              href="/live-chats"
              className="bg-gradient-to-br from-pink-900 to-gray-900 hover:from-pink-800 hover:to-gray-800 p-8 rounded-2xl transition border border-pink-800"
            >
              <div className="text-4xl mb-4">💭</div>
              <h3 className="text-2xl font-bold text-pink-400 mb-3">
                Live Chats
              </h3>
              <p className="text-gray-300">
                Join live discussions on crypto and Indian markets with fellow traders.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-b from-black to-gray-900 text-white px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-blue-500 mb-2">24/7</div>
              <p className="text-gray-300 text-lg">AI Trading Active</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-green-500 mb-2">Real-Time</div>
              <p className="text-gray-300 text-lg">Market Analysis</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-purple-500 mb-2">Smart</div>
              <p className="text-gray-300 text-lg">Risk Management</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

