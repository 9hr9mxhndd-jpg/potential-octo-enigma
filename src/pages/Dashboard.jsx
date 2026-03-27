import RecordEditor from '../components/RecordEditor';
import SummaryStatCard from '../components/SummaryStatCard';
import AchievementListItem from '../components/AchievementListItem';

export default function Dashboard({ categories, achievements, records, selectedCategory, selectedSubcategory, onAddRecord }) {
  const category = categories.find((c) => c.id === selectedCategory) || categories[0];
  const sub = category.subcategories.find((s) => s.id === selectedSubcategory) || category.subcategories[0];
  const scopedRecords = records.filter((r) => r.category === category.id && r.subcategory === sub?.id);
  const scopedAchievements = achievements.filter((a) => a.category === category.id && a.subcategory === sub?.id);
  const earned = scopedAchievements.filter((a) => a.earned).length;

  return (
    <div className="space-y-4">
      <header>
        <p className="text-sm text-steam-muted">Library / {category.name}</p>
        <h2 className="text-2xl font-semibold">{sub?.name} Workspace</h2>
      </header>

      <section className="grid grid-cols-4 gap-3">
        <SummaryStatCard label="Records" value={scopedRecords.length} />
        <SummaryStatCard label="Earned" value={`${earned}/${scopedAchievements.length}`} accent="text-emerald-300" />
        <SummaryStatCard label="Completion" value={`${Math.round((earned / Math.max(1, scopedAchievements.length)) * 100)}%`} accent="text-sky-300" />
        <SummaryStatCard label="Next Goal" value={scopedAchievements.find((a) => !a.earned)?.title || 'All done'} />
      </section>

      <section className="grid grid-cols-2 gap-4">
        <RecordEditor categories={categories} selectedCategory={category.id} selectedSubcategory={sub?.id} onSave={onAddRecord} />
        <div className="rounded-xl border border-steam-border bg-steam-panelSoft p-4">
          <p className="font-medium">Recent Records</p>
          <div className="mt-3 space-y-2 max-h-64 overflow-auto">
            {scopedRecords.map((r) => (
              <div key={r.id} className="rounded border border-steam-border/70 p-2 text-sm bg-[#0f1a2b]">
                <p>{r.value} • {r.memo}</p>
                <p className="text-xs text-steam-muted">{r.date} • {r.status}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-4">
        <div className="rounded-xl border border-steam-border bg-steam-panelSoft p-4">
          <p className="font-medium mb-3">Earned & Tracked Achievements</p>
          <div className="space-y-2 max-h-96 overflow-auto">
            {scopedAchievements.map((a) => <AchievementListItem key={a.id} achievement={a} />)}
          </div>
        </div>
        <div className="rounded-xl border border-steam-border bg-steam-panelSoft p-4">
          <p className="font-medium mb-3">Next Suggested Goals</p>
          <div className="space-y-2">
            {scopedAchievements.filter((a) => !a.earned).slice(0, 4).map((a) => (
              <div key={a.id} className="rounded border border-steam-border p-3 bg-[#0f1a2b]">
                <p className="font-medium">{a.title}</p>
                <p className="text-xs text-steam-muted">{a.condition}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
