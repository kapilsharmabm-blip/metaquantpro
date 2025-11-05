"use client";

import { useState } from "react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
  timestamp: string;
}

export default function AIChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI Trading Assistant. I can help you with trading strategies, market analysis, technical indicators, and risk management. What would you like to know?",
      sender: "ai",
      timestamp: new Date().toLocaleTimeString(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const quickQuestions = [
    "What is RSI and how to use it?",
    "Explain support and resistance",
    "Best time to trade crypto?",
    "How to manage trading risk?",
    "What is a bull market?",
    "Explain candlestick patterns",
  ];

  const aiResponses: { [key: string]: string } = {
    "rsi": "RSI (Relative Strength Index) is a momentum indicator that measures the speed and magnitude of price changes. It ranges from 0-100. Generally, RSI above 70 indicates overbought conditions (potential sell signal), while RSI below 30 indicates oversold conditions (potential buy signal). However, always use RSI with other indicators for confirmation.",
    "support": "Support is a price level where buying interest is strong enough to prevent the price from falling further. Resistance is a price level where selling pressure prevents the price from rising. When price breaks through resistance, it often becomes the new support level, and vice versa.",
    "crypto": "The best time to trade crypto is typically during high liquidity periods when major markets overlap (8 AM - 12 PM UTC). However, crypto markets are 24/7, so focus on your strategy rather than timing. Avoid trading during low volume periods as spreads can be wider.",
    "risk": "Key risk management principles: 1) Never risk more than 1-2% per trade, 2) Always use stop-loss orders, 3) Maintain a risk-reward ratio of at least 1:2, 4) Diversify your portfolio, 5) Don't overtrade, 6) Keep emotions in check, 7) Have a trading plan and stick to it.",
    "bull": "A bull market is a period of rising prices and positive investor sentiment. It's characterized by higher highs and higher lows, strong buying volume, and optimistic market outlook. In bull markets, traders typically look for buying opportunities on dips.",
    "candlestick": "Candlestick patterns show price action over a specific time period. Key patterns include: Doji (indecision), Hammer (potential reversal), Engulfing (strong reversal signal), and Morning/Evening Star (trend reversal). Each candlestick shows open, high, low, and close prices.",
  };

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(aiResponses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }

    return "That's a great question! While I can provide general trading information, I recommend consulting with a financial advisor for personalized advice. I can help you understand technical indicators, chart patterns, risk management strategies, and general market concepts. What specific aspect of trading would you like to learn about?";
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages([...messages, userMessage]);

    setTimeout(() => {
      const aiMessage: Message = {
        id: messages.length + 2,
        text: getAIResponse(inputMessage),
        sender: "ai",
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);

    setInputMessage("");
  };

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
  };

  return (
    <main className="flex-1 bg-black text-white px-6 py-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">AI Trading Assistant</h1>
        <p className="text-gray-400 mb-8">
          Ask me anything about trading, technical analysis, and market strategies
        </p>

        {/* Chat Container */}
        <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
          {/* Messages Area */}
          <div className="h-[500px] overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-6 py-4 ${
                    message.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-800 text-gray-100"
                  }`}
                >
                  <p className="mb-2">{message.text}</p>
                  <p className="text-xs opacity-70">{message.timestamp}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-800 p-4">
            <div className="flex gap-3">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ask me about trading..."
                className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition"
              >
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Quick Questions */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Quick Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {quickQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => handleQuickQuestion(question)}
                className="bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-gray-700 rounded-xl px-4 py-3 text-left text-sm transition"
              >
                {question}
              </button>
            ))}
          </div>
        </div>

        {/* AI Capabilities */}
        <div className="bg-gray-900 rounded-2xl p-6 mt-8 border border-gray-800">
          <h2 className="text-2xl font-bold mb-6">What I Can Help You With</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl">📊</div>
              <div>
                <h3 className="font-semibold mb-2">Technical Analysis</h3>
                <p className="text-gray-400 text-sm">
                  Learn about indicators like RSI, MACD, Moving Averages, and chart patterns.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl">💡</div>
              <div>
                <h3 className="font-semibold mb-2">Trading Strategies</h3>
                <p className="text-gray-400 text-sm">
                  Understand different trading approaches like day trading, swing trading, and scalping.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl">🎯</div>
              <div>
                <h3 className="font-semibold mb-2">Risk Management</h3>
                <p className="text-gray-400 text-sm">
                  Get guidance on position sizing, stop-loss placement, and portfolio management.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl">📈</div>
              <div>
                <h3 className="font-semibold mb-2">Market Concepts</h3>
                <p className="text-gray-400 text-sm">
                  Understand market trends, volatility, liquidity, and other fundamental concepts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
