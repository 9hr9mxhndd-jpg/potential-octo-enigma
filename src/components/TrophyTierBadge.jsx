import { tierStyles } from '../utils/helpers';

export default function TrophyTierBadge({ tier }) {
  return <span className={`px-2 py-1 rounded border text-xs font-semibold ${tierStyles[tier] || 'border-steam-border'}`}>{tier}</span>;
}
