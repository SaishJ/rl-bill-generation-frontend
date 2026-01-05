import { selectNongst, selectNongstItems } from "@/features/bill/billSelectors";
import { priceInWords } from "@/utils/constant";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";

const NonGstBillTable = () => {
  const formData = useSelector(selectNongst);
  const tableData = useSelector(selectNongstItems);

  const MAX_ROWS = 12;

  const rows = [...tableData];

  while (rows.length < MAX_ROWS) {
    rows.push({
      description: "",
      qty: "",
      rate: "",
      amount: "",
    });
  }

  const calculatedAmount = useMemo(() => {
    const calculateTotal = rows.reduce((acc, curr) => {
      return acc + curr.qty * curr.rate;
    }, 0);

    const amount = Number(formData?.extraAmount);

    const totalAmount = formData?.autoCalculate ? calculateTotal : amount;

    return { amount, calculateTotal, totalAmount };
  }, [rows]);

  return (
    <table className="w-full border border-black mt-3">
      <thead>
        <tr>
          <th className="border-r border-b border-black p-1 font-normal w-[4rem]">
            No.
          </th>
          <th className="border-r border-b border-black p-1 font-normal">
            D E S C R I P T I O N
          </th>
          <th className="border-r border-b border-black p-1 font-normal w-[6rem]">
            Quantity
          </th>
          <th className="border-r border-b border-black p-1 font-normal w-[5rem]">
            Rate
          </th>
          <th className="border-b border-black p-1 font-normal w-[6rem]">
            AMOUNT <br /> Rs
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index} className="h-[2.3rem]">
            <td className="border-r border-black text-center">
              {row.description ? index + 1 : ""}
            </td>
            <td className="border-r border-black text-left px-2">
              {row.description}
            </td>
            <td className="border-r border-black text-center">{row.qty}</td>
            <td className="border-r border-black text-center">
              {row.rate ? `${row.rate}/-` : ""}
            </td>
            <td className="text-center">
              {formData?.autoCalculate
                ? row.rate
                  ? `${Number(row.qty * row.rate).toLocaleString("en-IN")}/-`
                  : ""
                : index === 0 && formData?.extraAmount
                ? `${Number(formData?.extraAmount).toLocaleString("en-IN")}/-`
                : ""}
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td
            colSpan={2}
            rowSpan={2}
            className="border-t border-r border-black p-2 align-top"
          >
            <span className="italic font-semibold px-1">
              Rupees:{" "}
              <span className="font-normal">
                {priceInWords(calculatedAmount.totalAmount)}
              </span>
            </span>
          </td>
          <td className="border-t border-r border-black text-center font-semibold p-1.5">
            Total
          </td>
          <td
            colSpan={2}
            className="border-t border-black font-normal text-center"
          >
            {`\u20B9 ${Number(calculatedAmount?.totalAmount).toLocaleString(
              "en-IN"
            )}`}
          </td>
        </tr>
        <tr>
          <td className="border-t border-r border-black text-center font-semibold p-1.5">
            Grand Total
          </td>
          <td
            colSpan={2}
            className="border-t border-black font-normal text-center"
          >
            {`\u20B9 ${Number(calculatedAmount?.totalAmount).toLocaleString(
              "en-IN"
            )}`}
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default NonGstBillTable;
