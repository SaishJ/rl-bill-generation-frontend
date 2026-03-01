import React from "react";
import { Button } from "../ui/button";
import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";
import { useSelector } from "react-redux";
import { selectGst, selectNongst } from "@/features/bill/billSelectors";
import { useCreateBillMutation } from "@/services/billApi";
import { toast } from "sonner";
import { Spinner } from "../ui/spinner";

const GenerateBillHeader = ({ name, billRef, billType }) => {
  const gstBillData = useSelector(selectGst);
  const nonGstBillData = useSelector(selectNongst);

  const [create, { isLoading, isSuccess, error }] = useCreateBillMutation();

  const handleDownloadPdf = async () => {
    if (!billRef?.current) return;

    const billData = billType === "gst" ? gstBillData : nonGstBillData;
    const data = {
      ...billData,
      billType,
    };

    try {
      const response = await create(data).unwrap();
      toast.success(response.message);

      const canvas = await html2canvas(billRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#FFFFFF",
      });

      const imgData = canvas.toDataURL("image/png");
      const pdfName =
        billType === "gst"
          ? `GST Bill-${gstBillData?.invoice_no}.pdf`
          : `Bill-${nonGstBillData?.invoice_no}.pdf`;

      const pdf = new jsPDF("p", "mm", "a4");

      const pdfWidth = 210;
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(pdfName);
    } catch (error) {
      const message = error?.data?.message;
      toast.error(message);
    }
  };

  const disableButton =
    billType === "gst" ? !gstBillData?.invoice_no : !nonGstBillData?.invoice_no;

  return (
    <div className="h-[3.5rem] shadow-sm flex items-center justify-between px-4">
      <p className="text-[1.2rem] font-semibold">{name}</p>
      <Button
        onClick={handleDownloadPdf}
        className="w-22 cursor-pointer"
        disabled={disableButton || isLoading}
      >
        {isLoading ? <Spinner /> : "Save Bill"}
      </Button>
    </div>
  );
};

export default GenerateBillHeader;
