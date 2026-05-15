import React from "react";
import {Link} from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#050816] text-white">

      {/* grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:40px_40px] opacity-20"></div>

      {/* purple glow */}
      <div className="absolute top-[120px] left-[35%] w-[600px] h-[400px] bg-purple-600/30 blur-[140px] rounded-full"></div>

      <div className="container relative z-10">

        <div className="row align-items-center">

          {/* LEFT TEXT */}
          <div className="col-md-6">

            <motion.h1
              className="fw-bold mb-3"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Transparent <span className="text-purple-400">Pricing</span>
            </motion.h1>

            <p className="text-gray-400 mb-4">
              Trade confidently with simple and transparent pricing.
              No hidden charges, no complicated plans — just powerful
              trading tools designed for modern investors.
            </p>

           <Link
            to="/dashboard"
            className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-500 transition shadow-lg"
          >
            Start Trading
          </Link>

          </div>

          {/* RIGHT IMAGE */}
          <div className="col-md-6 text-center">

            <motion.img
              src="/images/pricing-hero.png"
              alt="pricing illustration"
              className="img-fluid ml-9"
              style={{ maxHeight: "450px",width:"650px" }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;