type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({
  children,
}: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700">
      {children}
    </span>
  );
}
