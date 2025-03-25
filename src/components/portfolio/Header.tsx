import React from "react";
import InfoSection from "./InfoSection";
import AboutSection from "./AboutSection";

const Header: React.FC = () => {
  const works = [
    { title: "National Bowel Cancer Screening Program" },
    { title: "Craft Victoria" },
    { title: "Port Fairy Folk Festival" },
    { title: "Halo" },
    { title: "Brunswick Makerspace" },
    { title: "Anika Legal" },
    { title: "Monash Gallery of Art" },
    { title: "AGL" },
    { title: "Climate Reality Project" },
  ];

  const capabilities = [
    { title: "Strategic Design" },
    { title: "UI & Interaction Design" },
    { title: "Communication Design" },
    { title: "Publication Design" },
    { title: "Web Analytics" },
  ];

  const technologies = [
    { title: "Adobe Creative Suite" },
    { title: "Figma" },
    { title: "Axure" },
    { title: "Sketch" },
    { title: "Framer" },
    { title: "Adobe XD" },
    { title: "Logic" },
    { title: "HTML" },
    { title: "CSS" },
  ];

  const education = [
    {
      title: "Bachelor of Design (Comm. & UX)",
      subtitle: "Swinburne University",
    },
    {
      title: "Advanced Diploma in Design",
      subtitle: "Swinburne University",
    },
    {
      title: "Service Design Bootcamp",
      subtitle: "Academy Xi",
    },
  ];

  const aboutParagraphs = [
    "Samuel Upham is a strategic designer specialising in service design, communications, and UX, with over 5 years of experience crafting human-centered solutions that bridge user needs and business goals. Known for a holistic approach, Samuel combines design thinking, cross-disciplinary collaboration, and data-driven insights to deliver intuitive, impactful experiences across diverse industries.",
    "Additionally, Samuel's work is deeply influenced by his curiosity for culture, history, and the interconnectedness of local and digital communities. This perspective allows him to approach projects with a nuanced understanding of context, ensuring solutions that feel authentic, meaningful, and grounded in the world they serve.",
  ];

  const contact = [{ title: "Email" }, { title: "Instagram" }];

  return (
    <header>
      <div className="flex gap-6 px-6 py-9 max-md:flex-wrap max-sm:px-4 max-sm:py-6">
        <InfoSection title="WORKS" items={works} />
        <InfoSection title="CAPABILITIES" items={capabilities} />
        <InfoSection title="TECHNOLOGIES" items={technologies} />
        <InfoSection title="EDUCATION" items={education} />
        <AboutSection title="ABOUT" paragraphs={aboutParagraphs} />
        <InfoSection title="CONTACT" items={contact} />
      </div>
      <div className="flex gap-[155px] relative mt-6 px-6 py-0 top-[scroll]">
        {Array(13)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="w-px h-3.5 bg-[rgba(0,0,0,0.00)] border-r-white border-r border-solid"
            />
          ))}
      </div>
    </header>
  );
};

export default Header;
