import React from "react";
import { Info, AlertTriangle, CheckCircle } from "lucide-react";

export default function Alert({ title, children, type = "info" }: { title?: string, children: React.ReactNode, type?: "info" | "warning" | "success" }) {
  const colors = {
    info: "bg-chart-1 text-main-foreground",
    warning: "bg-chart-3 text-main-foreground",
    success: "bg-chart-4 text-main-foreground"
  };
  
  const icons = {
    info: <Info className="size-6" />,
    warning: <AlertTriangle className="size-6" />,
    success: <CheckCircle className="size-6" />
  };

  return (
    <div className={`my-6 border-4 border-border p-4 shadow-shadow flex gap-4 ${colors[type]}`}>
      <div className="shrink-0 mt-1">{icons[type]}</div>
      <div>
        {title && <h4 className="font-black text-xl mb-1">{title}</h4>}
        <div className="font-bold">{children}</div>
      </div>
    </div>
  );
}
