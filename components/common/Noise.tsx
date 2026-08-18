export default function Noise() {
  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        z-[1]
        opacity-[0.03]
        mix-blend-soft-light
      "
      style={{
        backgroundImage:
          "url('https://grainy-gradients.vercel.app/noise.svg')",
      }}
    />
  );
}