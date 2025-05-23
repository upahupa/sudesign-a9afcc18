
import React from "react";
import ProjectDetail from "./ProjectDetail";
import ProjectCarousel from "./ProjectCarousel";
import PDFViewer from "./PDFViewer";
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
  // Check if this is the Halo project
  const isHalo = project.name === "Halo";
  // Check if this is the Craft Victoria project
  const isCraftVictoria = project.name === "Craft Victoria";
  // Check if this is the Port Fairy Folk Festival project
  const isPortFairy = project.name === "Port Fairy Folk Festival";
  // Check if this is the Brunswick Makerspace project
  const isBrunswickMakerspace = project.name === "Brunswick Makerspace";
  // Check if this is Anika Legal project
  const isAnikaLegal = project.name === "Anika Legal";
  // Check if this is Anika, AGL, or Monash Gallery project
  const isFullWidthProject = 
    project.name === "Anika Legal" || 
    project.name === "AGL" || 
    project.name === "Monash Gallery of Art";
  
  // Example PDF URL - replace with your actual uploaded PDF URL when available
  const pdfUrl = "/path/to/your/uploaded.pdf";
  const showPDF = false; // Set to true when you have a PDF to display
  
  return <div className="w-full mb-3">
      <div className="flex mb-3 justify-between max-md:flex-wrap">
        <ProjectDetail label="PROJECT" value={project.name} />
        <ProjectDetail label="SERVICE" value={project.service} />
        <ProjectDetail label="TYPE" value={project.type} />
        <ProjectDetail label="YEAR" value={project.year} />
      </div>
      <div className="flex gap-px max-md:flex-col max-sm:mt-3">
        {showPDF ? (
          <div className={isFullWidthProject ? "w-full" : "w-[1248px] max-md:w-full"}>
            <PDFViewer pdfUrl={pdfUrl} title={`${project.name} Presentation`} />
          </div>
        ) : showCarousel ? (
          <div className={isFullWidthProject ? "w-full" : "w-[1248px] max-md:w-full"}>
            <ProjectCarousel projectName={project.name} images={projectImages} includeYoutubeVideo={includeYoutubeVideo} />
          </div>
        ) : isAnikaLegal ? (
          <div className="w-full">
            <img 
              src="/lovable-uploads/1eb4e825-eecb-4ed6-9b38-e7513a91ba34.png" 
              alt="Anika Legal - The Problem" 
              className="w-full h-auto"
            />
          </div>
        ) : (
          <div className={isFullWidthProject ? "w-full h-[720px] bg-[#E3E3E3]" : "w-[1248px] h-[720px] bg-[#E3E3E3] max-md:w-full"} />
        )}
        
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
          </div> 
        : isHalo ? <div className="w-[624px] aspect-[16/9] max-md:w-full p-4 overflow-y-auto bg-white py-[17px]">
            <div className="text-[9px] text-[#1C1C1C] leading-[17px] mb-1.5">
              BRIEF
            </div>
            <div className="text-[13px] text-[#1C1C1C] leading-[17px] mb-4">
              Halo is a conceptual work that consists of three separate bath oil varietals. This project required packaging design, branding, and the creation of a folded sheet to be housed within the package.
            </div>
            
            <div className="text-[9px] text-[#1C1C1C] leading-[17px] mb-1.5">
              RATIONALE
            </div>
            <div className="text-[13px] text-[#1C1C1C] leading-[17px]">
              The essence of these designs draw on the motion that is associated with Halo. Creating a sense of flux within the brand, my intention was to associate the product alongside flowing water, and the infinite tessellation contained within liquid properties. With this product, I aimed to instill the immanent properties of becoming free flowing within the customer.
            </div>
          </div>
        : isCraftVictoria ? <div className="w-[624px] aspect-[16/9] max-md:w-full p-4 overflow-y-auto bg-white py-[17px]">
            <div className="text-[9px] text-[#1C1C1C] leading-[17px] mb-1.5">
              BRIEF
            </div>
            <div className="text-[13px] text-[#1C1C1C] leading-[17px] mb-4">
              The 2022 Annual Review for Craft Victoria aimed to showcase the organisation's position as the state's authoritative body on craft, featuring a range of content including financial reviews, corporate statements, upcoming events, and featured artists.
            </div>
            
            <div className="text-[9px] text-[#1C1C1C] leading-[17px] mb-1.5">
              RATIONALE
            </div>
            <div className="text-[13px] text-[#1C1C1C] leading-[17px]">
              The design evoked a sense of materiality, reflecting Craft Victoria's diverse engagement with various materials. It created a past-future dichotomy, blending traditional craftsmanship with modern computer-assisted designs, while ensuring legibility and clarity in the format of an annual review.
            </div>
          </div>
        : isPortFairy ? <div className="w-[624px] aspect-[16/9] max-md:w-full p-4 overflow-y-auto bg-white py-[17px]">
            <div className="text-[9px] text-[#1C1C1C] leading-[17px] mb-1.5">
              BRIEF
            </div>
            <div className="text-[13px] text-[#1C1C1C] leading-[17px] mb-4">
              The Port Fairy Folk Festival is a long-running music event featuring top folk acts from Australia and worldwide. This project involved creating a guidebook publication, poster, and website prototype for the festival.
            </div>
            
            <div className="text-[9px] text-[#1C1C1C] leading-[17px] mb-1.5">
              RATIONALE
            </div>
            <div className="text-[13px] text-[#1C1C1C] leading-[17px]">
              The design incorporated seaside and playful nautical themes to align with the festival's family-friendly approach. The map design balanced usability with the brand's identity, ensuring both functionality and visual coherence.
            </div>
          </div>
        : isBrunswickMakerspace ? <div className="w-[624px] aspect-[16/9] max-md:w-full p-4 overflow-y-auto bg-white py-[17px]">
            <div className="text-[9px] text-[#1C1C1C] leading-[17px] mb-1.5">
              BRIEF
            </div>
            <div className="text-[13px] text-[#1C1C1C] leading-[17px] mb-4">
              The Brunswick Tool Library is a local non-profit initiative in Melbourne aimed at providing tools and education for home repair and maintenance. This speculative design project reimagined it as Brunswick Makerspace, expanding its scope beyond tool lending.
            </div>
            
            <div className="text-[9px] text-[#1C1C1C] leading-[17px] mb-1.5">
              RATIONALE
            </div>
            <div className="text-[13px] text-[#1C1C1C] leading-[17px]">
              The goal was to transform the space into a creative hub where locals could not only borrow tools but also access fabrication tools, 3D printing, and studio spaces. The project involved creating a comprehensive branding style guide, including brand values, a tagline, and style guidelines. Additional brand collateral such as merchandise, membership cards, and a new website were developed to enhance brand consistency and appeal.
            </div>
          </div>
        : !isFullWidthProject ? <div className="w-[624px] aspect-[16/9] bg-[#E3E3E3] max-md:w-full" />
        : null}
      </div>
    </div>;
};
export default ProjectCard;
