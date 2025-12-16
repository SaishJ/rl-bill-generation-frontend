import { Loader2Icon } from "lucide-react";
import React from "react";

const Loader = () => {
  return (
    <div className="h-dvh flex items-center justify-center">
      <Loader2Icon className="animate-spin" />
    </div>
  );
};

export default Loader;
