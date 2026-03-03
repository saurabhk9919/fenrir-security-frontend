import FindingLog from "../components/FindingLog";
import LiveScanConsole from "../components/LiveConsole";
import ScanProgressHeader from "../components/ScanHeader";
import ScanStatusBar from "../components/ScanStatusbar";
import Sidebar from "../components/Sidebar";
import { navPrimary, navSecondary } from "../data/dashboardMockData";
import {activityLogs,findingLogs,scanMetadata,scanProgress,scanStatus,scanSteps,} from "../data/scanMockData";

function ScanPage() {
  return (
    <div className="min-h-screen bg-[#f6f8fb] text-slate-700">
      <div className="flex">
        <Sidebar navPrimary={navPrimary} navSecondary={navSecondary} />

        <main className="flex-1 p-6">
          <div className="flex flex-col rounded-2xl border border-slate-200 bg-white">
            {/* Top breadcrumb */}
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-3">
              <div className="text-sm text-slate-500">
                <span className="font-semibold text-slate-700">Scan</span>
                <span className="mx-2">/</span>
                <span>Private Assets</span>
                <span className="mx-2">/</span>
                <span className="text-primary">New Scan</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700">
                  Export Report
                </button>
                <button className="rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-500">
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