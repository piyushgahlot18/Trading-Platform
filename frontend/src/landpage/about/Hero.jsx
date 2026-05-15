import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#050816] text-white py-24">

      {/* grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:40px_40px] opacity-20"></div>

      {/* glow */}
      <div className="absolute top-[120px] left-[30%] w-[600px] h-[400px] bg-purple-600/30 blur-[140px] rounded-full"></div>

      <div className="container relative z-10">

        {/* HEADING */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="fw-bold text-4xl mb-3">
            About <span className="text-purple-400">Tradoo</span>
          </h1>

          <p className="text-gray-400 max-w-xl mx-auto">
            Empowering traders with technology, transparency, and trust.
            Our platform is designed for speed, reliability, and a seamless
            trading experience.
          </p>
        </motion.div>


        {/* CONTENT */}
        <div className="row align-items-center">

          {/* LEFT SIDE */}
          <div className="col-md-6 mb-5">

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >

              <h4 className="fw-semibold mb-3">Who We Are</h4>

              <p className="text-gray-400">
                Tradoo is a next-generation trading platform built for
                modern investors who demand speed, security, and simplicity.
                Our tools combine real-time market data, advanced analytics,
                and powerful execution engines to give traders a competitive edge.
              </p>

              <h4 className="fw-semibold mt-5 mb-3">Our Mission</h4>

              <p className="text-gray-400">
                Our mission is to make professional trading tools accessible
                to everyone — from beginners exploring markets to experienced
                traders managing large portfolios.
              </p>

            </motion.div>

          </div>


          {/* RIGHT SIDE CARDS */}
          <div className="col-md-6">

            <div className="row">

              {[
                {
                  title: "Fast Execution",
                  desc: "Trade instantly with ultra-low latency order execution."
                },
                {
                  title: "Secure Platform",
                  desc: "Advanced encryption and security protect your assets."
                },
                {
                  title: "Smart Analytics",
                  desc: "Real-time charts and market insights help you trade smarter."
                },
                {
                  title: "User Friendly",
                  desc: "A clean and intuitive interface designed for traders."
                }
              ].map((item, index) => (

                <div className="col-sm-6 mb-4" key={index}>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/5 border border-white/10 backdrop-blur-lg p-4 rounded-xl h-100"
                  >
                    <h5 className="fw-bold mb-2 text-purple-400">
                      {item.title}
                    </h5>

                    <p className="text-gray-400 small mb-0">
                      {item.desc}
                    </p>

                  </motion.div>

                </div>

              ))}

            </div>

          </div>

        </div>


        {/* FOOTER LINE */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-500">
            Built with passion for traders • Designed for performance
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;