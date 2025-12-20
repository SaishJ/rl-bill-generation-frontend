import React from "react";

const NonGstBillTable = ({ items = [] }) => {
  const MAX_ROWS = 10;

  const rows = [...items];

  while (rows.length < MAX_ROWS) {
    rows.push({
      description: "",
      qty: "",
      rate: "",
      amount: "",
    });
  }

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
            <td className="border-r border-black text-center">{row.rate}</td>
            <td className="text-center">{row.amount}</td>
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
            <span className="italic font-semibold px-1">Rupees:</span>
            <span></span>
          </td>
          <td className="border-t border-r border-black text-center font-semibold p-1.5">
            Total
          </td>
          <td
            colSpan={2}
            className="border-t border-black font-normal text-center"
          >
            {/* ₹ 25,000/- */}
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
            {/* ₹ 25,000/- */}
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default NonGstBillTable;
