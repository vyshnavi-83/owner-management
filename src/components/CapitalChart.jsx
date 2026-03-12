import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const COLORS = ["#3b82f6", "#22c55e", "#f59e0b", "#ef4444", "#4f46e5"];

export default function CapitalChart({ owners }) {

  const data = owners.map((o) => ({
    name: o.name,
    value: parseInt(o.ratio)
  }));

  return (
    <div className="chart-card">

      <h3>Capital Allocation</h3>

      <PieChart width={300} height={250}>
        <Pie
          data={data}
          dataKey="value"
          outerRadius={80}
          label
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>

    </div>
  );
}