
import React from "react";

interface PDFViewerProps {
  pdfUrl: string;
  title?: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl, title }) => {
  return (
    <div className="w-full h-full">
      <iframe
        src={pdfUrl}
        title={title || "PDF Document"}
        className="w-full h-full border-none"
        style={{ minHeight: "720px" }}
      />
    </div>
  );
};

export default PDFViewer;
