import React from "react";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <section className="relative bg-[#050816] text-white py-28 overflow-hidden">

      {/* grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:40px_40px] opacity-20"></div>

      {/* purple glow */}
      <div className="absolute top-20 right-[20%] w-[500px] h-[350px] bg-purple-600/30 blur-[120px] rounded-full"></div>

      <div className="container relative z-10">

        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-md-5">

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >

              <h2 className="mb-4">Unbeatable pricing</h2>

              <p className="text-gray-400 mb-4">
                We pioneered the concept of discount broking and price
                transparency in India. Our pricing structure is designed to
                make trading affordable for everyone — from beginners to
                professional traders.
              </p>

              <p className="text-gray-400 mb-4">
                With flat fees, no hidden costs, and zero commission on
                long-term investments, you keep more of your profits.
              </p>

              <ul className="text-gray-300 mb-4">
                <li>✔ Free equity delivery</li>
                <li>✔ Flat ₹20 per order</li>
                <li>✔ No account maintenance charges</li>
                <li>✔ No hidden brokerage</li>
              </ul>

              

            </motion.div>

          </div>

          <div className="col-md-1"></div>

          {/* RIGHT SIDE PRICING CARDS */}
          <div className="col-md-6">

            <div className="row">

              {/* CARD 1 */}
              <div className="col-6 mb-4">

                <motion.div
                  whileHover={{ scale: 1.06 }}
                  className="bg-white/5 border border-white/10 backdrop-blur-lg p-5 rounded-xl text-center"
                >
                  <h2 className="text-purple-400">₹0</h2>

                  <h6 className="mt-2">Equity Delivery</h6>

                  <p className="text-gray-400 small">
                    Invest in stocks and hold them long term with zero
                    brokerage fees.
                  </p>
                </motion.div>

              </div>

              {/* CARD 2 */}
              <div className="col-6 mb-4">

                <motion.div
                  whileHover={{ scale: 1.06 }}
                  className="bg-white/5 border border-white/10 backdrop-blur-lg p-5 rounded-xl text-center"
                >
                  <h2 className="text-purple-400">₹20</h2>

                  <h6 className="mt-2">Intraday & F&O</h6>

                  <p className="text-gray-400 small">
                    Flat fee per order for intraday trades and derivatives.
                  </p>
                </motion.div>

              </div>

              {/* CARD 3 */}
              <div className="col-6">

                <motion.div
                  whileHover={{ scale: 1.06 }}
                  className="bg-white/5 border border-white/10 backdrop-blur-lg p-5 rounded-xl text-center"
                >
                  <h2 className="text-purple-400">0%</h2>

                  <h6 className="mt-2">Commission</h6>

                  <p className="text-gray-400 small">
                    No commission on long-term investments and mutual funds.
                  </p>
                </motion.div>

              </div>

              {/* CARD 4 */}
              <div className="col-6">

                <motion.div
                  whileHover={{ scale: 1.06 }}
                  className="bg-white/5 border border-white/10 backdrop-blur-lg p-5 rounded-xl text-center"
                >
                  <h2 className="text-purple-400">100%</h2>

                  <h6 className="mt-2">Transparent</h6>

                  <p className="text-gray-400 small">
                    Clear pricing structure with absolutely no hidden fees.
                  </p>
                </motion.div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Pricing;