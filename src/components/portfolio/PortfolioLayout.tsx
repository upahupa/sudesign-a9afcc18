import React from "react";
import Header from "./Header";
import ProjectsSection from "./ProjectsSection";

const PortfolioLayout: React.FC = () => {
  return (
    <div className="w-full max-w-[1920px] bg-white mx-auto my-0">
      <Header />
      <ProjectsSection />
    </div>
  );
};

export default PortfolioLayout;
