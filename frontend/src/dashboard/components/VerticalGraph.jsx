import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,

  plugins: {

    legend: {
      position: "top",
      labels: {
        color: "#e2e8f0",
        font: {
          size: 12
        }
      }
    },

    title: {
      display: true,
      text: "Portfolio Holdings",
      color: "#f1f5f9",
      font: {
        size: 16,
        weight: "bold"
      }
    },

    tooltip: {
      backgroundColor: "#0f172a",
      titleColor: "#fff",
      bodyColor: "#e2e8f0",
      borderColor: "#334155",
      borderWidth: 1
    }

  },

  scales: {

    x: {
      grid: {
        color: "#1e293b"
      },
      ticks: {
        color: "#94a3b8"
      }
    },

    y: {
      grid: {
        color: "#1e293b"
      },
      ticks: {
        color: "#94a3b8"
      }
    }

  },

  animation: {
    duration: 1200,
    easing: "easeOutQuart"
  }

};

export function VerticalGraph({ data }) {

  const gradientData = {
    ...data,
    datasets: data.datasets.map(dataset => ({
      ...dataset,

      backgroundColor: (context) => {
        const chart = context.chart;
        const { ctx, chartArea } = chart;

        if (!chartArea) return;

        const gradient = ctx.createLinearGradient(
          0,
          chartArea.bottom,
          0,
          chartArea.top
        );

        gradient.addColorStop(0, "#2563eb");
        gradient.addColorStop(1, "#38bdf8");

        return gradient;
      },

      borderRadius: 6,
      barThickness: 30
    }))
  };

  return (
    <div className="chart-wrapper">
      <Bar options={options} data={gradientData} />
    </div>
  );

}