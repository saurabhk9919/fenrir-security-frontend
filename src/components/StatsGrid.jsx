import { FiAlertCircle, FiAlertTriangle, FiArrowDown, FiArrowUp, FiSearch } from "react-icons/fi";

const statIcons = {
  critical: { icon: FiAlertCircle, iconColor: "text-red-500", iconBg: "bg-pink-100 dark:bg-red-950/40" },
  high: { icon: FiAlertTriangle, iconColor: "text-orange-500", iconBg: "bg-orange-100 dark:bg-orange-950/40" },
  medium: { icon: FiAlertTriangle, iconColor: "text-yellow-600", iconBg: "bg-yellow-100 dark:bg-yellow-950/40" },
  low: { icon: FiSearch, iconColor: "text-blue-500", iconBg: "bg-blue-100 dark:bg-blue-950/40" },
};

function StatsGrid({ stats }) {
  return (
    <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
    {stats.map((card) => {
        const iconData = statIcons[card.iconKey];
        const Icon = iconData.icon;
        const isDecrease = card.change.toLowerCase().includes("decrease");
        const TrendIcon = isDecrease ? FiArrowDown : FiArrowUp;
     return (
          <div key={card.title} className="rounded-xl border border-slate-200 bg-white p-4 font-semibold dark:border-slate-700 dark:bg-slate-800/40">
           <div className="mb-2 flex items-center justify-between">
              <p className="text-sm text-slate-500 dark:text-slate-400">{card.title}</p>
              <span className={`grid h-6 w-6 place-items-center rounded-md ${iconData.iconBg}`}>
                <Icon className={`text-sm ${iconData.iconColor}`} />
              </span>
            </div>
            <div className="mt-1 flex items-center justify-start gap-3">
              <p className="text-3xl font-semibold text-slate-700 dark:text-slate-300">{card.value}</p>
              <p className={`inline-flex items-center gap-1 text-[11px] font-medium ${card.trend}`}>
                <TrendIcon className="text-[11px]" />
                {card.change}
                
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default StatsGrid;
