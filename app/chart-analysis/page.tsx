"use client";

import { useState } from "react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ChartAnalysis() {
  const [selectedSymbol, setSelectedSymbol] = useState("BTC/USDT");
  const [timeframe, setTimeframe] = useState("1D");

  const symbols = ["BTC/USDT", "ETH/USDT", "NIFTY50", "BANKNIFTY", "RELIANCE"];
  const timeframes = ["5M", "15M", "1H", "4H", "1D", "1W"];

  const chartData = [
    { time: "09:00", price: 44200, volume: 1200 },
    { time: "10:00", price: 44450, volume: 1500 },
    { time: "11:00", price: 44300, volume: 1100 },
    { time: "12:00", price: 44800, volume: 1800 },
    { time: "13:00", price: 45100, volume: 2100 },
    { time: "14:00", price: 44900, volume: 1600 },
    { time: "15:00", price: 45300, volume: 2300 },
    { time: "16:00", price: 45500, volume: 2000 },
  ];

  const indicators = [
    { name: "RSI (14)", value: "58.4", signal: "Neutral", color: "text-yellow-400" },
    { name: "MACD", value: "Bullish", signal: "Buy", color: "text-green-400" },
    { name: "Moving Avg (50)", value: "44,850", signal: "Above", color: "text-green-400" },
    { name: "Bollinger Bands", value: "Mid", signal: "Neutral", color: "text-yellow-400" },
  ];

  const aiInsights = [
    "Strong bullish momentum detected in the last 4 hours",
    "Price is testing resistance at ₹45,500 level",
    "Volume increasing, suggesting potential breakout",
    "Support level identified at ₹44,200",
  ];

  return (
    <main className="flex-1 bg-black text-white px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Chart Analysis</h1>
        <p className="text-gray-400 mb-8">
          Advanced technical analysis with AI-powered insights
        </p>

        {/* Symbol and Timeframe Selector */}
        <div className="bg-gray-900 rounded-2xl p-6 mb-8 border border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-3">Symbol</label>
              <div className="flex flex-wrap gap-2">
                {symbols.map((symbol) => (
                  <button
                    key={symbol}
                    onClick={() => setSelectedSymbol(symbol)}
                    className={`px-4 py-2 rounded-lg font-medium transition ${
                      selectedSymbol === symbol
                        ? "bg-blue-600 text-white"
                        : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                    }`}
                  >
                    {symbol}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-3">Timeframe</label>
              <div className="flex flex-wrap gap-2">
                {timeframes.map((tf) => (
                  <button
                    key={tf}
                    onClick={() => setTimeframe(tf)}
                    className={`px-4 py-2 rounded-lg font-medium transition ${
                      timeframe === tf
                        ? "bg-blue-600 text-white"
                        : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                    }`}
                  >
                    {tf}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Price Chart */}
        <div className="bg-gray-900 rounded-2xl p-6 mb-8 border border-gray-800">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">{selectedSymbol}</h2>
            <div className="text-right">
              <div className="text-3xl font-bold text-green-400">₹45,500</div>
              <div className="text-sm text-green-400">+2.94% (+1,300)</div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1f2937",
                  border: "1px solid #374151",
                  borderRadius: "8px",
                }}
              />
              <Area
                type="monotone"
                dataKey="price"
                stroke="#3b82f6"
                fillOpacity={1}
                fill="url(#colorPrice)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Technical Indicators */}
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-6">Technical Indicators</h2>
            <div className="space-y-4">
              {indicators.map((indicator, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 bg-gray-800 rounded-lg"
                >
                  <div>
                    <div className="font-semibold">{indicator.name}</div>
                    <div className="text-sm text-gray-400">{indicator.value}</div>
                  </div>
                  <div className={`font-bold ${indicator.color}`}>
                    {indicator.signal}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Insights */}
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-6">AI Insights</h2>
            <div className="space-y-4">
              {aiInsights.map((insight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-gray-800 rounded-lg"
                >
                  <div className="text-blue-400 text-xl mt-1">•</div>
                  <p className="text-gray-300">{insight}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-blue-900 bg-opacity-30 border border-blue-800 rounded-lg">
              <div className="font-semibold text-blue-400 mb-2">
                AI Recommendation
              </div>
              <p className="text-gray-300">
                Consider entering a long position with stop-loss at ₹44,200 and
                target at ₹46,500 for a favorable risk-reward ratio of 1:2.5
              </p>
            </div>
          </div>
        </div>

        {/* Volume Chart */}
        <div className="bg-gray-900 rounded-2xl p-6 mt-8 border border-gray-800">
          <h2 className="text-2xl font-bold mb-6">Volume Analysis</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1f2937",
                  border: "1px solid #374151",
                  borderRadius: "8px",
                }}
              />
              <Line
                type="monotone"
                dataKey="volume"
                stroke="#10b981"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </main>
  );
}
