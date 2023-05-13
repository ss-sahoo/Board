import { Line } from "react-chartjs-2";
import "chart.js/auto";

const chartData = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"],
  datasets: [
    {
      label: "User",
      data: [120, 290, 350, 150, 20, 390],
      backgroundColor: "#9BDD7C",
      borderColor: "#9BDD7C",
      borderWidth: 1,
      lineTension: 0.4,
      pointRadius: 0,
    },
    {
      label: "Guest",
      data: [500, 160, 80, 120, 360, 490],
      backgroundColor: "#E9A0A0",
      borderColor: "#E9A0A0",
      borderWidth: 1,
      lineTension: 0.4,
      pointRadius: 0,
      pointStyle: "circle",
    },
  ],
};

const chartOptions = {
  scales: {
    x: {},
    y: {
      type: "linear",
      beginAtZero: true,
      ticks: {
        stepSize: 100,
        callback: (value) => `${value}`,
      },
    },
  },
};
const ChartComponent = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};
export default ChartComponent;
