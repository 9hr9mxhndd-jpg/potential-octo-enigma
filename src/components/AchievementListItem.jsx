import TrophyTierBadge from './TrophyTierBadge';
import ProgressBar from './ProgressBar';

export default function AchievementListItem({ achievement, onEdit, onDelete }) {
  const status = achievement.earned ? 'completed' : achievement.progress > 0 ? 'in progress' : 'locked';
  return (
    <div className={`rounded-lg border p-3 ${achievement.earned ? 'border-emerald-400/50 bg-emerald-400/5' : achievement.rarity <= 15 ? 'border-fuchsia-400/40 bg-fuchsia-400/5' : 'border-steam-border bg-steam-panelSoft'}`}>
      <div className="flex justify-between items-start gap-3">
        <div>
          <p className="font-medium">{achievement.hidden && !achievement.earned ? 'Hidden Achievement' : achievement.title}</p>
          <p className="text-xs text-steam-muted">{achievement.condition}</p>
        </div>
        <TrophyTierBadge tier={achievement.tier} />
      </div>
      <div className="mt-2"><ProgressBar value={achievement.progress} /></div>
      <div className="mt-2 text-xs text-steam-muted flex justify-between">
        <span>{status}</span><span>{achievement.rarity}% completion</span>
      </div>
      {onEdit && (
        <div className="mt-3 flex gap-2">
          <button className="text-xs px-2 py-1 rounded border border-steam-border hover:bg-white/5" onClick={() => onEdit(achievement)}>Edit</button>
          <button className="text-xs px-2 py-1 rounded border border-red-400/30 text-red-300 hover:bg-red-400/10" onClick={() => onDelete(achievement.id)}>Delete</button>
        </div>
      )}
    </div>
  );
}
