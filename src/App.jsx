import React, { useEffect, useState } from "react";
import BottomNav from "./components/BottomNav";
import Dashboard from "./screens/Dashboard";
import Impact from "./screens/Impact";
import Actions from "./screens/Actions";
import Community from "./screens/Community";
import Profile from "./screens/Profile";
import Calculator from "./screens/Calculator";
import Coach from "./screens/Coach";
import Trends from "./screens/Trends";
import MapScreen from "./screens/MapScreen";
import AdvancedDashboard from "./screens/AdvancedDashboard"; // ✅ NEW SCREEN
import { AnimatePresence, motion } from "framer-motion";
import { loadData, saveData } from "./utils/storage";

const screens = {
  dashboard: Dashboard,
  impact: Impact,
  actions: Actions,
  community: Community,
  profile: Profile,
  calculator: Calculator,
  coach: Coach,
  trends: Trends,
  map: MapScreen,
  advancedDashboard: AdvancedDashboard, // ✅ ADDED HERE
};

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  // global footprint state
  const [footprint, setFootprint] = useState({
    consumption: 40,
    travel: 25,
    digital: 20,
    finance: 15,
  });

  // weekly history for trends (array of 4 objects)
  const [history, setHistory] = useState(() => loadData("footprintHistory") || []);

  useEffect(() => {
    const saved = loadData("userFootprint");
    if (saved) setFootprint(saved);
  }, []);

  useEffect(() => {
    saveData("userFootprint", footprint);
    // push weekly snapshot to history (simple heuristic: push when footprint changes)
    setHistory((prev) => {
      const snapshot = { date: new Date().toISOString(), data: footprint };
      const next = [snapshot, ...prev].slice(0, 12); // keep up to 12 entries (weeks)
      saveData("footprintHistory", next);
      return next;
    });
  }, [footprint]);

  const ActiveScreen = screens[activeTab];

  return (
  <div className="min-h-screen flex flex-col bg-gray-50 font-inter">
    {/* App Header (optional for PC layout) */}
    <header className="bg-green-700 text-white py-4 shadow-md">
      <div className="container mx-auto px-8 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">TwinEnergy Dashboard</h1>
      </div>
    </header>

    <main className="flex-1 container mx-auto w-full px-10 py-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.18 }}
        >
          <ActiveScreen
            footprint={footprint}
            setFootprint={setFootprint}
            history={history}
            setHistory={setHistory}
          />
        </motion.div>
      </AnimatePresence>
    </main>

    <footer className="bg-white border-t border-gray-200 py-3">
      <div className="container mx-auto flex justify-center">
        <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </footer>
  </div>
);

}
