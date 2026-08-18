type Props = {
  children: React.ReactNode;
};

export default function GradientText({
  children,
}: Props) {
  return (
    <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-500 bg-clip-text text-transparent">
      {children}
    </span>
  );
}