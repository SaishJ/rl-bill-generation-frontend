import { selectGst, selectGstItems } from "@/features/bill/billSelectors";
import { priceInWords } from "@/utils/constant";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";

const GstBillTable = () => {
  const formData = useSelector(selectGst);
  const tableData = useSelector(selectGstItems);

  const MAX_ROWS = 10;

  const rows = [...tableData];

  while (rows.length < MAX_ROWS) {
    rows.push({
      hsn: "",
      description: "",
      qty: "",
      rate: "",
      amount: "",
    });
  }

  const calculateFinalAmount = useMemo(() => {
    const calculateTotal = rows.reduce((acc, curr) => {
      return acc + curr.qty * curr.rate;
    }, 0);

    const totalGst = formData?.gst_percentage;
    const dividedGst = totalGst / 2;

    const taxableAmount = formData?.autoCalculate
      ? calculateTotal
      : formData?.amount;
    const gstAmount = (taxableAmount * totalGst) / 100;

    const grandTotal = Number(taxableAmount) + gstAmount;

    return {
      calculateTotal,
      dividedGst,
      taxableAmount,
      gstAmount,
      grandTotal,
    };
  }, [formData]);

  return (
    <table className="w-full border border-black mt-3">
      <thead>
        <tr>
          <th className="border-r border-b border-black p-1.5 font-normal w-[2.2rem]">
            Sr. No.
          </th>
          <th className="border-r border-b border-black p-1.5 font-normal">
            D E S C R I P T I O N
          </th>
          <th className="border-r border-b border-black p-1.5 font-normal w-[4rem]">
            HSN
          </th>
          <th className="border-r border-b border-black p-1.5 font-normal w-[6.5rem]">
            Quantity
          </th>
          <th className="border-r border-b border-black p-1.5 font-normal w-[7rem]">
            Rate
          </th>
          <th className="border-r border-b border-black p-1.5 font-normal w-[6rem]">
            AMOUNT
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index} className="h-[2.3rem]">
            <td className="border-r border-black text-center px-1">
              {row.description ? index + 1 : ""}
            </td>
            <td className="border-r border-black text-left px-2">
              {row.description}
            </td>
            <td className="border-r border-black text-center">{row.hsn}</td>
            <td className="border-r border-black text-center">{row.qty}</td>
            <td className="border-r border-black text-center">
              {row.rate ? `${row.rate}/-` : ""}
            </td>
            <td className="text-center">
              {formData?.autoCalculate
                ? row.rate
                  ? `\u20B9 ${Number(row.qty * row.rate).toLocaleString(
                      "en-IN"
                    )}/-`
                  : ""
                : index === 0 && formData?.amount
                ? `\u20B9 ${Number(formData?.amount).toLocaleString("en-IN")}/-`
                : ""}
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td
            colSpan={4}
            rowSpan={2}
            className="border-t border-r border-black p-1 align-top"
          >
            <span className="italic font-semibold px-1">
              Rupees:{" "}
              <span className="font-normal">
                {priceInWords(calculateFinalAmount.grandTotal)}
              </span>
            </span>
            <span></span>
          </td>
          <td className="border-t border-r border-black font-normal text-center p-1.5">
            Taxable Amount
          </td>
          <td className="border-t border-black font-normal text-center">
            {`\u20B9 ${Number(
              calculateFinalAmount?.taxableAmount
            ).toLocaleString("en-IN")}/-`}
          </td>
        </tr>
        <tr>
          <td className="border-t border-r border-black font-normal text-center p-1.5">
            GST @ {calculateFinalAmount?.dividedGst} %
          </td>
          <td className="border-t border-black font-normal text-center">
            {`\u20B9 ${Number(
              calculateFinalAmount?.gstAmount / 2
            ).toLocaleString("en-IN")}/-`}
          </td>
        </tr>
        <tr>
          <td
            colSpan={3}
            rowSpan={1}
            className="p-1.5 border-t border-black text-left"
          >
            GST TIN No.: 27ARVPK5432C1ZN
          </td>
          <td className="px-1.5 border-t border-r border-black text-center">
            State Code: 27
          </td>
          <td className="border-t border-r border-black text-center">
            CGST @ {calculateFinalAmount?.dividedGst} %
          </td>
          <td className="border-t border-r border-black font-normal text-center">
            {`\u20B9 ${Number(
              calculateFinalAmount?.gstAmount / 2
            ).toLocaleString("en-IN")}/-`}
          </td>
        </tr>
        <tr>
          <td
            colSpan={4}
            rowSpan={2}
            className="border-t border-r border-black p-1.5"
          >
            <span>
              Canara Bank <br />
              Worli Branch <br />
              A/c. No.: 0113214000020 <br />
              IFSC: CNRB0000113
            </span>
          </td>
          <td className="border-t border-r border-black text-center">
            Roundoff
          </td>
          <td className="border-t border-black font-normal text-center">
            {`\u20B9 ${Number(calculateFinalAmount?.gstAmount).toLocaleString(
              "en-IN"
            )}/-`}
          </td>
        </tr>
        <tr>
          <td className="border-t border-r border-black text-center">
            Grand Total
          </td>
          <td className="border-t border-black font-normal text-center">
            {`\u20B9 ${calculateFinalAmount?.grandTotal.toLocaleString(
              "en-IN"
            )}/-`}
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default GstBillTable;
