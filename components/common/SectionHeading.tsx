type Props = {
  badge: string;
  title: string;
  description: string;
  center?: boolean;
};

export default function SectionHeading({
  badge,
  title,
  description,
  center = true,
}: Props) {
  return (
    <div className={center ? "text-center" : ""}>
      <span className="inline-flex rounded-full border border-pink-200/80 bg-pink-50/90 px-4 py-2 text-sm font-semibold tracking-wide text-pink-600 shadow-sm backdrop-blur-md">
        {badge}
      </span>

      <h2 className="mt-6 text-5xl font-black tracking-tight text-slate-900">
        {title}
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
        {description}
      </p>
    </div>
  );
}