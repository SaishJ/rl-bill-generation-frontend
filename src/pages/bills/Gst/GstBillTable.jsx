import React from "react";

const GstBillTable = () => {
  const MAX_ROWS = 10;

  const rows = [];

  while (rows.length < MAX_ROWS) {
    rows.push({
      hsn: "",
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
          <th className="border-r border-b border-black p-1.5 font-normal w-[4rem]">
            HSN
          </th>
          <th className="border-r border-b border-black p-1.5 font-normal">
            D E S C R I P T I O N
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
            <td className="border-r border-black text-center">{row.hsn}</td>
            <td className="border-r border-black text-left px-2">
              {row.description}
            </td>
            <td className="border-r border-black text-center">{row.qty}</td>
            <td className="border-r border-black text-center">
              {row.rate ? `${row.rate}/-` : ""}
            </td>
            <td>{row.amount}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td
            colSpan={3}
            rowSpan={2}
            className="border-t border-r border-black p-1 align-top"
          >
            <span className="italic font-semibold px-1">Rupees:</span>
            <span></span>
          </td>
          <td className="border-t border-r border-black font-normal text-center p-1">
            Taxable Amount
          </td>
          <td className="border-t border-black font-normal text-center">
            2500
          </td>
        </tr>
        <tr>
          <td className="border-t border-r border-black font-normal text-center p-1">
            GST @
          </td>
          <td className="border-t border-black font-normal text-center">
            1800
          </td>
        </tr>
        <tr>
          <td
            colSpan={2}
            rowSpan={1}
            className="p-1 border-t border-black text-center"
          >
            GST TIN No.: 27ARVPK5432C1ZN
          </td>
          <td className="border-t border-r border-black text-center">
            State Code: 27
          </td>
          <td className="border-t border-r border-black text-center">CGST @</td>
          <td className="border-t border-r border-black font-normal text-center">
            1800
          </td>
        </tr>
        <tr>
          <td
            colSpan={3}
            rowSpan={2}
            className="border-t border-r border-black p-1"
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
            2900
          </td>
        </tr>
        <tr>
          <td className="border-t border-r border-black text-center">
            Grand Total
          </td>
          <td className="border-t border-black font-normal text-center">
            3500
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default GstBillTable;
