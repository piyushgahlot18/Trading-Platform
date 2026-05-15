import React, { useEffect, useRef, useContext } from "react";
import { createChart, CandlestickSeries } from "lightweight-charts";
import GeneralContext from "./GeneralContext";

function generateCandles(count = 150) {

  const data = [];
  let lastClose = 380;

  const startDate = new Date("2025-01-01");

  for (let i = 0; i < count; i++) {

    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);

    const time = date.toISOString().split("T")[0];

    const open = lastClose + (Math.random() - 0.5) * 5;
    const close = open + (Math.random() - 0.5) * 10;

    const high = Math.max(open, close) + Math.random() * 5;
    const low = Math.min(open, close) - Math.random() * 5;

    data.push({ time, open, high, low, close });

    lastClose = close;
  }

  return data;
}

const AnalyticsWindow = ({ uid, onClose }) => {

  const chartContainer = useRef(null);
  const generalContext = useContext(GeneralContext);

  const handleBuy = () => {
    generalContext.openBuyWindow(uid);
  };

  const handleSell = () => {
    generalContext.openSellWindow(uid);
  };

  useEffect(() => {

    const chart = createChart(chartContainer.current, {
      width: chartContainer.current.clientWidth,
      height: chartContainer.current.clientHeight,

      layout: {
        background: { color: "#020617" },
        textColor: "#94a3b8",
      },

      grid: {
        vertLines: { color: "#1e293b" },
        horzLines: { color: "#1e293b" },
      },

      rightPriceScale: {
        borderColor: "#1e293b",
      },

      timeScale: {
        borderColor: "#1e293b",
      },
    });

    const candleSeries = chart.addSeries(CandlestickSeries, {
      upColor: "#22c55e",
      downColor: "#ef4444",
      borderVisible: false,
      wickUpColor: "#22c55e",
      wickDownColor: "#ef4444",
    });

    candleSeries.setData(generateCandles());

    chart.timeScale().fitContent();

    const resizeHandler = () => {
      chart.applyOptions({
        width: chartContainer.current.clientWidth,
        height: chartContainer.current.clientHeight,
      });
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      chart.remove();
    };

  }, [uid]);

  return (
    <div className="analytics-window">



      <div className="chart-container"
        ref={chartContainer}
        style={{
          width: "100%",
          flex: 1
        }}
      />

      <div className="analytics-actions">

        <button className="buy-btn" onClick={handleBuy}>
          Buy
        </button>

        <button className="sell-btn" onClick={handleSell}>
          Sell
        </button>

        <button className="close-btn-bottom" onClick={onClose}>
          Close
        </button>

      </div>

    </div>
  );
};

export default AnalyticsWindow;