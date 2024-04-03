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
          innerRadius={100}
          outerRadius={150}
          fill="#8884d8"
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="0.9em">
          <tspan x="50%" dy="-3em">
            Sectors Hiring in
          </tspan>
        </text>
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="2em" fontWeight="bold">
          <tspan x="50%" dy="-0.3em">
            2024
          </tspan>
        </text>

        <Legend
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          iconSize={19}
          wrapperStyle={{ borderRadius: "5px" }}
          content={({ payload }) =>
            (payload ?? []).map((entry, index) => (
              <span key={`item-${index}`} style={{ paddingRight: "20px" }}>
                <span
                  style={{
                    display: "inline-block",
                    width: "19px",
                    transform: "translateY(3px)",
                    height: "19px",
                    borderRadius: "6px",
                    marginRight: "5px",

                    backgroundColor: entry.color,
                  }}
                ></span>
                <span style={{ paddingLeft: "0px", color: entry.color }}>{entry.value}</span>
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
