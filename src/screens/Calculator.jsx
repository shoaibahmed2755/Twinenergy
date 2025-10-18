import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

export default function Calculator({ footprint, setFootprint }) {
  const [inputs, setInputs] = useState({
    consumption: "",
    travel: "",
    digital: "",
    finance: "",
  });

  const [results, setResults] = useState(null);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const calculateFootprint = () => {
    const factors = {
      consumption: 0.85,
      travel: 0.12,
      digital: 0.06,
      finance: 0.0003,
    };

    const newFootprint = {
      consumption: parseFloat(inputs.consumption || 0) * factors.consumption,
      travel: parseFloat(inputs.travel || 0) * factors.travel,
      digital: parseFloat(inputs.digital || 0) * factors.digital,
      finance: parseFloat(inputs.finance || 0) * factors.finance,
    };

    setResults(newFootprint);
    setFootprint(newFootprint); // ✅ Updates global state (Dashboard & Trends will reflect)
  };

  const data = results
    ? Object.keys(results).map((key) => ({
        name: key,
        value: results[key],
      }))
    : [];

  return (
    <div className="max-w-3xl mx-auto px-6 py-8">
      <h1 className="text-2xl font-semibold text-green-700 mb-6">Carbon Footprint Calculator</h1>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block font-medium mb-1">Electricity Usage (kWh)</label>
          <input
            type="number"
            name="consumption"
            value={inputs.consumption}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Travel Distance (km)</label>
          <input
            type="number"
            name="travel"
            value={inputs.travel}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Digital Usage (hours/day)</label>
          <input
            type="number"
            name="digital"
            value={inputs.digital}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Monthly Spending (₹)</label>
          <input
            type="number"
            name="finance"
            value={inputs.finance}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
        </div>
      </div>

      <button
        onClick={calculateFootprint}
        className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
      >
        Calculate
      </button>

      {results && (
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Your Emissions (kg CO₂)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
