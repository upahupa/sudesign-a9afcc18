
import React from "react";
import ProjectDetail from "./ProjectDetail";
import ProjectCarousel from "./ProjectCarousel";
import { hasProjectImages, getProjectImages, shouldIncludeYoutubeVideo } from "./projectImageData";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProjectCardProps {
  project: {
    name: string;
    service: string;
    type: string;
    year: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const showCarousel = hasProjectImages(project.name);
  const projectImages = getProjectImages(project.name);
  const includeYoutubeVideo = shouldIncludeYoutubeVideo(project.name);

  return (
    <div className="w-full mb-3">
      <div className="flex mb-3 max-md:flex-wrap">
        <ProjectDetail label="PROJECT" value={project.name} />
        <ProjectDetail label="SERVICE" value={project.service} />
        <ProjectDetail label="TYPE" value={project.type} />
        <ProjectDetail label="YEAR" value={project.year} />
      </div>
      <div className="flex gap-px max-md:flex-col max-sm:mt-3">
        {showCarousel ? (
          <div className="w-[1248px] max-md:w-full">
            <ProjectCarousel 
              projectName={project.name} 
              images={projectImages} 
              includeYoutubeVideo={includeYoutubeVideo}
            />
          </div>
        ) : (
          <div className="w-[1248px] h-[720px] bg-[#E3E3E3] max-md:w-full" />
        )}
        <div className="w-[624px] h-[720px] bg-[#E3E3E3] max-md:w-full" />
      </div>
    </div>
  );
};

export default ProjectCard;
