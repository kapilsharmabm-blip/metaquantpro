"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">
              MetaQuant<span className="text-blue-500">Pro</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/ai-auto-trade"
              className="px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition"
            >
              AI Auto Trade
            </Link>
            <Link
              href="/chart-analysis"
              className="px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition"
            >
              Chart Analysis
            </Link>
            <Link
              href="/news"
              className="px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition"
            >
              News
            </Link>
            <Link
              href="/risk-calculator"
              className="px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition"
            >
              Risk Calculator
            </Link>
            <Link
              href="/ai-chatbot"
              className="px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition"
            >
              AI Chatbot
            </Link>
            <Link
              href="/live-chats"
              className="px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition"
            >
              Live Chats
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link
              href="/ai-auto-trade"
              className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              AI Auto Trade
            </Link>
            <Link
              href="/chart-analysis"
              className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Chart Analysis
            </Link>
            <Link
              href="/news"
              className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              News
            </Link>
            <Link
              href="/risk-calculator"
              className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Risk Calculator
            </Link>
            <Link
              href="/ai-chatbot"
              className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              AI Chatbot
            </Link>
            <Link
              href="/live-chats"
              className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Live Chats
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
