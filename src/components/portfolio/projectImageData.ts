
// Project image data organized by project name
export const projectImages = {
  "National Bowel Cancer Screening Program": [
    "/lovable-uploads/b264075a-dc00-49af-84b9-535cfe457925.png",
    "/lovable-uploads/5034b600-c4f4-49d5-83b9-a1973faad927.png",
    "/lovable-uploads/37baa30c-f0d2-4fd2-b00f-3b5570a3cd9e.png",
    "/lovable-uploads/4001b3c4-eba2-40bd-baa0-23dbb6f393d1.png"
  ],
  "Halo": [
    "/lovable-uploads/539c41bb-4018-4ad4-86c3-0fe45274ccc5.png",
    "/lovable-uploads/6aa931ee-79c7-45b5-888a-eb82ee7b2f73.png",
    "/lovable-uploads/cf29f845-1f99-4e8c-b3a0-10fe16cd98b6.png",
    "/lovable-uploads/1bb4bdc0-e979-4b96-94eb-3ca6b03b3219.png",
    "/lovable-uploads/2768bd6f-6d32-468c-8064-ffcbff268b9d.png",
    "/lovable-uploads/1a9c583f-0f64-4e1e-b557-5ecdac8da1f2.png"
  ],
  "Craft Victoria": [
    "/lovable-uploads/ac64d2d3-3ed9-49d8-b759-6af8505505fd.png",
    "/lovable-uploads/eb42d85e-124d-4ff6-a6ac-074b1ba444d4.png", 
    "/lovable-uploads/ff564cb7-92aa-4b51-bb58-c06093108920.png", 
    "/lovable-uploads/0dba80e4-20cf-4402-930e-960d3d4c0e87.png"
  ],
  "Port Fairy Folk Festival": [
    "/lovable-uploads/9f59f1bd-8831-48f8-8a96-e8043855ab88.png",
    "/lovable-uploads/534ec198-c079-40b4-b880-09217d138a57.png",
    "/lovable-uploads/7a6c1a6d-56c7-4b2a-8b74-593b2ca0526b.png",
    "/lovable-uploads/7dec2573-1587-4f15-b1e1-5b6289858ad3.png"
  ]
};

// Helper function to check if a project has images
export const hasProjectImages = (projectName: string): boolean => {
  return projectName in projectImages;
};

// Function to get images for a specific project
export const getProjectImages = (projectName: string): string[] => {
  return projectImages[projectName] || [];
};

// Projects that include YouTube videos
export const projectsWithYoutubeVideos = ["Port Fairy Folk Festival"];

// Check if a project should include a YouTube video
export const shouldIncludeYoutubeVideo = (projectName: string): boolean => {
  return projectsWithYoutubeVideos.includes(projectName);
};
