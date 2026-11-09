import React from "react";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "muted" | "accent";
  className?: string;
};

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const variantStyles = {
    default: "bg-[#F4EFE6] text-[#334155] border-[#E6E0D4]",
    muted: "bg-[#FFFFFF] text-[#64748B] border-[#E8E2D8]",
    accent: "bg-[#EBF2F7] text-[#2A527A] border-[#D1E0EC]",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
