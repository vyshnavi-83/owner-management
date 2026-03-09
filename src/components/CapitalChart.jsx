import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function CapitalChart({ owners }) {
  const data = {
    labels: owners.map((o) => o.name),
    datasets: [
      {
        label: "Capital Allocation",
        data: owners.map((o) => o.capital),
        backgroundColor: [
          "#4CAF50",
          "#2196F3",
          "#FF9800",
          "#E91E63",
          "#9C27B0"
        ]
      }
    ]
  };

  return (
    <div style={{ width: "400px", marginTop: "20px" }}>
      <h3>Capital Allocation</h3>
      <Pie data={data} />
    </div>
  );
}

export default CapitalChart;