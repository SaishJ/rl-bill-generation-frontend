import React from "react";
import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";

const NonGstBillForm = ({ billRef }) => {
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
    <div>
      NonGstBillForm
      <Button onClick={handleDownloadPdf}>Download PDF</Button>
    </div>
  );
};

export default NonGstBillForm;
