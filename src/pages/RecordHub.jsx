import { useMemo } from 'react';
import { formatDateHeading, groupByDate } from '../utils/helpers';
import TrophyTierBadge from '../components/TrophyTierBadge';

export default function RecordHub({ records, unlockEntries, categories, filter, setFilter }) {
  const merged = useMemo(() => {
    const logs = records.map((r) => ({ ...r, type: 'record' }));
    const unlocks = unlockEntries.map((u) => ({ ...u, date: u.date.slice(0, 10), type: 'unlock' }));
    return [...logs, ...unlocks]
      .filter((item) => (!filter.category || item.category === filter.category || item.type === 'unlock'))
      .filter((item) => filter.mode === 'all' || item.type === filter.mode)
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [records, unlockEntries, filter]);

  const grouped = groupByDate(merged);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Record Hub Diary</h2>
      <div className="rounded-xl border border-steam-border bg-steam-panelSoft p-3 flex gap-3 items-center">
        <select className="bg-[#0f1a2b] border border-steam-border rounded px-2 py-1 text-sm" value={filter.category} onChange={(e) => setFilter({ ...filter, category: e.target.value })}>
          <option value="">All categories</option>
          {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
        <select className="bg-[#0f1a2b] border border-steam-border rounded px-2 py-1 text-sm" value={filter.mode} onChange={(e) => setFilter({ ...filter, mode: e.target.value })}>
          <option value="all">All entries</option>
          <option value="record">Records only</option>
          <option value="unlock">Achievements only</option>
        </select>
      </div>
      <div className="space-y-6">
        {Object.entries(grouped).map(([date, items]) => (
          <section key={date}>
            <p className="mb-2 text-sm text-steam-muted">{formatDateHeading(date)}</p>
            <div className="space-y-2">
              {items.map((item) => (
                <div key={item.id + item.type} className="rounded-lg border border-steam-border bg-steam-panelSoft p-3">
                  {item.type === 'record' ? (
                    <>
                      <p className="font-medium">{item.memo} <span className="text-steam-muted text-sm">({item.value})</span></p>
                      <p className="text-xs text-steam-muted">{item.category} / {item.subcategory} • {item.status} • {item.proof}</p>
                    </>
                  ) : (
                    <div className="flex justify-between">
                      <div>
                        <p className="font-medium text-emerald-300">Achievement unlocked: {item.title}</p>
                        <p className="text-xs text-steam-muted">{item.category} / {item.subcategory} • {item.message}</p>
                      </div>
                      <TrophyTierBadge tier={item.tier} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
