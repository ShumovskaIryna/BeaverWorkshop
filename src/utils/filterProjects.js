// filterProjects.js
export function filterByCategory(projects, category) {
  if (category === "Усі") return projects;
  return projects.filter(p => p.category === category);
}