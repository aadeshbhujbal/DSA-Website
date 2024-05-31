import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

interface AreaChartDataItem {
  year: string
  percent: number
}

interface AreaChartProps {
  data: AreaChartDataItem[]
}

const CustomAreaChart: React.FC<AreaChartProps> = ({ data }) => {
  return (
    <div className="chart_properties">
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="percent"
            type="number"
            domain={[0, 100]}
            tick={{ fontSize: 11 }}
            label={{ value: "Percentage", position: "insideBottom", offset: 2 }}
          />
          <YAxis
            dataKey="year"
            type="category"
            tick={{ fontSize: 11 }}
            label={{ value: "Year", angle: -90, position: "insideLeft" }}
          />
          <Area type="monotone" dataKey="year" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default CustomAreaChart
