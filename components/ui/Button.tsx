import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...rest
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 text-xs sm:text-sm px-5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#2A527A] focus:ring-offset-2";

  const variants = {
    primary:
      "bg-[#181E25] text-[#FAF7F2] hover:bg-[#2A3440] shadow-[0_2px_8px_rgba(24,30,37,0.08)]",
    secondary:
      "bg-[#FFFFFF] text-[#181E25] border border-[#DCD5C8] hover:bg-[#F9F7F3] hover:border-[#2A527A]",
    outline:
      "bg-transparent text-[#525D6B] border border-[#E2DBD0] hover:text-[#181E25] hover:border-[#181E25]",
    ghost:
      "bg-transparent text-[#525D6B] hover:text-[#181E25] hover:bg-[#F4EFE6]",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}
