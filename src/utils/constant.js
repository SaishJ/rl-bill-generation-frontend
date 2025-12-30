import { LayoutDashboard, ReceiptIndianRupee } from "lucide-react";

export const sidebarRoutes = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "Bills", path: "/bills", icon: ReceiptIndianRupee },
];

const ones = [
  "",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Eleven",
  "Twelve",
  "Thirteen",
  "Fourteen",
  "Fifteen",
  "Sixteen",
  "Seventeen",
  "Eighteen",
  "Nineteen",
];

const tens = [
  "",
  "",
  "Twenty",
  "Thirty",
  "Fourty",
  "Fifty",
  "Sixty",
  "Seventy",
  "Eighty",
  "Ninety",
];

export const priceInWords = (number) => {
  if (isNaN(number)) return "";

  const convertBelowHundred = (num) => {
    if (num < 20) return ones[num];
    return tens[Math.floor(num / 10)] + (num % 10 ? "" + ones[num % 10] : "");
  };

  const convertBelowThousand = (num) => {
    if (num < 100) return convertBelowHundred(num);

    return (
      ones[Math.floor(num / 100)] +
      " Hundred" +
      (num % 100 ? " " + convertBelowHundred(num % 100) : "")
    );
  };

  const convertNumber = (num) => {
    if (num === 0) return;

    let result = "";

    if (num >= 10000000) {
      result += convertBelowThousand(Math.floor(num / 10000000)) + "Crore ";
      num %= 10000000;
    }

    if (num >= 100000) {
      result += convertBelowThousand(Math.floor(num / 100000)) + " Lakh ";
      num %= 100000;
    }

    if (num >= 1000) {
      result += convertBelowThousand(Math.floor(num / 1000)) + " Thousand ";
      num %= 1000;
    }

    if (num > 0) {
      result += convertBelowThousand(num);
    }

    return result.trim();
  };

  const rupees = Math.floor(number);
  const paise = Math.round((number - rupees) * 100);

  let words = convertNumber(rupees) + " Rupees Only";

  if (paise > 0) {
    words += " and " + convertBelowHundred(paise) + " Paise";
  }

  return words;
};
