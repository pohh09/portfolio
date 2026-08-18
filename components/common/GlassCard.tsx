import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function GlassCard({
  children,
  className,
}: Props) {
  return (
    <div
      className={cn(
        `
        rounded-[32px]
        border
        border-slate-800/80
        bg-[#0e1017]/80
        backdrop-blur-xl
        shadow-[0_20px_50px_rgba(0,0,0,0.8)]
        transition-all
        duration-300
        hover:border-slate-600
        `,
        className
      )}
    >
      {children}
    </div>
  );
}