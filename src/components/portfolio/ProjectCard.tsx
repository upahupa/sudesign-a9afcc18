
import React from "react";
import ProjectDetail from "./ProjectDetail";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
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
  // Define project images
  const projectImages = [
    "/lovable-uploads/b264075a-dc00-49af-84b9-535cfe457925.png",
    "/lovable-uploads/5034b600-c4f4-49d5-83b9-a1973faad927.png",
    "/lovable-uploads/37baa30c-f0d2-4fd2-b00f-3b5570a3cd9e.png",
    "/lovable-uploads/4001b3c4-eba2-40bd-baa0-23dbb6f393d1.png"
  ];

  const isNationalBowelProject = project.name === "National Bowel Cancer Screening Program";

  return (
    <div className="w-full mb-3">
      <div className="flex mb-3 max-md:flex-wrap">
        <ProjectDetail label="PROJECT" value={project.name} />
        <ProjectDetail label="SERVICE" value={project.service} />
        <ProjectDetail label="TYPE" value={project.type} />
        <ProjectDetail label="YEAR" value={project.year} />
      </div>
      <div className="flex gap-px max-md:flex-col max-sm:mt-3">
        {isNationalBowelProject ? (
          <div className="w-[1248px] max-md:w-full">
            <Carousel className="w-full">
              <CarouselContent>
                {projectImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <AspectRatio ratio={16 / 9}>
                      <img 
                        src={image} 
                        alt={`${project.name} image ${index + 1}`} 
                        className="object-cover w-full h-full rounded-none"
                      />
                    </AspectRatio>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
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
