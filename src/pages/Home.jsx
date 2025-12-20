import React from "react";
import { Button } from "@/components/ui/button";

import gstBill from "@/assets/gst-bill.png";
import nonGstBill from "@/assets/non-gst-bill.png";
import { useNavigate } from "react-router";

const BillCard = ({ type }) => {
  const navigate = useNavigate();

  const navigateToBill = () => {
    navigate("/generate-bill", { state: { type } });
  };

  return (
    <div className="bg-neutral-100 p-2 rounded-md flex flex-col gap-2">
      <img
        src={type === "gst" ? gstBill : nonGstBill}
        alt={type}
        className="h-auto rounded-sm"
      />
      <Button className="cursor-pointer rounded-sm" onClick={navigateToBill}>
        {type === "gst" ? "Gst Bill" : "Non-Gst Bill"}
      </Button>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <h5 className="text-xl font-[500]">Create New Bill</h5>
      <div className="grid grid-cols-5 gap-4 my-4">
        <BillCard type="gst" />
        <BillCard type="non-gst" />
      </div>
    </div>
  );
};

export default Home;
