import React from "react";
import { motion } from "framer-motion";

const Stats = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#050816] text-white py-24">

      {/* grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:40px_40px] opacity-20"></div>

      {/* glow blob */}
      <div className="absolute top-[200px] left-[30%] w-[600px] h-[400px] bg-purple-600/30 blur-[120px] rounded-full"></div>

      <div className="container relative z-10">

        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-md-6">

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >

              <div className="mb-5">
                <h4>Customer-first always</h4>
                <p className="text-gray-400">
                  That's why 1.3+ crore customers trust Tradoo with
                  ₹3.5+ lakh crores worth of equity investments.
                </p>
              </div>

              <div className="mb-4">
                <h4>No spam or gimmicks</h4>
                <p className="text-gray-400">
                  No gimmicks, spam, "gamification", or annoying push
                  notifications. High quality apps that you use at your pace.
                </p>
              </div>

              <div className="mb-4">
                <h4>The Tradoo universe</h4>
                <p className="text-gray-400">
                  Not just an app, but a whole ecosystem. Our investments
                  in 30+ fintech startups offer tailored services.
                </p>
              </div>

              <div>
                <h4>Do better with money</h4>
                <p className="text-gray-400">
                  With initiatives like Nudge and Kill Switch, we actively
                  help you do better with your money.
                </p>
              </div>

            </motion.div>

          </div>


          {/* RIGHT IMAGE */}
          <div className="col-md-6 text-center">

            <motion.img
              src="/images/stats.png"
              alt="Ecosystem"
              className="w-[350px] md:w-[420px] lg:w-[480px] mx-auto drop-shadow-[0_0_40px_rgba(168,85,247,0.4)] rounded-2xl"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />

            <div className="mt-4">
             
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Stats;