export default function MeshBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* ── Soft Warm Pearl & Peach Foundation Base (Reference Match) ── */}
      <div className="absolute inset-0 bg-[#FFF8F5]" />

      {/* ── Atmospheric Meshes Matching Reference ── */}
      <div 
        className="absolute -top-28 right-0 h-[650px] w-[750px] rounded-full opacity-70 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(252, 232, 232, 0.9) 0%, rgba(255, 241, 236, 0.6) 50%, transparent 75%)",
          filter: "blur(60px)",
          transform: "translate3d(0, 0, 0)",
          willChange: "transform",
        }}
      />

      <div 
        className="absolute top-[35%] -left-32 h-[600px] w-[600px] rounded-full opacity-60 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(252, 232, 232, 0.8) 0%, rgba(243, 237, 252, 0.5) 50%, transparent 75%)",
          filter: "blur(60px)",
          transform: "translate3d(0, 0, 0)",
          willChange: "transform",
        }}
      />

      <div 
        className="absolute top-[70%] -right-24 h-[550px] w-[550px] rounded-full opacity-55 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(235, 248, 250, 0.6) 0%, rgba(252, 232, 232, 0.5) 50%, transparent 75%)",
          filter: "blur(60px)",
          transform: "translate3d(0, 0, 0)",
          willChange: "transform",
        }}
      />

      {/* ── Subtle Warm Illustrated Dot Pattern ── */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: "radial-gradient(rgba(232, 93, 139, 0.25) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
    </div>
  );
}