import { useMemo, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import RecordHub from './pages/RecordHub';
import AchievementManagement from './pages/AchievementManagement';
import AchievementShowcase from './pages/AchievementShowcase';
import UnlockToast from './components/UnlockToast';
import { profile, categories, achievementsSeed, recordsSeed, recentUnlocksSeed } from './data/mockData';

const uid = () => Math.random().toString(36).slice(2, 10);

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
  const [selectedSubcategory, setSelectedSubcategory] = useState(categories[0].subcategories[0].id);
  const [search, setSearch] = useState('');
  const [achievements, setAchievements] = useState(achievementsSeed);
  const [records, setRecords] = useState(recordsSeed);
  const [recentUnlocks, setRecentUnlocks] = useState(recentUnlocksSeed);
  const [toast, setToast] = useState(null);
  const [recordFilter, setRecordFilter] = useState({ category: '', mode: 'all' });

  const recentUnlockEntries = useMemo(
    () => recentUnlocks.map((u) => {
      const ach = achievements.find((a) => a.id === u.achievementId);
      return ach ? { ...u, ...ach, message: 'Another milestone secured.' } : null;
    }).filter(Boolean),
    [recentUnlocks, achievements]
  );

  const maybeUnlock = (record) => {
    const found = achievements.find((a) => !a.earned && a.category === record.category && a.subcategory === record.subcategory && a.progress >= 66);
    if (!found) return;
    setAchievements((prev) => prev.map((a) => a.id === found.id ? { ...a, earned: true, progress: 100 } : a));
    setRecentUnlocks((prev) => [{ id: uid(), date: new Date().toISOString(), achievementId: found.id }, ...prev]);
    setToast({ title: found.title, tier: found.tier, message: 'You just turned effort into a trophy.' });
    setTimeout(() => setToast(null), 3000);
  };

  const addRecord = (payload) => {
    const record = { id: uid(), date: new Date().toISOString().slice(0, 10), ...payload };
    setRecords((prev) => [record, ...prev]);
    setAchievements((prev) => prev.map((a) => (
      a.category === record.category && a.subcategory === record.subcategory && !a.earned
        ? { ...a, progress: Math.min(100, a.progress + 20) }
        : a
    )));
    maybeUnlock(record);
  };

  const createAchievement = (payload) => setAchievements((prev) => [{ id: uid(), ...payload, earned: false, progress: 0, description: payload.condition }, ...prev]);
  const updateAchievement = (id, payload) => setAchievements((prev) => prev.map((a) => (a.id === id ? { ...a, ...payload } : a)));
  const deleteAchievement = (id) => setAchievements((prev) => prev.filter((a) => a.id !== id));

  return (
    <div className="h-screen flex overflow-hidden bg-gradient-to-b from-[#0d1521] to-[#0a111d]">
      <Sidebar
        profile={profile}
        categories={categories.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()) || c.subcategories.some((s) => s.name.toLowerCase().includes(search.toLowerCase())))}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedSubcategory={selectedSubcategory}
        setSelectedSubcategory={setSelectedSubcategory}
        search={search}
        setSearch={setSearch}
      />

      <main className="flex-1 p-6 overflow-auto">
        <Routes>
          <Route path="/" element={<Dashboard categories={categories} achievements={achievements} records={records} selectedCategory={selectedCategory} selectedSubcategory={selectedSubcategory} onAddRecord={addRecord} />} />
          <Route path="/record-hub" element={<RecordHub records={records} unlockEntries={recentUnlockEntries} categories={categories} filter={recordFilter} setFilter={setRecordFilter} />} />
          <Route path="/management" element={<AchievementManagement categories={categories} achievements={achievements} onCreate={createAchievement} onUpdate={updateAchievement} onDelete={deleteAchievement} />} />
          <Route path="/showcase" element={<AchievementShowcase achievements={achievements} categories={categories} recentUnlocks={recentUnlockEntries.slice(0, 6)} />} />
        </Routes>
      </main>

      <UnlockToast unlock={toast} />
    </div>
  );
}
