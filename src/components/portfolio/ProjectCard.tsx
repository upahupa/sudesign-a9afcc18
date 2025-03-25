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
const ProjectCard: React.FC<ProjectCardProps> = ({
  project
}) => {
  const showCarousel = hasProjectImages(project.name);
  const projectImages = getProjectImages(project.name);
  const includeYoutubeVideo = shouldIncludeYoutubeVideo(project.name);

  // Check if this is the National Bowel Cancer Screening Program
  const isNBCSP = project.name === "National Bowel Cancer Screening Program";
  return <div className="w-full mb-3">
      <div className="flex mb-3 max-md:flex-wrap">
        <ProjectDetail label="PROJECT" value={project.name} />
        <ProjectDetail label="SERVICE" value={project.service} />
        <ProjectDetail label="TYPE" value={project.type} />
        <ProjectDetail label="YEAR" value={project.year} />
      </div>
      <div className="flex gap-px max-md:flex-col max-sm:mt-3">
        {showCarousel ? <div className="w-[1248px] max-md:w-full">
            <ProjectCarousel projectName={project.name} images={projectImages} includeYoutubeVideo={includeYoutubeVideo} />
          </div> : <div className="w-[1248px] h-[720px] bg-[#E3E3E3] max-md:w-full" />}
        
        {isNBCSP ? <div className="w-[624px] aspect-[16/9] max-md:w-full p-4 overflow-y-auto bg-white py-[17px]">
            <div className="text-[9px] text-[#1C1C1C] leading-[17px] mb-1.5">
              BRIEF
            </div>
            <div className="text-[13px] text-[#1C1C1C] leading-[17px] mb-4">
              The Aikenhead Centre for Medical Discovery (ACMD) partnered with Swinburne to improve the National Bowel Cancer Screening Program (NBSP) by enhancing user-centered design and increasing participation rates.
            </div>
            
            <div className="text-[9px] text-[#1C1C1C] leading-[17px] mb-1.5">
              RATIONALE
            </div>
            <div className="text-[13px] text-[#1C1C1C] leading-[17px]">
              Through ethnographic research with screening participants, we identified key barriers to user participation. Our design solutions included simplifying instructions, integrating journey mapping, and recommending digital reminders and optional drop-off locations. We developed a digital instructions prototype accessible via QR code and redesigned forms to reduce redundancy, enhance accessibility, and improve perceived anonymity.
            </div>
          </div> : <div className="w-[624px] aspect-[16/9] bg-[#E3E3E3] max-md:w-full" />}
      </div>
    </div>;
};
export default ProjectCard;