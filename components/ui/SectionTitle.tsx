interface SectionTitleProps {
  title: string;
  subtitle: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  title,
  subtitle,
  description,
  align = "left",
}: SectionTitleProps) {
  return (
    <div className={`mb-16 md:mb-20 ${align === "center" ? "text-center mx-auto max-w-2xl" : ""}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#2A527A]">
        {subtitle}
      </p>

      <h2 className="mt-3 text-3xl font-medium tracking-tight text-[#181E25] sm:text-4xl md:text-5xl md:leading-[1.15]">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-relaxed text-[#525D6B]">
          {description}
        </p>
      )}
    </div>
  );
}
