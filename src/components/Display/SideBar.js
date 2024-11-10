import React from "react";
import { Button } from "@mui/material";
import { TopBarButtonStyle } from "./feutures";
import { Routes } from "components/Routes";
import { Size } from "components/Display/media-query";
import { layoutbgcolor, AppFont } from "./feutures";

export const SideBar = ({ setTopBarOn }) => {
  const size = Size();
  const isResponsiveSize = ["XS", "SM", "MD"].includes(size);

  return (
    <div>
      <div
        className={`grid grid-${
          isResponsiveSize ? "cols-3" : "row-span-1"
        } gap-1 mt-${isResponsiveSize ? "20" : "24"} px-2 pb-3`}
      >
        {Routes.map((page) => (
          <div className="flex align-center justify-center">
            <Button
              key={page.path} // Add a key prop for better list rendering
              href={page.path}
              sx={TopBarButtonStyle}
              onClick={setTopBarOn}
              variant="contained"
              style={{
                textTransform: "none",
                boxShadow: "none",
                maxWidth: "500pt",
              }}
            >
              <div
                style={{
                  fontFamily: AppFont,
                  fontSize: isResponsiveSize ? "7pt" : "10pt",
                }}
              >
                {page.name}
              </div>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
