type Props = {
  badge: string;
  title: string;
  subtitle: string;
};

export default function SectionTitle({
  badge,
  title,
  subtitle,
}: Props) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFE8EE] border border-[#FFD0DC] px-4 py-1 text-xs font-kalam font-bold text-[#FF5E86]">
        {badge}
      </span>

      <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-[#2E2234]">
        {title}
      </h2>

      <p className="mt-3 text-base sm:text-lg text-[#6D5D70] font-normal">
        {subtitle}
      </p>
    </div>
  );
}