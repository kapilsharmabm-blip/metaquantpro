"use client";

import { useState } from "react";
import { format } from "date-fns";

interface NewsItem {
  id: number;
  title: string;
  summary: string;
  category: "crypto" | "indian-market";
  sentiment: "positive" | "negative" | "neutral";
  time: string;
  source: string;
}

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "crypto" | "indian-market">("all");

  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "Bitcoin Surges Past $45,000 on Institutional Buying",
      summary: "Major institutional investors continue to accumulate Bitcoin, pushing prices to new monthly highs. Analysts predict further upside momentum.",
      category: "crypto",
      sentiment: "positive",
      time: "2 hours ago",
      source: "CryptoNews",
    },
    {
      id: 2,
      title: "Nifty 50 Hits Record High on Strong Q4 Earnings",
      summary: "Indian benchmark index Nifty 50 reached an all-time high as major companies reported better-than-expected quarterly earnings.",
      category: "indian-market",
      sentiment: "positive",
      time: "3 hours ago",
      source: "Economic Times",
    },
    {
      id: 3,
      title: "Ethereum Network Upgrade Successfully Completed",
      summary: "The latest Ethereum network upgrade has been successfully implemented, improving transaction speeds and reducing gas fees.",
      category: "crypto",
      sentiment: "positive",
      time: "5 hours ago",
      source: "CoinDesk",
    },
    {
      id: 4,
      title: "RBI Announces New Monetary Policy Decision",
      summary: "Reserve Bank of India maintains repo rate at current levels, citing stable inflation and economic growth concerns.",
      category: "indian-market",
      sentiment: "neutral",
      time: "6 hours ago",
      source: "Moneycontrol",
    },
    {
      id: 5,
      title: "Regulatory Concerns Impact Crypto Market Sentiment",
      summary: "New regulatory discussions in major economies have led to increased volatility in cryptocurrency markets.",
      category: "crypto",
      sentiment: "negative",
      time: "8 hours ago",
      source: "Bloomberg Crypto",
    },
    {
      id: 6,
      title: "IT Sector Leads Market Rally with Strong Performance",
      summary: "Indian IT stocks surge as companies announce major international contracts and positive revenue guidance.",
      category: "indian-market",
      sentiment: "positive",
      time: "10 hours ago",
      source: "Business Standard",
    },
  ];

  const filteredNews = selectedCategory === "all" 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory);

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "text-green-400 bg-green-900";
      case "negative":
        return "text-red-400 bg-red-900";
      default:
        return "text-yellow-400 bg-yellow-900";
    }
  };

  return (
    <main className="flex-1 bg-black text-white px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Market News</h1>
        <p className="text-gray-400 mb-8">
          Real-time news and updates from crypto and Indian markets
        </p>

        {/* Category Filter */}
        <div className="bg-gray-900 rounded-2xl p-6 mb-8 border border-gray-800">
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                selectedCategory === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
            >
              All News
            </button>
            <button
              onClick={() => setSelectedCategory("crypto")}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                selectedCategory === "crypto"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
            >
              Crypto Market
            </button>
            <button
              onClick={() => setSelectedCategory("indian-market")}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                selectedCategory === "indian-market"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
            >
              Indian Market
            </button>
          </div>
        </div>

        {/* Market Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-green-900 to-gray-900 rounded-xl p-6 border border-green-800">
            <div className="text-sm text-gray-400 mb-2">Bitcoin</div>
            <div className="text-3xl font-bold mb-1">$45,200</div>
            <div className="text-green-400 text-sm">+2.8% (24h)</div>
          </div>
          <div className="bg-gradient-to-br from-blue-900 to-gray-900 rounded-xl p-6 border border-blue-800">
            <div className="text-sm text-gray-400 mb-2">Nifty 50</div>
            <div className="text-3xl font-bold mb-1">19,850</div>
            <div className="text-green-400 text-sm">+1.2% (Today)</div>
          </div>
          <div className="bg-gradient-to-br from-purple-900 to-gray-900 rounded-xl p-6 border border-purple-800">
            <div className="text-sm text-gray-400 mb-2">Bank Nifty</div>
            <div className="text-3xl font-bold mb-1">44,320</div>
            <div className="text-green-400 text-sm">+0.9% (Today)</div>
          </div>
        </div>

        {/* News Feed */}
        <div className="space-y-6">
          {filteredNews.map((news) => (
            <div
              key={news.id}
              className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        news.category === "crypto"
                          ? "bg-blue-900 text-blue-400"
                          : "bg-orange-900 text-orange-400"
                      }`}
                    >
                      {news.category === "crypto" ? "Crypto" : "Indian Market"}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getSentimentColor(
                        news.sentiment
                      )}`}
                    >
                      {news.sentiment}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-2">{news.title}</h2>
                  <p className="text-gray-400 mb-3">{news.summary}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{news.source}</span>
                    <span>•</span>
                    <span>{news.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI News Summary */}
        <div className="bg-gradient-to-br from-blue-900 to-gray-900 rounded-2xl p-6 mt-8 border border-blue-800">
          <h2 className="text-2xl font-bold mb-4">AI Market Summary</h2>
          <div className="space-y-3 text-gray-300">
            <p>
              <span className="font-semibold text-white">Crypto Markets:</span> Overall bullish sentiment with Bitcoin leading the rally. Institutional interest remains strong with increased trading volumes.
            </p>
            <p>
              <span className="font-semibold text-white">Indian Markets:</span> Positive momentum continues with Nifty 50 at record highs. IT and banking sectors showing strong performance.
            </p>
            <p>
              <span className="font-semibold text-white">Key Takeaway:</span> Both markets showing positive trends. Consider monitoring regulatory developments and earnings reports for trading opportunities.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
