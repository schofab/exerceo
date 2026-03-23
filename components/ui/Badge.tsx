import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  color?: "blue" | "green" | "yellow" | "red" | "purple" | "gray" | "orange" | "mint";
}

const colors = {
  blue:   "bg-blue-100   text-blue-700",
  green:  "bg-green-100  text-green-700",
  yellow: "bg-yellow-100 text-yellow-700",
  red:    "bg-red-100    text-red-700",
  purple: "bg-purple-100 text-purple-700",
  gray:   "bg-gray-100   text-gray-600",
  orange: "bg-orange-100 text-orange-700",
  mint:   "bg-emerald-100 text-emerald-700",
};

export default function Badge({ children, color = "blue" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${colors[color]}`}
    >
      {children}
    </span>
  );
}
