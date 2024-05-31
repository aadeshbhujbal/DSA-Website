import React from "react"
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Cybersecurity", value: 90 },
  { name: "Data Science and Analytics", value: 10 },
  { name: "Digital Marketing", value: 20 },
  { name: "Programming", value: 30 },
  { name: "Networking and Cloud Computing", value: 40 },
  { name: "Others", value: 60 },
]

const COLORS = ["#FACC15", "#3B82F6", "#F59E0B", "#EC4899", "#14B8A6", "#0A0A0A"]

const DonutChart = () => {
  return (
    <ResponsiveContainer width="100%" height={"100%"}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={90}
          outerRadius={130}
          fill="#8884d8"
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="0.9em">
          <tspan x="50%" dy="-3.5em">
            Sectors Hiring in
          </tspan>
        </text>
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="2em" fontWeight="bold">
          <tspan x="50%" dy="-0.5em">
            2024
          </tspan>
        </text>

        <Legend
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          iconSize={16}
          wrapperStyle={{ borderRadius: "3px", margin: "0 auto" }}
          content={({ payload }) =>
            (payload ?? []).map((entry, index) => (
              <span key={`item-${index}`} style={{ paddingRight: "15px", display: "flex-row", alignItems: "center" }}>
                <span
                  style={{
                    display: "inline-block",
                    width: "14px",
                    transform: "translateY(3px)",
                    height: "14px",
                    borderRadius: "4px",
                    marginRight: "7.5px",
                    backgroundColor: entry.color,
                  }}
                ></span>
                <span style={{ paddingLeft: "0px", color: entry.color, fontSize: "14px" }}>{entry.value}</span>
              </span>
            ))
          }
        />

        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default DonutChart
