import React, { useState } from "react";
import { TopBar } from "components/Display/TopBar";
import { ScreenLayoutInner } from "./ScreenLayoutInner";
import { SideBar } from "./SideBar";
import { Slide } from "@mui/material";
import { Size } from "media-query";

export const ScreenLayout = () => {
  const [topBarOn, setTopBarOn] = useState(true);
  var size = Size();

  const toggleTopBar = () => {
    setTopBarOn(!topBarOn);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <TopBar setTopBarOn={toggleTopBar} />
      {topBarOn ? (
        <div>
          {size == "XS" || size == "SM" || size == "MD" ? (
            <div className="block">
              <Slide in={topBarOn} timeout={1200} direction="down">
                <div
                  style={{
                    backgroundColor: "#406885",
                    paddingBottom: "20pt",
                  }}
                >
                  <SideBar setTopBarOn={toggleTopBar} />
                </div>
              </Slide>
              <div>
                <ScreenLayoutInner />
              </div>
            </div>
          ) : (
            <div style={{ display: "flex", flexGrow: 1 }}>
              <Slide in={topBarOn} timeout={1200} direction="right">
                <div
                  style={{
                    position: "fixed", // Fix the sidebar
                    top: "1rem", // Position below the TopBar
                    left: 0,
                    width: "200px",
                    backgroundColor: "#406885",
                    height: "calc(100vh - 1rem)", // Full height minus TopBar height
                    overflowY: "auto", // Enable scrolling if needed
                  }}
                >
                  <SideBar setTopBarOn={toggleTopBar} />
                </div>
              </Slide>
              <div
                style={{
                  marginLeft: "200px", // Leave space for the fixed sidebar
                  flex: "1",
                  height: "100%", // Full height
                  overflowY: "auto", // Enable scrolling if needed
                }}
              >
                <ScreenLayoutInner />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>
          <ScreenLayoutInner />
        </div>
      )}
    </div>
  );
};
