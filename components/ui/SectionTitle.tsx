interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-20">
      <p className="uppercase tracking-[0.35em] text-blue-400 text-sm">
        {subtitle}
      </p>

      <h2 className="mt-4 text-5xl font-bold tracking-tight">
        {title}
      </h2>
    </div>
  );
}