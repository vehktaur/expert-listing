"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { chartData as data } from "@/data";

export function MonthlyOverviewChart() {
  return (
    <ResponsiveContainer width="100%" height={200} className="text-xs">
      <BarChart data={data} barGap={2} barCategoryGap={8}>
        <CartesianGrid vertical={false} horizontal={false} />

        <XAxis dataKey="month" tickLine={false} axisLine={false} />

        <YAxis
          tickLine={false}
          tickFormatter={(value) => `${value}m`}
          ticks={[0, 10, 20, 30, 40, 50]}
          domain={[0, 50]}
        />

        <Tooltip formatter={(value: number | undefined) => `${value}m`} />

        <Bar dataKey="blue" className="fill-blue" />
        <Bar dataKey="green" className="fill-green" />
        <Bar dataKey="red" className="fill-error" />
      </BarChart>
    </ResponsiveContainer>
  );
}
