import React, { useRef } from "react";
import { useLocation } from "react-router";
import GenerateBillHeader from "@/components/headers/GenerateBillHeader";
import NonGstBillForm from "./bills/NonGst/NonGstBillForm";
import NonGstBillPreview from "./bills/NonGst/NonGstBillPreview";
import GstBillForm from "./bills/Gst/GstBillForm";
import GstBillPreview from "./bills/Gst/GstBillPreview";

const GenerateBill = () => {
  const { state } = useLocation();
  const billRef = useRef(null);

  const billType = state.type;
  const name = billType === "gst" ? "Gst Bill" : "Non-Gst Bill";

  return (
    <>
      <GenerateBillHeader name={name} billRef={billRef} />
      <div className="grid grid-cols-3 gap-4 p-4">
        {billType === "gst" ? (
          <>
            <GstBillForm />
            <GstBillPreview />
          </>
        ) : (
          <>
            <NonGstBillForm />
            <NonGstBillPreview ref={billRef} />
          </>
        )}
      </div>
    </>
  );
};

export default GenerateBill;
