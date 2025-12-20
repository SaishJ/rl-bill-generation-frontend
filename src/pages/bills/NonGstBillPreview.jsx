import React, { forwardRef } from "react";

import logo from "@/assets/logo.svg";
import NonGstBillTable from "./NonGstBillTable";

const NonGstBillPreview = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      id="nongst-bill"
      className="mx-auto w-[794px] bg-white p-3 text-black text-sm shadow-md"
    >
      {/* Header */}
      <div className="relative">
        <p className="mt-2 text-center text-2xl font-semibold text-red-500">
          Rupesh Lights
        </p>
        <p className="text-center text-sm font-bold italic">
          Everything Lights for Events, Stage Show, Drama, D.J.’s & Music
          Arrange
        </p>
        <p className="text-center">
          34/2/2, Mata Ramabai Nagar, Dr. E. Moses Road, Worli Naka, Mumbai -
          400018.
        </p>
        <div className="flex flex-row items-center justify-center gap-[1.2rem]">
          <p>Mob.: +91 9967202648/9869749775</p>
          <p>Email: rupeshlights@gmail.com</p>
        </div>
        <div className="absolute top-3 left-10">
          <img src={logo} alt="logo" className="h-20 w-20" />
        </div>
      </div>
      {/* Main Content */}
      <div className="mt-[1.8rem] mx-5">
        <div className="mb-2 border border-black flex flex-row">
          <div className="flex-2 p-2">
            <p>M/s.</p>
            <p></p>
          </div>
          <div className="border-l-1 border-black flex-1 p-2 flex flex-col gap-2">
            <p>INVOICE No.:</p>
            <p>Date:</p>
            <p></p>
          </div>
        </div>
        <p>Venue:</p>
        <NonGstBillTable />
        <div className="mt-[3rem] flex flex-row items-end justify-between">
          <div>
            <p>Bank Details:</p>
            <p>Name: Rupesh Kasare.</p>
            <p>A/C 20001972170</p>
            <p>IFSC Code: MAHAB0000050</p>
            <p>BANK OF MAHARASHTRA WORLI</p>
          </div>
          <div>
            <p className="font-semibold">For: Rupesh Lights</p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default NonGstBillPreview;
