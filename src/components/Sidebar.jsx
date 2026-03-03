import {FiBell,FiCalendar,FiGrid,FiHelpCircle,FiHome,FiSettings,FiTarget, FiMoon, FiSun} from "react-icons/fi";
import { MdOutlineDashboard, MdAccountCircle } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

const navIcons = {
  dashboard: MdOutlineDashboard,
  projects: FiGrid,
  scans: FiTarget,
  schedule: FiCalendar,
  notifications: FiBell,
  settings: FiSettings,
  support: FiHelpCircle,
};
function SidebarNavButton({ item, onNavigate }) {
  const Icon = navIcons[item.iconKey];
  const navigate = useNavigate();
  const location = useLocation();
  
  const isActive = item.route && location.pathname === item.route;

  const handleClick = () => {
    if (item.route) {
      navigate(item.route);
      if (onNavigate) {
        onNavigate();
      }}};
 return (
    <button
      onClick={handleClick}
      className={`w-full rounded-xl px-3 py-2 text-left text-sm font-medium ${
        isActive
          ? "bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300" 
          : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
      }`}>
      <span className="flex items-center gap-2">
        <Icon className="text-base" />
        <span>{item.label}</span>
      </span>
    </button>
  );
}
function Sidebar({ navPrimary, navSecondary, className = "", onNavigate }) {
  const { isDark, toggleTheme } = useTheme();
  return (
    <aside className={`flex w-56 flex-col justify-between border-r border-slate-200 bg-white px-4 py-5 dark:border-slate-700 dark:bg-slate-800/80 ${className}`}>
      <div>
        <div className="mb-8 flex items-center gap-2 px-2">
          <span className="grid h-5 w-5 place-items-center rounded-full bg-primary text-white">
            <div className="h-2 w-2 bg-white rounded-full"></div>
          </span>
          <span className="text-2xl font-semibold text-teal-600 dark:text-teal-400">aps</span>
        </div>

        <nav className="space-y-1">
          {navPrimary.map((item) => (
            <SidebarNavButton key={item.label} item={item} onNavigate={onNavigate} />
          ))}
        </nav>

        <div className="my-6 border-t border-slate-200 dark:border-slate-700" />
      <nav className="space-y-1">
          {navSecondary.map((item) => (
            <SidebarNavButton key={item.label} item={item} onNavigate={onNavigate} />
          ))}
        </nav>
        
        <button
          onClick={toggleTheme}
          className="mt-4 w-full rounded-xl px-3 py-2 text-left text-sm font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 flex items-center gap-2"
          title={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? <FiSun className="text-base" /> : <FiMoon className="text-base" />}
          <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
        </button>
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0">
            <MdAccountCircle className="text-4xl text-primary" />
          </div>
          <div className="flex flex-col">
            <p className="text-xs text-slate-400 dark:text-slate-500">admin@edu.com</p>
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Web Lead</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
export default Sidebar;
