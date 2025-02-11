"use client";
import { StoreContext } from "@/store/StoreProvider";
import React, { useContext } from "react";

import { GiHamburgerMenu } from "react-icons/gi";

const ShowOptionsPrincipalLayout = () => {
  const context: any = useContext(StoreContext);

  return (
    <button
      className="rounded-full p-4 bg-transparent hover:bg-slate-300 active:bg-slate-400
      text-lg text-center text-white font-medium outline-none"
      type="button"
      onClick={() => context.setSideBarOpened(!context.sideBarOpened)}
    >
      <GiHamburgerMenu />
    </button>
  );
};

export default ShowOptionsPrincipalLayout;
