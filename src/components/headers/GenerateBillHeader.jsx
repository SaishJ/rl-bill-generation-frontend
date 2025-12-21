import React from "react";
import { Button } from "../ui/button";
import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";

const GenerateBillHeader = ({ name, billRef }) => {
  const handleDownloadPdf = async () => {
    if (!billRef?.current) return;

    const canvas = await html2canvas(billRef.current, {
      scale: 3,
      useCORS: true,
      backgroundColor: "#FFFFFF",
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = 210;
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("nongst-bill.pdf");
  };

  return (
    <div className="h-[3.5rem] shadow-sm flex items-center justify-between px-4">
      <p className="text-[1.2rem] font-semibold">{name}</p>
      <Button onClick={handleDownloadPdf} className="cursor-pointer">
        Save Bill
      </Button>
    </div>
  );
};

export default GenerateBillHeader;
