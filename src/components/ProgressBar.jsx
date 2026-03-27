export default function ProgressBar({ value }) {
  return (
    <div className="h-2 bg-[#0b1322] rounded-full overflow-hidden border border-steam-border/60">
      <div className="h-full bg-gradient-to-r from-cyan-500 to-sky-300 transition-all duration-700" style={{ width: `${Math.min(value, 100)}%` }} />
    </div>
  );
}
