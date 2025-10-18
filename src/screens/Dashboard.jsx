import React, { useState } from 'react';
import FootprintChart from '../components/FootprintChart';

const Dashboard = ({ footprint, setFootprint }) => {
  const [form, setForm] = useState(footprint);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: Number(value) }));
  };

  const apply = (e) => {
    e.preventDefault();
    setFootprint(form);
  };

  const total = Object.values(form).reduce((a, b) => a + b, 0);
  const score = Math.round(total * 10);

  return (
    <>
      <h1 className="text-3xl font-bold mb-2 text-gray-900">Dashboard</h1>
      <p className="text-gray-500 mb-4">Your weekly sustainability snapshot</p>

      <div className="bg-gradient-to-br from-emerald-500 to-green-600 text-white p-6 rounded-2xl text-center mb-6">
        <p className="text-sm">Your Twinergy Score</p>
        <p className="text-5xl font-bold">{score}</p>
      </div>

      <div className="bg-white p-4 rounded-2xl shadow-md mb-6">
        <h2 className="font-bold mb-3">Weekly Footprint Breakdown</h2>
        <FootprintChart dataObj={form} />
      </div>

      <form onSubmit={apply} className="bg-white p-4 rounded-2xl shadow-md space-y-2">
        {['consumption', 'travel', 'digital', 'finance'].map((k) => (
          <label key={k} className="text-sm block capitalize">
            {k} %
            <input
              type="number"
              name={k}
              value={form[k]}
              onChange={handleChange}
              min="0"
              className="w-full border p-2 rounded mt-1 text-sm"
            />
          </label>
        ))}
        <button className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-emerald-600">
          Apply
        </button>
      </form>
    </>
  );
};

export default Dashboard;
