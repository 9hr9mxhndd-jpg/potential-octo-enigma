import { useState } from 'react';

export default function RecordEditor({ categories, selectedCategory, selectedSubcategory, onSave }) {
  const [form, setForm] = useState({ value: '', memo: '', status: 'self-report', proof: '' });
  const activeCategory = categories.find((c) => c.id === selectedCategory) || categories[0];

  return (
    <div className="rounded-xl border border-steam-border bg-steam-panelSoft p-4">
      <p className="text-sm font-medium mb-3">Log New Record</p>
      <div className="grid grid-cols-2 gap-3">
        <input className="rounded bg-[#0f1a2b] border border-steam-border px-3 py-2 text-sm" placeholder="Value (e.g. 6 km)" value={form.value} onChange={(e) => setForm({ ...form, value: e.target.value })} />
        <select className="rounded bg-[#0f1a2b] border border-steam-border px-3 py-2 text-sm" value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
          <option value="self-report">Self report</option>
          <option value="verified">Verified</option>
        </select>
        <input className="col-span-2 rounded bg-[#0f1a2b] border border-steam-border px-3 py-2 text-sm" placeholder="Memo" value={form.memo} onChange={(e) => setForm({ ...form, memo: e.target.value })} />
        <input className="col-span-2 rounded bg-[#0f1a2b] border border-steam-border px-3 py-2 text-sm" placeholder="Proof / note" value={form.proof} onChange={(e) => setForm({ ...form, proof: e.target.value })} />
      </div>
      <button
        className="mt-3 rounded bg-sky-500/20 border border-sky-400/40 text-sky-200 px-4 py-2 text-sm hover:bg-sky-400/30"
        onClick={() => {
          if (!form.value) return;
          onSave({ ...form, category: activeCategory.id, subcategory: selectedSubcategory || activeCategory.subcategories[0]?.id });
          setForm({ value: '', memo: '', status: 'self-report', proof: '' });
        }}
      >
        Save Record
      </button>
    </div>
  );
}
