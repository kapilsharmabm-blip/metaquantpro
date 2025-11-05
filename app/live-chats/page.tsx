"use client";

import { useState } from "react";

interface ChatMessage {
  id: number;
  username: string;
  message: string;
  timestamp: string;
  avatar: string;
}

export default function LiveChats() {
  const [selectedRoom, setSelectedRoom] = useState<"crypto" | "indian">("crypto");
  const [messageInput, setMessageInput] = useState("");

  const cryptoMessages: ChatMessage[] = [
    {
      id: 1,
      username: "CryptoKing",
      message: "BTC looking strong at $45k! Expecting breakout soon 🚀",
      timestamp: "10:30 AM",
      avatar: "🔷",
    },
    {
      id: 2,
      username: "EthTrader",
      message: "ETH gas fees are finally coming down. Good time to accumulate?",
      timestamp: "10:32 AM",
      avatar: "💎",
    },
    {
      id: 3,
      username: "AltcoinHunter",
      message: "Anyone watching SOL? Breaking resistance at $110",
      timestamp: "10:35 AM",
      avatar: "🎯",
    },
    {
      id: 4,
      username: "TechAnalyst",
      message: "RSI showing oversold on multiple altcoins. Could be good entry points",
      timestamp: "10:38 AM",
      avatar: "📊",
    },
  ];

  const indianMessages: ChatMessage[] = [
    {
      id: 1,
      username: "NiftyTrader",
      message: "Nifty at all-time high! Banking sector leading the rally 📈",
      timestamp: "10:25 AM",
      avatar: "🇮🇳",
    },
    {
      id: 2,
      username: "StockGuru",
      message: "Reliance showing strong momentum. Target 2700?",
      timestamp: "10:28 AM",
      avatar: "💼",
    },
    {
      id: 3,
      username: "OptionsTrader",
      message: "Bank Nifty options showing high IV. Good for sellers",
      timestamp: "10:31 AM",
      avatar: "⚡",
    },
    {
      id: 4,
      username: "MarketWatch",
      message: "IT stocks bouncing back after yesterday's correction",
      timestamp: "10:34 AM",
      avatar: "💻",
    },
  ];

  const activeUsers = {
    crypto: 1247,
    indian: 892,
  };

  const currentMessages = selectedRoom === "crypto" ? cryptoMessages : indianMessages;

  const handleSendMessage = () => {
    if (!messageInput.trim()) return;
    // In a real app, this would send the message to a backend
    setMessageInput("");
  };

  return (
    <main className="flex-1 bg-black text-white px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Live Trading Chats</h1>
        <p className="text-gray-400 mb-8">
          Connect with traders and discuss market movements in real-time
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Chat Rooms Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 sticky top-24">
              <h2 className="text-xl font-bold mb-4">Chat Rooms</h2>
              
              <button
                onClick={() => setSelectedRoom("crypto")}
                className={`w-full text-left p-4 rounded-xl mb-3 transition ${
                  selectedRoom === "crypto"
                    ? "bg-blue-600"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">Crypto Market</span>
                  <span className="text-2xl">₿</span>
                </div>
                <div className="text-sm text-gray-400">
                  {activeUsers.crypto} online
                </div>
              </button>

              <button
                onClick={() => setSelectedRoom("indian")}
                className={`w-full text-left p-4 rounded-xl transition ${
                  selectedRoom === "indian"
                    ? "bg-blue-600"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">Indian Market</span>
                  <span className="text-2xl">📊</span>
                </div>
                <div className="text-sm text-gray-400">
                  {activeUsers.indian} online
                </div>
              </button>

              <div className="mt-6 p-4 bg-gray-800 rounded-xl">
                <h3 className="font-semibold mb-2 text-sm">Chat Rules</h3>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• Be respectful to others</li>
                  <li>• No spam or promotion</li>
                  <li>• Share knowledge, not financial advice</li>
                  <li>• Keep discussions relevant</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-3">
            <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
              {/* Chat Header */}
              <div className="bg-gray-800 px-6 py-4 border-b border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold">
                      {selectedRoom === "crypto" ? "Crypto Market" : "Indian Market"} Chat
                    </h2>
                    <p className="text-sm text-gray-400">
                      {activeUsers[selectedRoom]} traders online
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-400">Live</span>
                  </div>
                </div>
              </div>

              {/* Messages Area */}
              <div className="h-[500px] overflow-y-auto p-6 space-y-4">
                {currentMessages.map((msg) => (
                  <div key={msg.id} className="flex items-start gap-4">
                    <div className="text-3xl">{msg.avatar}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-semibold">{msg.username}</span>
                        <span className="text-xs text-gray-500">{msg.timestamp}</span>
                      </div>
                      <p className="text-gray-300">{msg.message}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <div className="border-t border-gray-800 p-4">
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Type your message..."
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

            {/* Market Highlights */}
            <div className="bg-gray-900 rounded-2xl p-6 mt-6 border border-gray-800">
              <h2 className="text-xl font-bold mb-4">
                {selectedRoom === "crypto" ? "Crypto" : "Indian Market"} Highlights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {selectedRoom === "crypto" ? (
                  <>
                    <div className="bg-gray-800 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Bitcoin</div>
                      <div className="text-2xl font-bold">$45,200</div>
                      <div className="text-green-400 text-sm">+2.8%</div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Ethereum</div>
                      <div className="text-2xl font-bold">$2,420</div>
                      <div className="text-green-400 text-sm">+3.2%</div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Solana</div>
                      <div className="text-2xl font-bold">$112</div>
                      <div className="text-green-400 text-sm">+5.1%</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-gray-800 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Nifty 50</div>
                      <div className="text-2xl font-bold">19,850</div>
                      <div className="text-green-400 text-sm">+1.2%</div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Bank Nifty</div>
                      <div className="text-2xl font-bold">44,320</div>
                      <div className="text-green-400 text-sm">+0.9%</div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Sensex</div>
                      <div className="text-2xl font-bold">66,450</div>
                      <div className="text-green-400 text-sm">+1.1%</div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
