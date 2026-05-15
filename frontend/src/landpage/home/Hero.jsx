import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import { FaUserCheck, FaChartLine, FaAward } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Hero() {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#050816] text-white flex flex-col items-center justify-center">

      {/* grid particles */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:40px_40px] opacity-20"></div>

      {/* glowing purple blob */}
      <div className="absolute bottom-[-200px] w-[900px] h-[500px] bg-purple-600/40 blur-[150px] rounded-full animate-pulse"></div>


      {/* HERO CONTENT */}
      <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-12 mt-32">

        {/* LEFT TEXT */}
        <div className="max-w-xl -mt-10">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold leading-tight"
          >
            Explore Tradoo and <br />

            <span className="text-purple-400 mt-4">
              <TypeAnimation
                sequence={[
                  "Start Trading",
                  1000,
                  "Explore Stocks",
                  1000,
                  "Analyze Markets",
                  1000,
                  "Track Profits",
                  1000
                ]}
                speed={40}
                repeat={Infinity}
              />
            </span>

          </motion.h1>

          <p className="text-gray-400 mt-12 mb-24 py-2 ">
            Unlock your trading potential in a fully regulated environment
          </p>

          <Link
            to="/dashboard"
            className="mt-35 px-6 py-2 bg-white text-black rounded-full font-semibold hover:bg-purple-500 hover:text-white transition shadow-lg"
          >
            Start Trading
          </Link>

        </div>


        {/* RIGHT VIDEO */}
        <div className="w-full md:w-[590px] h-[350px] rounded-4xl overflow-hidden border border-white/10 shadow-2xl">

          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/trading-demo3.mp4" type="video/mp4" />
          </video>

        </div>

      </div>


      {/* STATS SECTION */}
      <div ref={ref} className="relative z-10 w-full flex justify-center mt-14 px-6">

        <div className="w-full max-w-7xl bg-white/5 text-white rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6  backdrop-blur-xl">

          {/* Active Traders */}
          <div className="flex items-center gap-4 hover:scale-105 transition">

            <FaUserCheck size={40} className="text-purple-400" />

            <div>
              <h2 className="text-4xl font-bold">
                {inView && <CountUp end={228} duration={3} />}K
              </h2>

              <p className="text-sm text-gray-400">
                Active traders
              </p>
            </div>

          </div>


          {/* Market Capital */}
          <div className="flex items-center gap-4 hover:scale-105 transition">

            <FaChartLine size={40} className="text-purple-400" />

            <div>
              <h2 className="text-4xl font-bold">
                {inView && <CountUp end={918} duration={3} />}K
              </h2>

              <p className="text-sm text-gray-400">
                Market capital
              </p>
            </div>

          </div>


          {/* Total Revenue */}
          <div className="flex items-center gap-4 hover:scale-105 transition">

            <FaArrowTrendUp size={40} className="text-purple-400" />

            <div>
              <h2 className="text-4xl font-bold">
                {inView && <CountUp end={89} duration={3} />}M
              </h2>

              <p className="text-sm text-gray-400">
                Total revenue
              </p>
            </div>

          </div>


          {/* Awards */}
          <div className="flex items-center  gap-4 hover:scale-105 transition">

            <FaAward size={40} className="text-purple-400" />

            <div>
              <h2 className="text-4xl font-bold">
                {inView && <CountUp end={21} duration={3} />}+
              </h2>

              <p className="text-sm text-gray-400">
                Awards
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}