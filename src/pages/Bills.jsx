import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { useFetchBillQuery } from "@/services/billApi";
import gstBill from "@/assets/gst-bill.png";
import nonGstBill from "@/assets/non-gst-bill.png";
import { Spinner } from "@/components/ui/spinner";
import { useNavigate } from "react-router";

const BillCard = ({ type, data }) => {
  const navigate = useNavigate();

  const navigateToDetails = (id) => {
    navigate(`/bill/${id}?type=${type}`);
  };

  return (
    <div className="bg-neutral-100 p-2 rounded-md flex flex-col gap-2">
      <img
        src={type === "gst" ? gstBill : nonGstBill}
        alt={type}
        className="h-auto rounded-sm"
      />
      <Button
        className="cursor-pointer rounded-sm"
        onClick={() => navigateToDetails(data?._id)}
      >
        Bill No. {data?.invoice_no}
      </Button>
    </div>
  );
};

const Loader = () => {
  return (
    <div className="h-90 flex items-center justify-center">
      <Spinner />
    </div>
  );
};

const Bills = () => {
  const [billType, setBillType] = useState("gst");

  const {
    data: billsData,
    isLoading,
    error,
  } = useFetchBillQuery({ type: billType });

  console.log(billsData);

  return (
    <div>
      <ButtonGroup>
        <Button
          variant={billType === "gst" ? "default" : "outline"}
          onClick={() => setBillType("gst")}
          className="w-20"
        >
          Gst
        </Button>
        <Button
          variant={billType === "non-gst" ? "default" : "outline"}
          onClick={() => setBillType("non-gst")}
          className="w-20"
        >
          Non-Gst
        </Button>
      </ButtonGroup>
      {isLoading ? (
        <Loader />
      ) : billsData?.data && billsData?.data?.length > 0 ? (
        <div className="grid grid-cols-5 gap-4 my-4">
          {billsData?.data && billsData?.data?.length > 0
            ? billsData?.data?.map((data, index) => (
                <BillCard type={billType} key={index} data={data} />
              ))
            : null}
        </div>
      ) : null}
    </div>
  );
};

export default Bills;
