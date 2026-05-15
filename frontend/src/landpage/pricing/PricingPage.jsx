import React from "react";
import { motion } from "framer-motion";
import Hero from "./Hero";

const plans = [
  {
    title: "Free Investor",
    price: "₹0",
    desc: "Perfect for long-term investors.",
    features: [
      "Free equity delivery",
      "Portfolio analytics",
      "Market insights"
    ]
  },
  {
    title: "Active Trader",
    price: "₹20 / trade",
    desc: "Best for active traders and intraday trading.",
    features: [
      "Advanced charts",
      "Fast order execution",
      "Intraday & F&O trading"
    ]
  },
  {
    title: "Pro Trader",
    price: "₹999 / month",
    desc: "For professional traders and analysts.",
    features: [
      "AI trading insights",
      "Advanced analytics",
      "Priority support"
    ]
  }
];

const Pricing = () => {
  return (
    <>
    <Hero/>

    <section className="relative w-full overflow-hidden bg-[#050816] text-white py-24">

      <div className="container">

        <div className="row text-center mb-5">
          <h2 className="fw-bold">
            Simple Pricing for <span className="text-purple-400">Everyone</span>
          </h2>
          <p className="text-gray-400">
            Choose the plan that fits your trading style.
          </p>
        </div>

        <div className="row">

          {plans.map((plan, index) => (

            <div className="col-md-4 mb-4" key={index}>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 border border-white/10 backdrop-blur-lg p-4 rounded-xl h-100 text-center"
              >

                <h4 className="fw-bold text-purple-400">
                  {plan.title}
                </h4>

                <h2 className="fw-bold mt-2">
                  {plan.price}
                </h2>

                <p className="text-gray-400 mb-3">
                  {plan.desc}
                </p>

                <ul className="text-gray-300">

                  {plan.features.map((feature, i) => (
                    <li key={i}>• {feature}</li>
                  ))}

                </ul>

                <button className="mt-3 px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-500 transition">
                  Choose Plan
                </button>

              </motion.div>

            </div>

          ))}

        </div>

      </div>

    </section>
    </>
  );
};

export default Pricing;