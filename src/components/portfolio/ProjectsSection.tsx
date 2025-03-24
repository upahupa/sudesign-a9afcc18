import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      name: "National Bowel Cancer Screening Program",
      service: "UX & Rebrand",
      type: "University Partnership",
      year: "2024",
    },
    {
      name: "Halo",
      service: "Packaging Design",
      type: "Portfolio",
      year: "2024",
    },
    {
      name: "Craft Victoria",
      service: "Publication Design",
      type: "Portfolio",
      year: "2023",
    },
    {
      name: "Brunswick Makerspace",
      service: "Rebrand",
      type: "Portfolio",
      year: "2024",
    },
    {
      name: "Anika Legal",
      service: "Service Design & UX",
      type: "Advocacy",
      year: "2020",
    },
    {
      name: "Monash Gallery of Art",
      service: "Strategic Design",
      type: "Design Research",
      year: "2021",
    },
    {
      name: "AGL",
      service: "Service Design & UX",
      type: "Portfolio",
      year: "2024",
    },
    {
      name: "Formnt studio",
      service: "Web Design & Development",
      type: "Studio",
      year: "2024",
    },
  ];

  return (
    <section className="flex flex-col gap-32 px-6 py-0">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </section>
  );
};

export default ProjectsSection;
