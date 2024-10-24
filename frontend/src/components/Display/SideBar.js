import React from "react";
import { Button } from "@mui/material";
import { TopBarButtonStyle } from "./feutures";

export const SideBar = () => {
  return (
    <div className="flex align-center justify-center">
      <div className="grid grid-flow-row gap-2 mt-24">
        <Button href={"/home"} sx={TopBarButtonStyle}>
          Home
        </Button>
        <Button href={"/solutions"} sx={TopBarButtonStyle}>
          Solutions
        </Button>
        <Button href={"/about"} sx={TopBarButtonStyle}>
          About
        </Button>
        <Button href={"/contact"} sx={TopBarButtonStyle}>
          Contact
        </Button>
      </div>
    </div>
  );
};
