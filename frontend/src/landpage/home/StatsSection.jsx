import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaUserCheck, FaChartLine, FaAward } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";

export default function StatsSection() {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  return (
    <section ref={ref} className="w-full  mt-0 ">

      <div className="w-full max-w-7xl bg-transparent text-white rounded-2xl p-10 grid grid-cols-2 md:grid-cols-4 gap-10 border border-white/10 backdrop-blur-sm">

        {/* Active Traders */}
        <div className="flex items-center gap-4">
          <FaUserCheck size={40} />

          <div>
            <h2 className="text-4xl font-bold">
              {inView && <CountUp end={228} duration={2} />}K
            </h2>
            <p className="text-sm">Active traders</p>
          </div>
        </div>

        {/* Market Capital */}
        <div className="flex items-center gap-4">
          <FaChartLine size={40} />

          <div>
            <h2 className="text-4xl font-bold">
              {inView && <CountUp end={918} duration={2} />}K
            </h2>
            <p className="text-sm">Market capital</p>
          </div>
        </div>

        {/* Revenue */}
        <div className="flex items-center gap-4">
          <FaArrowTrendUp size={40} />

          <div>
            <h2 className="text-4xl font-bold">
              {inView && <CountUp end={89} duration={2} />}M
            </h2>
            <p className="text-sm">Total revenue</p>
          </div>
        </div>

        {/* Awards */}
        <div className="flex items-center gap-4">
          <FaAward size={40} />

          <div>
            <h2 className="text-4xl font-bold">
              {inView && <CountUp end={21} duration={2} />}+
            </h2>
            <p className="text-sm">Awards</p>
          </div>
        </div>

      </div>

    </section>
  );
}