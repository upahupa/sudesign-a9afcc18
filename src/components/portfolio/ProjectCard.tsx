import React from "react";
import ProjectDetail from "./ProjectDetail";

interface ProjectCardProps {
  project: {
    name: string;
    service: string;
    type: string;
    year: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="w-full mb-3">
      <div className="flex mb-3 max-md:flex-wrap">
        <ProjectDetail label="PROJECT" value={project.name} />
        <ProjectDetail label="SERVICE" value={project.service} />
        <ProjectDetail label="TYPE" value={project.type} />
        <ProjectDetail label="YEAR" value={project.year} />
      </div>
      <div className="flex gap-px max-md:flex-col max-sm:mt-3">
        <div className="w-[1248px] h-[720px] bg-[#E3E3E3] max-md:w-full" />
        <div className="w-[624px] h-[720px] bg-[#E3E3E3] max-md:w-full" />
      </div>
    </div>
  );
};

export default ProjectCard;
