"use client";
import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const data = [
  { name: "Mon", solar: 400, wind: 240, hydro: 100 },
  { name: "Tue", solar: 300, wind: 139, hydro: 80 },
  { name: "Wed", solar: 200, wind: 980, hydro: 120 },
  { name: "Thu", solar: 278, wind: 390, hydro: 200 },
  { name: "Fri", solar: 189, wind: 480, hydro: 150 },
  { name: "Sat", solar: 239, wind: 380, hydro: 110 },
  { name: "Sun", solar: 349, wind: 430, hydro: 130 },
];

export default function EnergyChart() {
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl shadow-lg p-6 hover:shadow-emerald-500/10 transition-all">
      <h3 className="text-xl font-semibold text-white mb-4">
        Weekly Energy Output
      </h3>
      <p className="text-slate-400 mb-6 text-sm">
        A visualization of renewable energy distribution across sources.
      </p>

      <div className="h-72 w-full">
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="solar" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#34d399" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#34d399" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="wind" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#60a5fa" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="hydro" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#a78bfa" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "1px solid #334155",
                color: "#fff",
              }}
            />
            <Legend />
            <Area
              type="monotone"
              dataKey="solar"
              stroke="#34d399"
              fillOpacity={1}
              fill="url(#solar)"
            />
            <Area
              type="monotone"
              dataKey="wind"
              stroke="#60a5fa"
              fillOpacity={1}
              fill="url(#wind)"
            />
            <Area
              type="monotone"
              dataKey="hydro"
              stroke="#a78bfa"
              fillOpacity={1}
              fill="url(#hydro)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
