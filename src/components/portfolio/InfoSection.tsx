import React from "react";

interface InfoItem {
  title?: string;
  subtitle?: string;
  content?: string;
}

interface InfoSectionProps {
  title: string;
  items: InfoItem[];
  className?: string;
}

const InfoSection: React.FC<InfoSectionProps> = ({
  title,
  items,
  className = "",
}) => {
  return (
    <div
      className={`w-[312px] flex flex-col gap-6 p-3 max-md:w-full max-md:max-w-none ${className}`}
    >
      <div className="text-[9px] text-[#1C1C1C] leading-[17px] mb-1.5">
        {title}
      </div>
      <div className="flex flex-col gap-px">
        {items.map((item, index) => (
          <div key={index} className={item.content ? "mb-[17px]" : ""}>
            {item.title && (
              <div
                className={`text-[13px] ${item.subtitle ? "font-bold" : ""} text-[#1C1C1C] leading-[17px]`}
              >
                {item.title}
              </div>
            )}
            {item.subtitle && (
              <div className="text-[13px] text-[#1C1C1C] leading-[17px]">
                {item.subtitle}
              </div>
            )}
            {item.content && (
              <div className="text-[13px] text-[#1C1C1C] leading-[17px]">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
