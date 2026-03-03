import { useEffect, useState } from "react";
import FindingLog from "../components/FindingLog";
import LiveScanConsole from "../components/LiveConsole";
import ScanProgressHeader from "../components/ScanHeader";
import ScanStatusBar from "../components/ScanStatusbar";
import Sidebar from "../components/Sidebar";
import { navPrimary, navSecondary } from "../data/dashboardMockData";
import {activityLogs,findingLogs,scanMetadata,scanProgress,scanStatus,scanSteps,} from "../data/scanMockData";
import { FiHome, FiMenu } from "react-icons/fi";

function ScanPage() {
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
    <div className="min-h-screen bg-[#f6f8fb] text-slate-700 dark:bg-slate-900 dark:text-slate-200">
      {toastMessage && (
        <div className="fixed right-6 top-6 z-50 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-lg dark:bg-slate-800">
          {toastMessage}
        </div>
      )}
      <div className="flex">
        <div className="hidden lg:flex lg:min-h-screen">
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

        <main className="flex-1 p-3 sm:p-4 lg:p-6">
          <button
            type="button"
            onClick={() => setIsSidebarOpen(true)}
            className="mb-3 inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 lg:hidden"
          >
            <FiMenu />
            Menu
          </button>
          <div className="flex flex-col rounded-2xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800/50">
            {/* Top breadcrumb */}
            <div className="flex flex-col gap-3 border-b border-slate-200 px-4 py-3 sm:px-6 dark:border-slate-700 lg:flex-row lg:items-center lg:justify-between">
              <div className="text-sm text-slate-500 dark:text-slate-400">
                <span className="font-semibold text-slate-700 dark:text-slate-300">Scan
                  <FiHome className="ml-1 inline-block" />
                </span>
                <span className="mx-2">/</span>
                <span>Private Assets</span>
                <span className="mx-2">/</span>
                <button
                  type="button"
                  onClick={() => showToast("New scan started")}
                  className="text-primary font-medium hover:underline" >
                  New Scan
                </button>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => showToast("Export report started")}
                  className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-300">
                  Export Report
                </button>
                <button
                  type="button"
                  onClick={() => showToast("Scan stopped")}
                  className="rounded-lg border bg-red-200 border-red-200 px-4 py-2 text-sm font-medium text-red-500" >
                  Stop Scan
                </button>
              </div>
            </div>

            <ScanProgressHeader
              scanProgress={scanProgress}
              scanSteps={scanSteps}
              scanMetadata={scanMetadata}/>
            
            <div className="grid grid-cols-1 gap-4 p-4 sm:p-6 xl:grid-cols-2">
              <LiveScanConsole activityLogs={activityLogs} />
              <FindingLog findingLogs={findingLogs} />
            </div>

            <ScanStatusBar scanStatus={scanStatus} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default ScanPage;