"use client";

import { useState } from "react";

interface Trade {
  id: number;
  symbol: string;
  type: "BUY" | "SELL";
  price: number;
  quantity: number;
  time: string;
  status: "executed" | "pending" | "cancelled";
}

export default function AIAutoTrade() {
  const [isAutoTradeEnabled, setIsAutoTradeEnabled] = useState(false);
  const [riskLevel, setRiskLevel] = useState<"low" | "medium" | "high">("medium");

  const aiRecommendations = [
    {
      symbol: "BTC/USDT",
      action: "BUY",
      confidence: 87,
      reason: "Strong bullish momentum with RSI at 45",
      targetPrice: 45200,
      stopLoss: 43800,
    },
    {
      symbol: "ETH/USDT",
      action: "SELL",
      confidence: 72,
      reason: "Overbought conditions, RSI above 70",
      targetPrice: 2380,
      stopLoss: 2450,
    },
    {
      symbol: "RELIANCE",
      action: "BUY",
      confidence: 81,
      reason: "Positive earnings report, breaking resistance",
      targetPrice: 2650,
      stopLoss: 2580,
    },
  ];

  const recentTrades: Trade[] = [
    {
      id: 1,
      symbol: "BTC/USDT",
      type: "BUY",
      price: 44850,
      quantity: 0.05,
      time: "10:30 AM",
      status: "executed",
    },
    {
      id: 2,
      symbol: "NIFTY50",
      type: "SELL",
      price: 19450,
      quantity: 2,
      time: "11:15 AM",
      status: "executed",
    },
    {
      id: 3,
      symbol: "ETH/USDT",
      type: "BUY",
      price: 2420,
      quantity: 1.2,
      time: "12:00 PM",
      status: "pending",
    },
  ];

  return (
    <main className="flex-1 bg-black text-white px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">AI Auto Trade</h1>
        <p className="text-gray-400 mb-8">
          Let AI execute trades automatically based on advanced market analysis
        </p>

        {/* Control Panel */}
        <div className="bg-gray-900 rounded-2xl p-6 mb-8 border border-gray-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Auto Trading Status</h2>
              <p className="text-gray-400">
                {isAutoTradeEnabled
                  ? "AI is actively monitoring and executing trades"
                  : "Auto trading is currently disabled"}
              </p>
            </div>
            <button
              onClick={() => setIsAutoTradeEnabled(!isAutoTradeEnabled)}
              className={`px-8 py-4 rounded-xl font-semibold transition text-lg ${
                isAutoTradeEnabled
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {isAutoTradeEnabled ? "Disable Auto Trade" : "Enable Auto Trade"}
            </button>
          </div>

          {/* Risk Level Selector */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <h3 className="text-lg font-semibold mb-4">Risk Level</h3>
            <div className="flex gap-4">
              <button
                onClick={() => setRiskLevel("low")}
                className={`flex-1 py-3 rounded-lg font-medium transition ${
                  riskLevel === "low"
                    ? "bg-green-600 text-white"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
              >
                Low Risk
              </button>
              <button
                onClick={() => setRiskLevel("medium")}
                className={`flex-1 py-3 rounded-lg font-medium transition ${
                  riskLevel === "medium"
                    ? "bg-yellow-600 text-white"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
              >
                Medium Risk
              </button>
              <button
                onClick={() => setRiskLevel("high")}
                className={`flex-1 py-3 rounded-lg font-medium transition ${
                  riskLevel === "high"
                    ? "bg-red-600 text-white"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
              >
                High Risk
              </button>
            </div>
          </div>
        </div>

        {/* AI Recommendations */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">AI Recommendations</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {aiRecommendations.map((rec, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl p-6 border border-gray-800"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{rec.symbol}</h3>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mt-2 ${
                        rec.action === "BUY"
                          ? "bg-green-900 text-green-400"
                          : "bg-red-900 text-red-400"
                      }`}
                    >
                      {rec.action}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-400">
                      {rec.confidence}%
                    </div>
                    <div className="text-xs text-gray-400">Confidence</div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">{rec.reason}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Target:</span>
                    <span className="text-green-400 font-semibold">
                      ₹{rec.targetPrice.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Stop Loss:</span>
                    <span className="text-red-400 font-semibold">
                      ₹{rec.stopLoss.toLocaleString()}
                    </span>
                  </div>
                </div>
                <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-semibold transition">
                  Execute Trade
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Trades */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Recent Trades</h2>
          <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Symbol
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Type
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Price
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Quantity
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Time
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {recentTrades.map((trade) => (
                    <tr key={trade.id} className="hover:bg-gray-800 transition">
                      <td className="px-6 py-4 font-semibold">{trade.symbol}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-2 py-1 rounded text-xs font-semibold ${
                            trade.type === "BUY"
                              ? "bg-green-900 text-green-400"
                              : "bg-red-900 text-red-400"
                          }`}
                        >
                          {trade.type}
                        </span>
                      </td>
                      <td className="px-6 py-4">₹{trade.price.toLocaleString()}</td>
                      <td className="px-6 py-4">{trade.quantity}</td>
                      <td className="px-6 py-4 text-gray-400">{trade.time}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-2 py-1 rounded text-xs font-semibold ${
                            trade.status === "executed"
                              ? "bg-blue-900 text-blue-400"
                              : trade.status === "pending"
                              ? "bg-yellow-900 text-yellow-400"
                              : "bg-gray-700 text-gray-400"
                          }`}
                        >
                          {trade.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
