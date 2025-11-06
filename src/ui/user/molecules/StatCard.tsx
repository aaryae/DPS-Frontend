import React from "react";

type StatCardProps = {
  title: string;
  value: string | number;
  change?: string;
  icon?: React.ReactNode;          
  trend?: "up" | "down";
};

const StatCard=({
  title,
  value,
  change,
  icon,
  trend = "up",
}:StatCardProps) => {
  const bg = trend === "up" ? "bg-emerald-100" : "bg-blue-100";
  const pill = trend === "up" ? "bg-emerald-50 text-emerald-600" : "bg-blue-50 text-blue-600";

  return (
    <div className="p-4 rounded-2xl border bg-white/80 shadow-sm">
      <div className="flex items-start justify-between mb-3">
        <div className={`p-2 rounded-lg ${bg} flex items-center justify-center`}>
          {icon}
        </div>
        {change && (
          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${pill}`}>
            {change}
          </span>
        )}
      </div>

      <h4 className="text-sm text-gray-600 mb-1">{title}</h4>
      <div className="text-2xl font-bold text-gray-800">{value}</div>
    </div>
  );
};

export default StatCard;
