export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              MetaQuant<span className="text-blue-500">Pro</span>
            </h3>
            <p className="text-gray-400 text-sm">
              AI-powered trading platform for smarter investment decisions
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/ai-auto-trade" className="text-gray-400 hover:text-blue-400 transition">
                  AI Auto Trade
                </a>
              </li>
              <li>
                <a href="/chart-analysis" className="text-gray-400 hover:text-blue-400 transition">
                  Chart Analysis
                </a>
              </li>
              <li>
                <a href="/risk-calculator" className="text-gray-400 hover:text-blue-400 transition">
                  Risk Calculator
                </a>
              </li>
              <li>
                <a href="/ai-chatbot" className="text-gray-400 hover:text-blue-400 transition">
                  AI Chatbot
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>
                <span className="font-medium text-white">Founder:</span> Kapil Sharma
              </p>
              <p>
                <span className="font-medium text-white">Email:</span>{" "}
                <a
                  href="mailto:kapil.metaquantpro@gmail.com"
                  className="hover:text-blue-400 transition"
                >
                  kapil.metaquantpro@gmail.com
                </a>
              </p>
              <p>
                <span className="font-medium text-white">Instagram:</span>{" "}
                <a
                  href="https://instagram.com/metaquantpro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  @metaquantpro
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} MetaQuantPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
