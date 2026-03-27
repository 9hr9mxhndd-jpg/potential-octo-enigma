import SummaryStatCard from '../components/SummaryStatCard';
import ProgressBar from '../components/ProgressBar';
import AchievementListItem from '../components/AchievementListItem';

export default function AchievementShowcase({ achievements, categories, recentUnlocks }) {
  const total = achievements.length;
  const earned = achievements.filter((a) => a.earned).length;
  const byTier = ['Bronze', 'Silver', 'Gold', 'Platinum'].reduce((acc, tier) => {
    acc[tier] = achievements.filter((a) => a.tier === tier && a.earned).length;
    return acc;
  }, {});

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Achievement Showcase</h2>
      <section className="grid grid-cols-4 gap-3">
        <SummaryStatCard label="Total" value={total} />
        <SummaryStatCard label="Earned" value={earned} accent="text-emerald-300" />
        <SummaryStatCard label="Locked" value={total - earned} />
        <SummaryStatCard label="Completion" value={`${Math.round((earned / Math.max(1, total)) * 100)}%`} accent="text-sky-300" />
      </section>

      <section className="rounded-xl border border-steam-border bg-steam-panelSoft p-4 grid grid-cols-4 gap-3">
        {Object.entries(byTier).map(([tier, count]) => (
          <div key={tier} className="rounded-lg border border-steam-border p-3 bg-[#0f1a2b]">
            <p className="text-sm text-steam-muted">{tier} Trophies</p><p className="text-2xl">{count}</p>
          </div>
        ))}
      </section>

      <section className="rounded-xl border border-steam-border bg-steam-panelSoft p-4">
        <p className="font-medium mb-3">Category Progress</p>
        <div className="space-y-3">
          {categories.map((c) => {
            const scoped = achievements.filter((a) => a.category === c.id);
            const progress = Math.round((scoped.filter((a) => a.earned).length / Math.max(1, scoped.length)) * 100);
            return (
              <div key={c.id}>
                <div className="flex justify-between text-sm mb-1"><span>{c.name}</span><span>{progress}%</span></div>
                <ProgressBar value={progress} />
              </div>
            );
          })}
        </div>
      </section>

      <section className="grid grid-cols-[1.2fr_1fr] gap-4">
        <div className="rounded-xl border border-steam-border bg-steam-panelSoft p-4">
          <p className="font-medium mb-3">Achievement Ledger</p>
          <div className="space-y-2 max-h-[55vh] overflow-auto">
            {achievements.map((a) => <AchievementListItem key={a.id} achievement={a} />)}
          </div>
        </div>
        <div className="rounded-xl border border-steam-border bg-steam-panelSoft p-4">
          <p className="font-medium mb-3">Recent Unlocks</p>
          <div className="space-y-2">
            {recentUnlocks.map((u) => (
              <div key={u.id} className="rounded border border-emerald-400/30 bg-emerald-400/10 p-3">
                <p className="font-medium text-emerald-200">{u.title}</p>
                <p className="text-xs text-steam-muted">{u.date.slice(0, 10)} • {u.tier} • {u.rarity}% completion</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
