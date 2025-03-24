
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
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <AspectRatio ratio={16 / 9}>
              <div className={`w-full h-full flex items-center justify-center ${image.includes('PF MAP_port fairy map.png') ? 'bg-[#e3e3e3]' : ''}`}>
                <img 
                  src={image} 
                  alt={`${projectName} image ${index + 1}`} 
                  className={`${image.includes('PF MAP_port fairy map.png') ? 'object-contain max-w-full max-h-full' : 'object-cover w-full h-full'} rounded-none`}
                />
              </div>
            </AspectRatio>
          </CarouselItem>
        ))}
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
