import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-bold transition-all duration-200 cursor-pointer",
        variant === "primary"
          ? "btn-primary"
          : "btn-secondary",
        className
      )}
    >
      {children}
    </button>
  );
}