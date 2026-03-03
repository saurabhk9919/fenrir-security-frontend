import { useEffect, useState } from "react";
import FindingLog from "../components/FindingLog";
import LiveScanConsole from "../components/LiveConsole";
import ScanProgressHeader from "../components/ScanHeader";
import ScanStatusBar from "../components/ScanStatusbar";
import Sidebar from "../components/Sidebar";
import { navPrimary, navSecondary } from "../data/dashboardMockData";
import {activityLogs,findingLogs,scanMetadata,scanProgress,scanStatus,scanSteps,} from "../data/scanMockData";
import { FiHome } from "react-icons/fi";

function ScanPage() {
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
          <div className="flex flex-col rounded-2xl border border-slate-200 bg-white">
            {/* Top breadcrumb */}
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-3">
              <div className="text-sm text-slate-500">
                <span className="font-semibold text-slate-700">Scan
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
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => showToast("Export report started")}
                  className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700">
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
            
            <div className="grid grid-cols-2 gap-4 p-6">
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