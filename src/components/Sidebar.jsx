import { NavLink } from 'react-router-dom';

export default function Sidebar({ profile, categories, selectedCategory, setSelectedCategory, selectedSubcategory, setSelectedSubcategory, search, setSearch }) {
  return (
    <aside className="w-80 border-r border-steam-border bg-steam-panel/80 p-4 flex flex-col gap-4">
      <div className="rounded-xl border border-steam-border bg-steam-panelSoft p-4">
        <p className="text-xs uppercase tracking-wider text-steam-muted">Achievement Library</p>
        <h1 className="text-xl font-semibold mt-1">{profile.name}</h1>
        <p className="text-sm text-steam-muted">Lvl {profile.level} • {profile.title}</p>
        <p className="text-sm mt-2 text-sky-300">{profile.points.toLocaleString()} AP • {profile.streak} day streak</p>
      </div>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search categories, achievements..."
        className="w-full rounded-lg bg-[#0f1a2b] border border-steam-border px-3 py-2 text-sm outline-none focus:border-sky-400"
      />

      <nav className="space-y-1 text-sm">
        {[['/', 'Dashboard'], ['/record-hub', 'Record Hub'], ['/management', 'Achievement Management'], ['/showcase', 'Achievement Showcase']].map(([path, label]) => (
          <NavLink key={path} to={path} className={({ isActive }) => `block rounded-md px-3 py-2 ${isActive ? 'bg-sky-500/20 text-sky-200' : 'text-steam-muted hover:text-steam-text hover:bg-white/5'}`}>
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-2 flex-1 overflow-auto">
        <p className="text-xs uppercase tracking-wider text-steam-muted mb-2">Category Library</p>
        <div className="space-y-2">
          {categories.map((cat) => (
            <div key={cat.id} className="rounded-lg border border-steam-border/80 bg-[#101b2c]">
              <button onClick={() => setSelectedCategory(cat.id)} className={`w-full px-3 py-2 flex items-center justify-between ${selectedCategory === cat.id ? 'text-sky-200' : 'text-steam-text'}`}>
                <span>{cat.icon} {cat.name}</span>
                <span className="text-xs text-steam-muted">{cat.subcategories.length}</span>
              </button>
              {selectedCategory === cat.id && (
                <div className="border-t border-steam-border/70 p-2 space-y-1">
                  {cat.subcategories.map((sub) => (
                    <button key={sub.id} onClick={() => setSelectedSubcategory(sub.id)} className={`w-full text-left rounded px-2 py-1 text-sm ${selectedSubcategory === sub.id ? 'bg-sky-500/15 text-sky-200' : 'text-steam-muted hover:bg-white/5 hover:text-steam-text'}`}>
                      {sub.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
