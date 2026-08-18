import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function GlassCard({
  children,
  className,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-[32px] border border-pink-200/70 bg-white/80 p-8 shadow-[0_20px_50px_rgba(236,72,153,0.08)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_20px_60px_rgba(6,182,212,0.15)]",
        className
      )}
    >
      {children}
    </div>
  );
}