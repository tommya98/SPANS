import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Title,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Title
);

const LineChart = ({ lineData }) => {
  const options = {
    plugins: {
      title: {
        display: true,
        text: "비행 속도",
      },
    },
    scales: {
      y: {
        min: 0,
        max: Math.floor(Math.max(...lineData) * 1.2),
      },
    },
    maintainAspectRatio: false,
  };
  const labels = lineData.map((_, ind) => {
    return `${ind}초`;
  });
  const data = {
    labels,
    datasets: [
      {
        data: lineData,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(220, 190, 150, 0.5)",
      },
    ],
  };

  return <Line options={options} data={data} width="1280px" height="300px" />;
};

export default LineChart;
