
import React from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProjectCarouselProps {
  projectName: string;
  images: string[];
  includeYoutubeVideo?: boolean;
  youtubeVideoId?: string;
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ 
  projectName, 
  images, 
  includeYoutubeVideo = false,
  youtubeVideoId = "7fMNFlj5zdw" // Default video ID for Port Fairy Folk Festival
}) => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {images.map((image, index) => {
          // Check if this is the Port Fairy map image
          const isPortFairyMap = projectName === "Port Fairy Folk Festival" && 
                                image.includes("d24f8533-215e-4280-b160-35d98f6c3961");

          return (
            <CarouselItem key={index}>
              <AspectRatio ratio={16 / 9}>
                <div className={`w-full h-full flex items-center justify-center ${isPortFairyMap ? 'bg-[#e3e3e3]' : ''}`}>
                  <img 
                    src={image} 
                    alt={`${projectName} image ${index + 1}`} 
                    className={`${isPortFairyMap ? 'object-contain w-full h-full' : 'object-cover w-full h-full'} rounded-none`}
                  />
                </div>
              </AspectRatio>
            </CarouselItem>
          );
        })}
        {includeYoutubeVideo && (
          <CarouselItem>
            <AspectRatio ratio={16 / 9}>
              <iframe
                src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                title={`${projectName} Video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-none"
              ></iframe>
            </AspectRatio>
          </CarouselItem>
        )}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  );
};

export default ProjectCarousel;
