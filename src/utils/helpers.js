export const tierStyles = {
  Bronze: 'bg-amber-800/20 text-amber-300 border-amber-500/50',
  Silver: 'bg-slate-300/10 text-slate-200 border-slate-300/40',
  Gold: 'bg-yellow-400/15 text-yellow-200 border-yellow-300/60 shadow-trophy',
  Platinum: 'bg-fuchsia-400/15 text-fuchsia-200 border-fuchsia-300/60 shadow-glow',
};

export const formatDateHeading = (dateString) =>
  new Date(dateString).toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

export const groupByDate = (entries) =>
  entries.reduce((acc, item) => {
    const key = item.date?.slice(0, 10) || item.timestamp?.slice(0, 10);
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});
