import React from "react";
import { Pie } from "react-chartjs-2";

const chartData = {
  labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
  datasets: [
    {
      data: [55, 31, 14],
      backgroundColor: ["#98D89E", "#F7DC7D", "#EE8484"],
    },
  ],
};
const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "right",
      labels: {
        generateLabels: function (chart) {
          const data = chart.data;
          if (data.labels.length && data.datasets.length) {
            return data.labels.map((label, i) => {
              const dataset = data.datasets[0];
              const percentage = (
                (dataset.data[i] / dataset.data.reduce((a, b) => a + b)) *
                100
              ).toFixed(2);
              return {
                text: `${label} (${percentage}%)`,
                fillStyle: dataset.backgroundColor[i],
              };
            });
          }
          return [];
        },
      },
    },
  },
};

const PieChart = () => {
  return (
    <div
      style={{
        position: "relative",
        bottom: "70px",
      }}
    >
      <Pie data={chartData} options={chartOptions} />
    </div>
  );
};

export default PieChart;
