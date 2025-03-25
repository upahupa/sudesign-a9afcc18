import React from "react";

interface AboutSectionProps {
  title: string;
  paragraphs: string[];
  className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  paragraphs,
  className = "",
}) => {
  return (
    <div
      className={`w-[312px] flex flex-col gap-6 p-3 max-md:w-full max-md:max-w-none ${className}`}
    >
      <div className="text-[9px] text-[#1C1C1C] leading-[17px] mb-1.5">
        {title}
      </div>
      <div className="flex flex-col gap-[22px]">
        {paragraphs.map((paragraph, index) => (
          <div
            key={index}
            className="text-[13px] text-[#1C1C1C] leading-[17px]"
          >
            {paragraph}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
