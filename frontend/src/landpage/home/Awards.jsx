import React from "react";
import { motion } from "framer-motion";

const Awards = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#050816] text-white">

      {/* grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:40px_40px] opacity-20"></div>

      {/* purple glow */}
      <div className="absolute top-[200px] left-[30%] w-[600px] h-[400px] bg-purple-600/30 blur-[120px] rounded-full"></div>

      <div className="container relative z-10">

        <div className="row align-items-center">

          {/* IMAGE */}
          <div className="col-md-6 text-center">

            <motion.img
              src="/images/award.png"
              alt="Largest Broker"
              className="img-fluid rounded-2xl"
              style={{ maxHeight: "350px" }}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />

          </div>

          {/* TEXT */}
          <div className="col-md-6">

            <motion.h2
              className="mb-3 fw-bold"
              style={{ fontSize: "42px" }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              Largest Stock Broker in India
            </motion.h2>

            <p className="text-gray-400 mb-4">
              Trusted by millions of investors, Zerodha powers a significant
              portion of India's retail trading volume with powerful tools and
              transparent pricing.
            </p>

            <div className="row">

              <div className="col-6">
                <ul className="text-gray-300">
                  <li>Futures and Options</li>
                  <li>Commodity derivatives</li>
                  <li>Currency derivatives</li>
                </ul>
              </div>

              <div className="col-6">
                <ul className="text-gray-300">
                  <li>Stocks & IPOs</li>
                  <li>Direct mutual funds</li>
                  <li>Bonds</li>
                </ul>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Awards;