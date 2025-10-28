export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white px-4">
      <section className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          MetaQuant<span className="text-blue-400">Pro</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Your AI-powered Trading Assistant — combining live market insights,
          education, and analytics to help traders make smarter decisions.
        </p>
        <a
          href="#features"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl transition"
        >
          Explore Now
        </a>
      </section>

      <section id="features" className="mt-16 grid md:grid-cols-3 gap-6 text-center max-w-4xl">
        <div className="p-6 bg-gray-800 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">AI Market Insights</h2>
          <p className="text-gray-400 text-sm">Get real-time data & smart signals from AI.</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Trader Education</h2>
          <p className="text-gray-400 text-sm">Learn, test, and grow your trading skills.</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Analytics Dashboard</h2>
          <p className="text-gray-400 text-sm">Visualize profits, losses, and trading patterns.</p>
        </div>
      </section>

      <footer className="mt-20 text-gray-500 text-sm">
        © 2025 MetaQuantPro — Built for Smart Traders.
      </footer>
    </main>
  );
}


