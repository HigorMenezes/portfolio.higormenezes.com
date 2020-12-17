import projects from "./projects";

const recentProjectsId = [1];

const recentProjects = projects.filter((project) =>
  recentProjectsId.includes(project.id),
);

export default recentProjects;
