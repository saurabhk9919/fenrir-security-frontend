import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
    <div className="min-h-screen w-screen overflow-x-hidden bg-[#f6f8fb] text-slate-700 dark:bg-slate-900 dark:text-slate-200">
      {toastMessage && (
        <div className="fixed right-6 top-6 z-50 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-lg dark:bg-slate-800">
          {toastMessage}
        </div>
      )}
      <div className="flex h-screen overflow-hidden w-full">
        <div className="hidden lg:flex lg:min-h-screen flex-shrink-0">
          <Sidebar navPrimary={navPrimary} navSecondary={navSecondary} />
        </div>

        {isSidebarOpen && (
          <button
            type="button"
            aria-label="Close sidebar overlay"
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 z-40 bg-black/30 lg:hidden"
          />
        )}

        <div
          className={`fixed inset-y-0 left-0 z-50 transition-transform duration-300 lg:hidden ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Sidebar
            navPrimary={navPrimary}
            navSecondary={navSecondary}
            className="h-full w-64"
            onNavigate={() => setIsSidebarOpen(false)}
          />
        </div>

        <main className="flex-1 h-screen overflow-y-auto overflow-x-hidden p-2 sm:p-3 md:p-4 lg:p-6">
          <div className="mx-auto w-full max-w-7xl">
          <button
            type="button"
            onClick={() => setIsSidebarOpen(true)}
            className="mb-2 sm:mb-3 inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs sm:text-sm font-medium text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors lg:hidden"
          >
            <FiMenu size={18} />
            <span>Menu</span>
          </button>
        <div className="rounded-2xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800/50 w-full min-h-0 flex flex-col">
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
          </div>
        </main>
      </div>
    </div>
  );
}
export default DashboardHome;