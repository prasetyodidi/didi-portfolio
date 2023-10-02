import Image1 from "@public/image1.png";
import Image from "next/image";

function ProjectCard(project) {
  return (
    <div className="group relative">
      <h1 className="hidden group-hover:inline absolute bottom-4 left-6 text-xl">project {project.label}</h1>
      <Image src={project.imageUrl} alt={project.label} />
    </div>
  );
}

function ProjectsSection() {
  const projects = [
    {
      label: "Project A",
      imageUrl: Image1,
    },
    {
      label: "Project B",
      imageUrl: Image1,
    },
    {
      label: "Project B",
      imageUrl: Image1,
    },
    {
      label: "Project B",
      imageUrl: Image1,
    },
    {
      label: "Project B",
      imageUrl: Image1,
    },
  ];
  return (
    <div className="text-black px-12">
      <h1 className="text-3xl font-bold py-4">Latest Projects</h1>
      <div className="grid grid-cols-3 gap-6">
        {projects.map((project) => ProjectCard(project))}
      </div>
    </div>
  );
}

export default ProjectsSection;
