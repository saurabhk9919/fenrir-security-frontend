import {
  FiBell,FiCalendar,FiGrid,FiHelpCircle,FiHome,FiSettings,FiTarget} from "react-icons/fi";

import { MdOutlineDashboard } from "react-icons/md";

const navIcons = {
  dashboard: MdOutlineDashboard,
  projects: FiGrid,
  scans: FiTarget,
  schedule: FiCalendar,
  notifications: FiBell,
  settings: FiSettings,
  support: FiHelpCircle,
};
function SidebarNavButton({ item }) {
  const Icon = navIcons[item.iconKey];

  return (
    <button
      className={`w-full rounded-xl px-3 py-2 text-left text-sm font-medium ${
        item.active
          ? "bg-teal-100 text-teal-700" : "text-slate-600 hover:bg-slate-100"
      }`}>
      <span className="flex items-center gap-2">
        <Icon className="text-base" />
        <span>{item.label}</span>
      </span>
    </button>
  );
}

function Sidebar({ navPrimary, navSecondary }) {
  return (
    <aside className="flex min-h-screen w-56 flex-col justify-between border-r border-slate-200 bg-white px-4 py-5">
      <div>
        <div className="mb-8 flex items-center gap-2 px-2">
          <span className="grid h-5 w-5 place-items-center rounded-full bg-primary text-white">
            <FiHome className="text-[11px]" />
          </span>
          <span className="text-2xl font-semibold text-teal-600">aps</span>
        </div>

        <nav className="space-y-1">
          {navPrimary.map((item) => (
            <SidebarNavButton key={item.label} item={item} />
          ))}
        </nav>

        <div className="my-6 border-t border-slate-200" />
      <nav className="space-y-1">
          {navSecondary.map((item) => (
            <SidebarNavButton key={item.label} item={item} />
          ))}
        </nav>
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
        <p className="text-xs text-slate-400">saurabhkashyap7732@gmail.com</p>
        <p className="text-sm font-semibold text-slate-700">Web Lead</p>
      </div>
    </aside>
  );
}

export default Sidebar;
