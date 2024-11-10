import React from "react";
import { Slide } from "@mui/material";
import { pagetitlecolor, AppFont } from "components/Display/feutures";

export const RenderHeader = ({ pageHeader, topBarOn, isResponsiveSize }) => (
  <div>
    {topBarOn ? (
      <div>
        {isResponsiveSize ? (
          <h1
            style={{ color: pagetitlecolor, fontFamily: AppFont }}
            className="text-center justify-center text-3xl mt-40"
          >
            {pageHeader}
          </h1>
        ) : (
          <h1
            style={{ color: pagetitlecolor, fontFamily: AppFont }}
            className="text-center justify-center text-3xl mt-16"
          >
            {pageHeader}
          </h1>
        )}
      </div>
    ) : (
      <div>
        {isResponsiveSize ? (
          <h1
            style={{ color: pagetitlecolor, fontFamily: AppFont }}
            className="text-center justify-center  text-3xl mt-16"
          >
            {pageHeader}
          </h1>
        ) : (
          <h1
            style={{ color: pagetitlecolor, fontFamily: AppFont }}
            className="text-center justify-center text-3xl mt-16"
          >
            {pageHeader}
          </h1>
        )}
      </div>
    )}
  </div>
);
