function ProjectCard(project) {
  return <div>project {project.label}</div>;
}

function ProjectsSection() {
  const projects = [
    {
      label: "Project A",
    },
    {
      label: "Project B",
    },
  ];
  return (
    <div className="text-black px-12">
      <h1 className="text-3xl font-bold py-4">Latest Projects</h1>
      {projects.map((project) => ProjectCard(project))}
    </div>
  );
}

export default ProjectsSection;
