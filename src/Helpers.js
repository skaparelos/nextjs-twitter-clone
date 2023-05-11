export const calcTimeAgo = (createdAt) => {
  const daysAgo = Math.round((Date.now() - new Date(createdAt))/ (1000 * 3600 * 24))
  if (daysAgo == 0) return `${Math.round((Date.now() - new Date(createdAt))/ (1000 * 3600))} hour(s) ago`;
  else return `${daysAgo} days ago`;
}