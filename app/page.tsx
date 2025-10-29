export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white px-4">
      <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
        MetaQuant<span className="text-blue-500">Pro</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-6 text-center max-w-2xl">
        Your AI-powered Trading Assistant — combining live market insights, education, and analytics to help traders make smarter decisions.
      </p>

      <a
        href="#features"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition"
      >
        🚀 Explore Now
      </a>

      <section id="features" className="grid md:grid-cols-3 gap-6 mt-12 max-w-5xl">
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
          <h2 className="text-xl font-bold mb-2 text-blue-400">AI Insights</h2>
          <p className="text-gray-400">
            Real-time market analysis powered by advanced AI models.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
          <h2 className="text-xl font-bold mb-2 text-blue-400">Trading Analytics</h2>
          <p className="text-gray-400">
            Performance tracking, trade journaling, and smart portfolio analytics.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
          <h2 className="text-xl font-bold mb-2 text-blue-400">Education Hub</h2>
          <p className="text-gray-400">
            Learn proven trading strategies and upgrade your market knowledge.
          </p>
        </div>
      </section>
    </main>
  );
}
