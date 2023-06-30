import React from "react";
import "./styles.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart() {
  const data = [
    { degree: "23%", temperature: 6 },
    { degree: "29%", temperature: 18 },
    { degree: "58%", temperature: 10 },
    { degree: "23%", temperature: 15 },
    { degree: "29%", temperature: 14 },
    { degree: "58%", temperature: 10 },
    { degree: "23%", temperature: 15 },
    { degree: "29%", temperature: 10 },
  ];
  return (
    <div className="chart-section">
      <ResponsiveContainer width="96%" height={90}>
      <AreaChart
        data={data}
        margin={{ top: 0, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#5c9be2" stopOpacity={0.8} />
          </linearGradient>
        </defs>
        <XAxis dataKey="degree" axisLine={{ stroke: '#ccc', strokeWidth: 1 }} />
        <YAxis tickCount={0} />
        <CartesianGrid strokeWidth="1" stroke="#000" horizontal={false}/>
        <Tooltip />
        <Area
          type="monotone"
          dataKey="temperature"
          stroke="#5c9be2"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
