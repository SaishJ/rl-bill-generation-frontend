import React, { forwardRef } from "react";

import logo from "@/assets/logo.svg";
import GstBillTable from "./GstBillTable";
import { useSelector } from "react-redux";
import { selectGst } from "@/features/bill/billSelectors";

const GstBillPreview = forwardRef((props, ref) => {
  const formData = useSelector(selectGst);

  return (
    <div
      ref={ref}
      id="gst-bill"
      className="mx-auto w-[794px] bg-white p-3 text-balck text-sm shadow-md"
    >
      {/* Headers */}
      <div className="relative mt-2 flex flex-col items-center gap-0">
        <p className="text-[1.1rem] font-semibold text-red-500">TAX INVOICE</p>
        <p className="text-2xl font-semibold text-red-500">Rupesh Lights</p>
        <p className="text-sm font-bold italic">
          Everything Lights for Events, Stage Show, Drama, D.J.’s & Music
          Arrange
        </p>
        <p>
          34/2/2, Mata Ramabai Nagar, Dr. E. Moses Road, Worli Naka, Mumbai -
          400018.
        </p>
        <div className="flex flex-row items-center justify-center gap-[1.2rem]">
          <p>Mob.: +91 9967202648/9869749775</p>
          <p>Email: rupeshlighst@gmail.com</p>
        </div>
        <div className="absolute top-5 left-10">
          <img src={logo} alt="logo" className="h-20 w-20" />
        </div>
      </div>
      {/* Main Content */}
      <div className="mt-[1.8rem] mx-5">
        <div className="mb-2 border border-black flex flex-row">
          <div className="flex-2 p-2 flex flex-col gap-2">
            <p>M/s. {formData?.name}</p>
            <p>{formData?.address}</p>
            <p>GST TIN NO.: {formData?.gst_tin_no}</p>
          </div>
          <div className="border-l-1 border-black flex-1 p-2 flex flex-col gap-2">
            <p>INVOICE No.: {formData?.invoice_no}</p>
            <p>Date: {formData?.date}</p>
            <p>State Code: {formData?.state_code}</p>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <div className="flex-2">
            <p>Venue: {formData?.venue}</p>
          </div>
          <div className="flex-1 flex-col gap-2">
            <p>Date: {formData?.event_date}</p>
          </div>
        </div>
        <GstBillTable />
        <div className="mt-1 flex flex-row items-center justify-between">
          <p>E. & O.E.</p>
          <p>For: Rupesh Lights</p>
        </div>
      </div>
    </div>
  );
});

export default GstBillPreview;
