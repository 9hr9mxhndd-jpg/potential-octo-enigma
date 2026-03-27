export default function SummaryStatCard({ label, value, accent }) {
  return (
    <div className="rounded-xl bg-steam-panelSoft border border-steam-border p-4">
      <p className="text-xs uppercase tracking-widest text-steam-muted">{label}</p>
      <p className={`text-2xl font-semibold mt-1 ${accent || ''}`}>{value}</p>
    </div>
  );
}
