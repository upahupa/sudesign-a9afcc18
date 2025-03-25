
import React from "react";

interface ProjectDetailProps {
  label: string;
  value: string;
  className?: string;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  label,
  value,
  className = "",
}) => {
  return (
    <div
      className={`flex-1 px-3 py-0 max-md:w-6/12 max-sm:w-full ${className}`}
    >
      <div className="text-[9px] text-[#1C1C1C] leading-[17px] mb-1.5 uppercase">
        {label}
      </div>
      <div className="text-[13px] text-[#1C1C1C] leading-[17px]">{value}</div>
    </div>
  );
};

export default ProjectDetail;
