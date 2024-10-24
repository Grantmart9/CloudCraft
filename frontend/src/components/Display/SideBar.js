import React from "react";
import { Button } from "@mui/material";
import { TopBarButtonStyle } from "./feutures";
import { Routes } from "components/Routes";
import { Size } from "media-query";

export const SideBar = ({ setTopBarOn }) => {
  const size = Size();
  const isResponsiveSize = ["XS", "SM", "MD"].includes(size);
  
  return (
    <div className="flex align-center justify-center">
      <div className={`grid grid-flow-${isResponsiveSize ? 'col' : 'row'} gap-2 mt-24`}>
        {Routes.map((page) => (
          <Button
            key={page.path} // Add a key prop for better list rendering
            onClick={setTopBarOn}
            href={page.path}
            sx={TopBarButtonStyle}
          >
            {page.name}
          </Button>
        ))}
      </div>
    </div>
  );
};
