import TrophyTierBadge from './TrophyTierBadge';

export default function UnlockToast({ unlock }) {
  if (!unlock) return null;
  return (
    <div className="fixed bottom-8 right-8 w-80 rounded-xl border border-sky-300/30 bg-[#121f34] p-4 shadow-glow animate-pulse">
      <p className="text-xs uppercase tracking-widest text-sky-300">Achievement Unlocked</p>
      <div className="mt-2 flex gap-3">
        <div className="text-2xl">🏅</div>
        <div>
          <p className="font-semibold">{unlock.title}</p>
          <p className="text-xs text-steam-muted mb-1">{unlock.message}</p>
          <TrophyTierBadge tier={unlock.tier} />
        </div>
      </div>
    </div>
  );
}
