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
  return (
    <div className="min-h-screen bg-[#f6f8fb] text-slate-700">
      <div className="flex">
        <Sidebar navPrimary={navPrimary} navSecondary={navSecondary} />

        <main className="flex-1 p-6">
          <div className="rounded-2xl border border-slate-200 bg-white">
            <TopSection summaryItems={summaryItems} />

            <div className="px-6 py-5">
              <StatsGrid stats={stats} />
              <ScansPanel scans={scans} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
export default DashboardHome;