import { useEffect, useState } from "react";
import ScansPanel from "../components/ScansPanel";
import Sidebar from "../components/Sidebar";
import StatsGrid from "../components/StatsGrid";
import TopSection from "../components/TopSection";
import {
  navPrimary,
  navSecondary,
  scans,
  stats,
  summaryItems,
} from "../data/dashboardMockData";

function DashboardHome() {
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (message) => {
    setToastMessage(message);
  };

  useEffect(() => {
    if (!toastMessage) {
      return;
    }

    const timer = setTimeout(() => {
      setToastMessage("");
    }, 2000);

    return () => clearTimeout(timer);
  }, [toastMessage]);

  return (
    <div className="min-h-screen bg-[#f6f8fb] text-slate-700">
      {toastMessage && (
        <div className="fixed right-6 top-6 z-50 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-lg">
          {toastMessage}
        </div>
      )}
      <div className="flex">
        <Sidebar navPrimary={navPrimary} navSecondary={navSecondary} />

        <main className="flex-1 p-6">
          <div className="rounded-2xl border border-slate-200 bg-white">
            <TopSection
              summaryItems={summaryItems}
              onNewScan={() => showToast("New scan started")}
              onExportReport={() => showToast("Export report started")}
              onStopScan={() => showToast("Scan stopped")}
            />

            <div className="px-6 py-5">
              <StatsGrid stats={stats} />
              <ScansPanel
                scans={scans}
                onNewScan={() => showToast("New scan started")}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
export default DashboardHome;