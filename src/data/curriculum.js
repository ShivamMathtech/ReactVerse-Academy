import data from './curriculum.json';
export const { chapters, lessons, phases, categories } = data;
export const lessonById = Object.fromEntries(lessons.map(l => [l.id,l]));
export const lessonBySlug = Object.fromEntries(lessons.map(l => [l.slug,l]));
export const tags = [...new Set(Object.values(categories).flat())].sort();
export const lessonUrl = lesson => `/lessons/${lesson.slug}`;
export function filterLessons(items,{q='',difficulty='',technology='',tag='',chapter='',sort='curriculum'}={}) {
 const terms=q.trim().toLowerCase().split(/\s+/).filter(Boolean);
 const filtered=items.filter(l=>terms.every(term=>`${l.title} ${l.description} ${l.tags.join(' ')}`.toLowerCase().includes(term))&&(!difficulty||l.difficulty===difficulty)&&(!technology||l.technologyTags.includes(technology))&&(!tag||l.tags.includes(tag))&&(!chapter||l.chapterId===chapter));
 return [...filtered].sort((a,b)=>sort==='title'?a.title.localeCompare(b.title):sort==='duration'?a.estimatedDuration-b.estimatedDuration:a.id.localeCompare(b.id,undefined,{numeric:true}));
}
