"use client";
import React from "react";
import { TrendingUp, Zap, Leaf, Clock } from "lucide-react";

const metrics = [
  {
    title: "Efficiency Boost",
    value: "+12%",
    desc: "System performance improvement",
    icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "Energy Saved",
    value: "24 kWh",
    desc: "Compared to last week",
    icon: <Zap className="w-5 h-5 text-yellow-400" />,
    color: "from-yellow-500 to-amber-600",
  },
  {
    title: "CO₂ Reduced",
    value: "48 kg",
    desc: "Carbon offset achieved",
    icon: <Leaf className="w-5 h-5 text-green-400" />,
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Active Hours",
    value: "32h",
    desc: "Efficient energy use time",
    icon: <Clock className="w-5 h-5 text-blue-400" />,
    color: "from-blue-500 to-cyan-600",
  },
];

export default function MetricsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric, i) => (
        <div
          key={i}
          className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-6 shadow-lg hover:shadow-emerald-500/10 transition-transform transform hover:-translate-y-1"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br flex items-center justify-center"
                 style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
            >
              {metric.icon}
            </div>
            <span className="text-2xl font-bold text-white">{metric.value}</span>
          </div>
          <h4 className="text-white font-semibold">{metric.title}</h4>
          <p className="text-sm text-slate-400">{metric.desc}</p>
        </div>
      ))}
    </div>
  );
}
