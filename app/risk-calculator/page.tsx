"use client";

import { useState } from "react";

export default function RiskCalculator() {
  const [accountSize, setAccountSize] = useState<string>("100000");
  const [riskPercentage, setRiskPercentage] = useState<string>("2");
  const [entryPrice, setEntryPrice] = useState<string>("45000");
  const [stopLoss, setStopLoss] = useState<string>("43500");
  const [targetPrice, setTargetPrice] = useState<string>("48000");

  const calculateRisk = () => {
    const account = parseFloat(accountSize) || 0;
    const risk = parseFloat(riskPercentage) || 0;
    const entry = parseFloat(entryPrice) || 0;
    const stop = parseFloat(stopLoss) || 0;
    const target = parseFloat(targetPrice) || 0;

    const riskAmount = (account * risk) / 100;
    const riskPerUnit = Math.abs(entry - stop);
    const positionSize = riskPerUnit > 0 ? riskAmount / riskPerUnit : 0;
    const potentialProfit = Math.abs(target - entry) * positionSize;
    const riskRewardRatio = riskPerUnit > 0 ? Math.abs(target - entry) / riskPerUnit : 0;

    return {
      riskAmount: riskAmount.toFixed(2),
      positionSize: positionSize.toFixed(4),
      potentialProfit: potentialProfit.toFixed(2),
      riskRewardRatio: riskRewardRatio.toFixed(2),
    };
  };

  const results = calculateRisk();

  return (
    <main className="flex-1 bg-black text-white px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Risk Management Calculator</h1>
        <p className="text-gray-400 mb-8">
          Calculate position size, risk amount, and risk-reward ratio for your trades
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-6">Trade Parameters</h2>
            
            <div className="space-y-6">
              {/* Account Size */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Account Size (₹)
                </label>
                <input
                  type="number"
                  value={accountSize}
                  onChange={(e) => setAccountSize(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  placeholder="100000"
                />
              </div>

              {/* Risk Percentage */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Risk Per Trade (%)
                </label>
                <input
                  type="number"
                  value={riskPercentage}
                  onChange={(e) => setRiskPercentage(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  placeholder="2"
                  step="0.1"
                />
                <div className="mt-2 flex gap-2">
                  {["1", "2", "3", "5"].map((val) => (
                    <button
                      key={val}
                      onClick={() => setRiskPercentage(val)}
                      className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded text-sm transition"
                    >
                      {val}%
                    </button>
                  ))}
                </div>
              </div>

              {/* Entry Price */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Entry Price (₹)
                </label>
                <input
                  type="number"
                  value={entryPrice}
                  onChange={(e) => setEntryPrice(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  placeholder="45000"
                />
              </div>

              {/* Stop Loss */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Stop Loss (₹)
                </label>
                <input
                  type="number"
                  value={stopLoss}
                  onChange={(e) => setStopLoss(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  placeholder="43500"
                />
              </div>

              {/* Target Price */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Target Price (₹)
                </label>
                <input
                  type="number"
                  value={targetPrice}
                  onChange={(e) => setTargetPrice(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  placeholder="48000"
                />
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {/* Risk Amount */}
            <div className="bg-gradient-to-br from-red-900 to-gray-900 rounded-xl p-6 border border-red-800">
              <div className="text-sm text-gray-400 mb-2">Risk Amount</div>
              <div className="text-4xl font-bold text-red-400">
                ₹{parseFloat(results.riskAmount).toLocaleString()}
              </div>
              <div className="text-sm text-gray-400 mt-2">
                Maximum loss per trade
              </div>
            </div>

            {/* Position Size */}
            <div className="bg-gradient-to-br from-blue-900 to-gray-900 rounded-xl p-6 border border-blue-800">
              <div className="text-sm text-gray-400 mb-2">Position Size</div>
              <div className="text-4xl font-bold text-blue-400">
                {results.positionSize}
              </div>
              <div className="text-sm text-gray-400 mt-2">
                Number of units/shares to buy
              </div>
            </div>

            {/* Potential Profit */}
            <div className="bg-gradient-to-br from-green-900 to-gray-900 rounded-xl p-6 border border-green-800">
              <div className="text-sm text-gray-400 mb-2">Potential Profit</div>
              <div className="text-4xl font-bold text-green-400">
                ₹{parseFloat(results.potentialProfit).toLocaleString()}
              </div>
              <div className="text-sm text-gray-400 mt-2">
                If target is reached
              </div>
            </div>

            {/* Risk-Reward Ratio */}
            <div className="bg-gradient-to-br from-purple-900 to-gray-900 rounded-xl p-6 border border-purple-800">
              <div className="text-sm text-gray-400 mb-2">Risk-Reward Ratio</div>
              <div className="text-4xl font-bold text-purple-400">
                1:{results.riskRewardRatio}
              </div>
              <div className="text-sm text-gray-400 mt-2">
                {parseFloat(results.riskRewardRatio) >= 2
                  ? "✓ Good risk-reward ratio"
                  : "⚠ Consider better risk-reward"}
              </div>
            </div>
          </div>
        </div>

        {/* Risk Management Tips */}
        <div className="bg-gray-900 rounded-2xl p-6 mt-8 border border-gray-800">
          <h2 className="text-2xl font-bold mb-6">Risk Management Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl">💡</div>
              <div>
                <h3 className="font-semibold mb-2">Never Risk More Than 2%</h3>
                <p className="text-gray-400 text-sm">
                  Professional traders typically risk 1-2% of their account per trade to preserve capital.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl">🎯</div>
              <div>
                <h3 className="font-semibold mb-2">Aim for 1:2 Risk-Reward</h3>
                <p className="text-gray-400 text-sm">
                  Target at least 2x your risk amount to maintain profitability even with lower win rates.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl">🛡️</div>
              <div>
                <h3 className="font-semibold mb-2">Always Use Stop Loss</h3>
                <p className="text-gray-400 text-sm">
                  Never enter a trade without a predetermined stop loss to limit potential losses.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl">📊</div>
              <div>
                <h3 className="font-semibold mb-2">Position Sizing Matters</h3>
                <p className="text-gray-400 text-sm">
                  Proper position sizing ensures you can survive losing streaks and stay in the game.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
