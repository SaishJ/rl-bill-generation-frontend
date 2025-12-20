import GenerateBillHeader from "@/components/headers/GenerateBillHeader";
import React, { useRef } from "react";
import { useLocation } from "react-router";
import NonGstBillForm from "./bills/NonGstBillForm";
import NonGstBillPreview from "./bills/NongstBillPreview";

const GenerateBill = () => {
  const { state } = useLocation();
  const billRef = useRef(null);

  const name = state.type === "gst" ? "Gst Bill" : "Non-Gst Bill";

  return (
    <>
      <GenerateBillHeader name={name} />
      <div className="grid grid-cols-3 gap-4 p-4">
        <NonGstBillForm billRef={billRef} />
        <NonGstBillPreview ref={billRef} />
      </div>
    </>
  );
};

export default GenerateBill;
