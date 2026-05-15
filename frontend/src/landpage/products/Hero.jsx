import React from "react";
import { motion } from "framer-motion";
import {Link} from "react-router-dom";
const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#050816] text-white py-28">

      {/* grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:40px_40px] opacity-20"></div>

      {/* glow */}
      <div className="absolute top-[120px] left-[35%] w-[600px] h-[400px] bg-purple-600/30 blur-[150px] rounded-full"></div>

      <div className="container relative z-10 text-center">

        <motion.h1
          className="fw-bold mb-3"
          style={{ fontSize: "48px" }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Powerful <span className="text-purple-400">Trading Tools</span>
        </motion.h1>

        <motion.p
          className="text-gray-400 mx-auto"
          style={{ maxWidth: "650px", fontSize: "18px" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Discover the powerful ecosystem of products built for modern traders.
          From advanced market analytics to AI-driven insights, Tradoo equips
          you with everything needed to trade smarter and faster.
        </motion.p>

        {/* optional CTA */}
        <motion.div
          className="mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            to="/dashboard"
            className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-500 transition shadow-lg"
          >
            Explore Platform
          </Link>
        </motion.div>

      </div>

    </section>
  );
};

export default Hero;