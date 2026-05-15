import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 h-16 overflow-visible">

        <Link to="/">
          <img src="/images/logop.png" className="h-32 object-contain" />
        </Link>

        <div className="flex gap-8 items-center">

          <Link className="text-white hover:text-purple-400 transition" to="/">
            Home
          </Link>

          <Link className="text-white hover:text-purple-400 transition" to="/about">
            About
          </Link>

          <Link className="text-white hover:text-purple-400 transition" to="/pricing">
            Pricing
          </Link>

          <Link className="text-white hover:text-purple-400 transition" to="/product">
            Product
          </Link>

          {/* CTA BUTTON */}
          <Link
            to="/dashboard"
            className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-500 transition shadow-lg"
          >
            Start Trading
          </Link>

        </div>
      </div>
    </nav>
  );
}