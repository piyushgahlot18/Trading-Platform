import React from "react";
import { motion } from "framer-motion";
import { FaChartLine, FaMobileAlt, FaWallet, FaRobot } from "react-icons/fa";
import Hero from './Hero'
const product = [
  {
    icon: <FaChartLine />,
    title: "Trading Dashboard",
    desc: "Our advanced trading dashboard provides real-time market data, professional charting tools, and lightning-fast order execution so traders can react instantly to market movements.",
    points: [
      "Real-time market charts",
      "Instant order execution",
      "Customizable indicators"
    ]
  },
  {
    icon: <FaWallet />,
    title: "Portfolio Manager",
    desc: "Track your investments and monitor portfolio performance with powerful analytics designed to help you make smarter financial decisions.",
    points: [
      "Portfolio performance tracking",
      "Profit & loss analysis",
      "Asset allocation insights"
    ]
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Trading",
    desc: "Trade anytime and anywhere with our fully responsive mobile trading platform optimized for speed and simplicity.",
    points: [
      "Fast mobile execution",
      "Real-time notifications",
      "Mobile-friendly charts"
    ]
  },
 
];



const Product = () => {
  return (
  <>
    <Hero/>  

    <section className="relative w-full overflow-hidden bg-[#050816] text-white py-24">

      {/* background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:40px_40px] opacity-20"></div>

      {/* glow */}
      <div className="absolute top-[200px] left-[35%] w-[600px] h-[400px] bg-purple-600/30 blur-[140px] rounded-full"></div>

      <div className="container relative z-10">

        {product.map((product, index) => (

          <div className="row align-items-center mb-5" key={index}>

            {/* ICON */}
            <div className="col-md-4 text-center">

              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-xl p-5 inline-block"
                style={{ fontSize: "40px", color: "#a855f7" }}
              >
                {product.icon}
              </motion.div>

            </div>

            {/* TEXT */}
            <div className="col-md-8">

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >

                <h3 className="fw-bold mb-3 text-purple-400">
                  {product.title}
                </h3>

                <p className="text-gray-400 mb-3">
                  {product.desc}
                </p>

                <ul className="text-gray-300">

                  {product.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}

                </ul>

              </motion.div>

            </div>

          </div>

        ))}

      </div>

    </section>
    </>
  );
};

export default Product;