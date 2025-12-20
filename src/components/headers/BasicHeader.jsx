import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "@/features/auth/authSelectors";
import { Button } from "../ui/button";
import { logout } from "@/features/auth/authSlice";

import wave from "@/assets/wave.gif";

const BasicHeader = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="h-[3.5rem] shadow-sm flex items-center justify-between px-4">
      <div className="flex items-center gap-1">
        <p className="text-[1.2rem] font-semibold">Welcome, {user.name}</p>
        <img src={wave} alt="wave" className="h-5.5 w-5.5" />
      </div>
      <Button
        className="cursor-pointer rounded-sm w-[5rem]"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  );
};

export default BasicHeader;
