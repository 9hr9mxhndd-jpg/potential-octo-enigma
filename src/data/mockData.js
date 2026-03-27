export const profile = {
  name: 'Alex Mercer',
  level: 27,
  title: 'Habit Architect',
  points: 12480,
  streak: 19,
};

export const categories = [
  {
    id: 'fitness',
    name: 'Fitness',
    icon: '💪',
    subcategories: [
      { id: 'running', name: 'Running' },
      { id: 'strength', name: 'Strength' },
      { id: 'mobility', name: 'Mobility' },
    ],
  },
  {
    id: 'learning',
    name: 'Learning',
    icon: '📘',
    subcategories: [
      { id: 'languages', name: 'Languages' },
      { id: 'coding', name: 'Coding' },
      { id: 'reading', name: 'Reading' },
    ],
  },
  {
    id: 'career',
    name: 'Career',
    icon: '🏆',
    subcategories: [
      { id: 'deep-work', name: 'Deep Work' },
      { id: 'networking', name: 'Networking' },
    ],
  },
];

export const achievementsSeed = [
  { id: 'a1', title: '5K Breakthrough', category: 'fitness', subcategory: 'running', tier: 'Gold', rarity: 12, type: 'one-time', condition: 'Log a 5km run', hidden: false, points: 150, earned: true, progress: 100, description: 'Cross your first tracked 5km session.' },
  { id: 'a2', title: 'Consistency Engine', category: 'fitness', subcategory: 'running', tier: 'Silver', rarity: 24, type: 'repeatable', condition: 'Run 3 times in one week', hidden: false, points: 85, earned: false, progress: 66, description: 'Build weekly running rhythm.' },
  { id: 'a3', title: 'Atomic Commits', category: 'learning', subcategory: 'coding', tier: 'Bronze', rarity: 41, type: 'repeatable', condition: 'Code 30 focused minutes for 5 days', hidden: false, points: 60, earned: true, progress: 100, description: 'Ship meaningful coding practice sessions.' },
  { id: 'a4', title: 'Linguist I', category: 'learning', subcategory: 'languages', tier: 'Silver', rarity: 18, type: 'one-time', condition: 'Complete 20 language lessons', hidden: false, points: 90, earned: false, progress: 35, description: 'Foundational language momentum.' },
  { id: 'a5', title: 'Marathon Mindset', category: 'fitness', subcategory: 'running', tier: 'Platinum', rarity: 4, type: 'meta-achievement', condition: 'Unlock all Running achievements', hidden: true, points: 300, earned: false, progress: 40, description: 'Master every running milestone.' },
  { id: 'a6', title: 'Power Session', category: 'career', subcategory: 'deep-work', tier: 'Gold', rarity: 14, type: 'repeatable', condition: 'Log 2 hours uninterrupted deep work', hidden: false, points: 140, earned: true, progress: 100, description: 'Enter flow and stay there.' },
  { id: 'a7', title: 'Book Vanguard', category: 'learning', subcategory: 'reading', tier: 'Bronze', rarity: 33, type: 'one-time', condition: 'Finish 6 books this quarter', hidden: false, points: 70, earned: false, progress: 50, description: 'Sustain thoughtful reading habits.' },
  { id: 'a8', title: 'Connector+', category: 'career', subcategory: 'networking', tier: 'Silver', rarity: 27, type: 'one-time', condition: 'Schedule 4 professional catch-ups', hidden: false, points: 90, earned: false, progress: 75, description: 'Cultivate your relationship map.' },
];

export const recordsSeed = [
  { id: 'r1', date: '2026-03-27', category: 'fitness', subcategory: 'running', value: '5.2 km', memo: 'Evening tempo run', status: 'verified', proof: 'Watch sync' },
  { id: 'r2', date: '2026-03-26', category: 'career', subcategory: 'deep-work', value: '130 min', memo: 'Feature architecture planning', status: 'verified', proof: 'Calendar block' },
  { id: 'r3', date: '2026-03-25', category: 'learning', subcategory: 'coding', value: '45 min', memo: 'React state patterns', status: 'self-report', proof: 'Notes captured' },
  { id: 'r4', date: '2026-03-24', category: 'learning', subcategory: 'languages', value: '3 lessons', memo: 'Spanish verbs + listening', status: 'verified', proof: 'App screenshot' },
  { id: 'r5', date: '2026-03-24', category: 'fitness', subcategory: 'strength', value: '6 sets', memo: 'Upper body + pull focus', status: 'verified', proof: 'Gym log' },
];

export const recentUnlocksSeed = [
  { id: 'u1', date: '2026-03-27T08:10:00Z', achievementId: 'a1' },
  { id: 'u2', date: '2026-03-26T17:45:00Z', achievementId: 'a6' },
  { id: 'u3', date: '2026-03-25T19:03:00Z', achievementId: 'a3' },
];
