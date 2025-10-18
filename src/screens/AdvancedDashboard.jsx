import React, { useState } from "react";
import Papa from "papaparse";
import { Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Upload, Zap, Leaf, TrendingDown } from "lucide-react";
import { callGeminiAPI } from "../gemini"; // optional AI feature

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

const AdvancedDashboard = () => {
  const [data, setData] = useState([]);
  const [summary, setSummary] = useState(null);
  const [aiSummary, setAiSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const parsed = results.data.map((row) => ({
          Date: row.Date,
          Category: row.Category,
          Activity: row.Activity,
          Amount: parseFloat(row.Amount) || 0,
          CO2_Emission: parseFloat(row.CO2_Emission) || 0,
        }));
        setData(parsed);
        computeSummary(parsed);
      },
    });
  };

  const computeSummary = (records) => {
    if (!records.length) return;
    const total = records.reduce((sum, r) => sum + r.CO2_Emission, 0);
    const categories = {};
    records.forEach((r) => {
      categories[r.Category] = (categories[r.Category] || 0) + r.CO2_Emission;
    });
    const avg = total / records.length;
    const highest = Object.entries(categories).sort((a, b) => b[1] - a[1])[0];
    setSummary({
      total: total.toFixed(2),
      average: avg.toFixed(2),
      highestCategory: highest ? highest[0] : "N/A",
      categoryBreakdown: categories,
    });
  };

  const askGemini = async () => {
    if (!summary) return;
    setLoading(true);
    const prompt = `
      Analyze this carbon footprint summary:
      Total CO₂: ${summary.total} kg
      Average per record: ${summary.average} kg
      Highest category: ${summary.highestCategory}
      Breakdown: ${JSON.stringify(summary.categoryBreakdown)}
      Suggest 3 personalized sustainability tips. 
      Output plain text only for in-app display.
      no astreks only just respected output
    `;
    try {
      const response = await callGeminiAPI(prompt);
      setAiSummary(response || "No AI response received.");
    } catch (err) {
      setAiSummary("Gemini API Error");
    }
    setLoading(false);
  };

  const chartData =
    summary && {
      labels: Object.keys(summary.categoryBreakdown),
      datasets: [
        {
          label: "CO₂ Emission (kg)",
          data: Object.values(summary.categoryBreakdown),
          backgroundColor: [
            "#4ade80",
            "#60a5fa",
            "#f87171",
            "#facc15",
            "#a78bfa",
            "#fb923c",
          ],
        },
      ],
    };

  const lineData =
    data.length &&
    ({
      labels: data.map((d) => d.Date),
      datasets: [
        {
          label: "Daily CO₂ Emission (kg)",
          data: data.map((d) => d.CO2_Emission),
          borderColor: "#34d399",
          backgroundColor: "rgba(52, 211, 153, 0.3)",
          tension: 0.3,
        },
      ],
    });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-green-50 text-gray-800 p-6 space-y-6">
      <h1 className="text-3xl font-extrabold text-green-700 text-center">
        🌿 Advanced Sustainability Insights
      </h1>

      <div className="bg-white rounded-xl shadow p-4 border border-gray-200">
        <label className="font-semibold">Upload CSV File:</label>
        <input
          type="file"
          accept=".csv"
          onChange={handleFileUpload}
          className="block w-full mt-2 p-2 border rounded-md"
        />
      </div>

      {summary && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg text-center shadow-sm">
              <p className="font-bold text-gray-700">Total CO₂</p>
              <p className="text-xl text-green-700">{summary.total} kg</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center shadow-sm">
              <p className="font-bold text-gray-700">Average</p>
              <p className="text-xl text-blue-700">{summary.average} kg</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg text-center shadow-sm">
              <p className="font-bold text-gray-700">Highest Category</p>
              <p className="text-xl text-red-700">{summary.highestCategory}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div className="bg-white p-4 rounded-lg shadow border border-gray-200 hover:shadow-lg transition">
              <h3 className="font-semibold mb-2 text-gray-800">CO₂ by Category</h3>
              <Pie data={chartData} />
            </div>
            <div className="bg-white p-4 rounded-lg shadow border border-gray-200 hover:shadow-lg transition">
              <h3 className="font-semibold mb-2 text-gray-800">CO₂ Trend</h3>
              <Line data={lineData} />
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-gray-200 hover:shadow-lg transition">
            <h3 className="font-semibold mb-2 text-gray-800">AI Insights</h3>
            <button
              onClick={askGemini}
              disabled={loading}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              {loading ? "Analyzing…" : "Ask Gemini"}
            </button>
            {aiSummary && (
              <div className="mt-3 bg-green-50 p-3 rounded border border-green-100 whitespace-pre-line text-gray-700">
                {aiSummary}
              </div>
            )}
          </div>
        </>
      )}

      <footer className="mt-10 bg-white border-t py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Twinergy — Empowering a sustainable tomorrow.
      </footer>
    </div>
  );
};

export default AdvancedDashboard;
