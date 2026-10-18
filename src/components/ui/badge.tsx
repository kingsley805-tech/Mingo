import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const base = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors";
  const variants = {
    default: "bg-[var(--color-flamingo-soft)] text-[var(--color-flamingo-deep)]",
    secondary: "bg-gray-100 text-gray-900",
    outline: "text-gray-950 border border-gray-200",
  };
  return <div className={cn(base, variants[variant], className)} {...props} />;
}
