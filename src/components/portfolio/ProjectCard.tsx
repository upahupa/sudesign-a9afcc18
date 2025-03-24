
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
  // Define project-specific images
  const bowelProjectImages = [
    "/lovable-uploads/b264075a-dc00-49af-84b9-535cfe457925.png",
    "/lovable-uploads/5034b600-c4f4-49d5-83b9-a1973faad927.png",
    "/lovable-uploads/37baa30c-f0d2-4fd2-b00f-3b5570a3cd9e.png",
    "/lovable-uploads/4001b3c4-eba2-40bd-baa0-23dbb6f393d1.png"
  ];

  const haloProjectImages = [
    "/lovable-uploads/539c41bb-4018-4ad4-86c3-0fe45274ccc5.png",
    "/lovable-uploads/6aa931ee-79c7-45b5-888a-eb82ee7b2f73.png",
    "/lovable-uploads/cf29f845-1f99-4e8c-b3a0-10fe16cd98b6.png",
    "/lovable-uploads/1bb4bdc0-e979-4b96-94eb-3ca6b03b3219.png",
    "/lovable-uploads/2768bd6f-6d32-468c-8064-ffcbff268b9d.png",
    "/lovable-uploads/1a9c583f-0f64-4e1e-b557-5ecdac8da1f2.png"
  ];

  const isNationalBowelProject = project.name === "National Bowel Cancer Screening Program";
  const isHaloProject = project.name === "Halo";
  const shouldShowCarousel = isNationalBowelProject || isHaloProject;
  
  // Select the appropriate images based on the project
  const carouselImages = isNationalBowelProject ? bowelProjectImages : isHaloProject ? haloProjectImages : [];

  return (
    <div className="w-full mb-3">
      <div className="flex mb-3 max-md:flex-wrap">
        <ProjectDetail label="PROJECT" value={project.name} />
        <ProjectDetail label="SERVICE" value={project.service} />
        <ProjectDetail label="TYPE" value={project.type} />
        <ProjectDetail label="YEAR" value={project.year} />
      </div>
      <div className="flex gap-px max-md:flex-col max-sm:mt-3">
        {shouldShowCarousel ? (
          <div className="w-[1248px] max-md:w-full">
            <Carousel className="w-full">
              <CarouselContent>
                {carouselImages.map((image, index) => (
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
