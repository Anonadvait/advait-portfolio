import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
};

export default function Card({
  children,
  className = "",
  hoverable = true,
}: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-[#EAE4D8] bg-[#FFFFFF] p-8 shadow-[0_4px_20px_-2px_rgba(24,30,37,0.03)] ${
        hoverable
          ? "transition-all duration-300 hover:border-[#D5CDBD] hover:shadow-[0_12px_32px_-4px_rgba(24,30,37,0.06)]"
          : ""
      } ${className}`.trim()}
    >
      {children}
    </div>
  );
}
