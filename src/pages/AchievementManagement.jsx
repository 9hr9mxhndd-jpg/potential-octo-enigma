import { useState } from 'react';
import AchievementListItem from '../components/AchievementListItem';

const initial = { title: '', category: 'fitness', subcategory: 'running', condition: '', type: 'one-time', tier: 'Bronze', rarity: 50, hidden: false, points: 50 };

export default function AchievementManagement({ categories, achievements, onCreate, onUpdate, onDelete }) {
  const [form, setForm] = useState(initial);
  const [editingId, setEditingId] = useState(null);

  const submit = () => {
    if (!form.title || !form.condition) return;
    if (editingId) onUpdate(editingId, form);
    else onCreate(form);
    setForm(initial);
    setEditingId(null);
  };

  return (
    <div className="grid grid-cols-[1fr_1.2fr] gap-4">
      <div className="rounded-xl border border-steam-border bg-steam-panelSoft p-4 space-y-3">
        <h2 className="text-xl font-semibold">Achievement Editor</h2>
        <input className="w-full rounded bg-[#0f1a2b] border border-steam-border px-3 py-2 text-sm" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <div className="grid grid-cols-2 gap-2">
          <select className="rounded bg-[#0f1a2b] border border-steam-border px-2 py-2 text-sm" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value, subcategory: categories.find(c => c.id === e.target.value)?.subcategories[0]?.id })}>
            {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
          <select className="rounded bg-[#0f1a2b] border border-steam-border px-2 py-2 text-sm" value={form.subcategory} onChange={(e) => setForm({ ...form, subcategory: e.target.value })}>
            {categories.find((c) => c.id === form.category)?.subcategories.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
          </select>
        </div>
        <input className="w-full rounded bg-[#0f1a2b] border border-steam-border px-3 py-2 text-sm" placeholder="Condition" value={form.condition} onChange={(e) => setForm({ ...form, condition: e.target.value })} />
        <div className="grid grid-cols-3 gap-2">
          <select className="rounded bg-[#0f1a2b] border border-steam-border px-2 py-2 text-sm" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
            <option>one-time</option><option>repeatable</option><option>meta-achievement</option>
          </select>
          <select className="rounded bg-[#0f1a2b] border border-steam-border px-2 py-2 text-sm" value={form.tier} onChange={(e) => setForm({ ...form, tier: e.target.value })}>
            <option>Bronze</option><option>Silver</option><option>Gold</option><option>Platinum</option>
          </select>
          <input type="number" className="rounded bg-[#0f1a2b] border border-steam-border px-2 py-2 text-sm" value={form.rarity} onChange={(e) => setForm({ ...form, rarity: Number(e.target.value) })} />
        </div>
        <label className="text-sm flex items-center gap-2"><input type="checkbox" checked={form.hidden} onChange={(e) => setForm({ ...form, hidden: e.target.checked })} /> Hidden</label>
        <button className="rounded border border-sky-400/40 bg-sky-500/20 text-sky-200 px-4 py-2" onClick={submit}>{editingId ? 'Update Achievement' : 'Create Achievement'}</button>
      </div>

      <div className="rounded-xl border border-steam-border bg-steam-panelSoft p-4">
        <h3 className="font-medium mb-3">Achievement Registry</h3>
        <div className="space-y-2 max-h-[76vh] overflow-auto">
          {achievements.map((a) => (
            <AchievementListItem
              key={a.id}
              achievement={a}
              onEdit={(item) => {
                setEditingId(item.id);
                setForm({ title: item.title, category: item.category, subcategory: item.subcategory, condition: item.condition, type: item.type, tier: item.tier, rarity: item.rarity, hidden: item.hidden, points: item.points });
              }}
              onDelete={onDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
