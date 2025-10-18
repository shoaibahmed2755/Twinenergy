import {
  HomeIcon,
  GlobeAltIcon,
  UsersIcon,
  CalculatorIcon,
  UserIcon,
  ChartBarIcon,
  LightBulbIcon,
  MapIcon,
} from "@heroicons/react/24/solid";

export default function BottomNav({ activeTab, setActiveTab }) {
  const tabs = [
    { key: "advancedDashboard", label: "Home", icon: HomeIcon }, // ✅ NEW TAB
    { key: "dashboard", label: "Dashboard", icon: ChartBarIcon  },
    { key: "coach", label: "Coach", icon: UserIcon },
    { key: "impact", label: "Alternative", icon: GlobeAltIcon },
    { key: "actions", label: "Life-Tips", icon: LightBulbIcon },
    { key: "community", label: "Community", icon: UsersIcon },
    { key: "calculator", label: "Calc", icon: CalculatorIcon },
    //{ key: "trends", label: "Trends", icon: ChartBarIcon },
    { key: "map", label: "Map", icon: MapIcon },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2 shadow-lg">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.key;
        return (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex flex-col items-center text-xs ${
              isActive ? "text-green-600" : "text-gray-500"
            }`}
          >
            <Icon className="h-6 w-6 mb-1" />
            <span>{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
