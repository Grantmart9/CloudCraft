import React, { useState } from "react";
import { TopBar } from "components/Display/TopBar";
import { ScreenLayoutInner } from "./ScreenLayoutInner";
import { SideBar } from "./SideBar";
import { Slide } from "@mui/material";
import { Size } from "media-query";

export const ScreenLayout = () => {
  const [topBarOn, setTopBarOn] = useState(true);
  const size = Size();

  const toggleTopBar = () => {
    setTopBarOn(prev => !prev);
  };

  const isResponsiveSize = ["XS", "SM", "MD"].includes(size);
  
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", backgroundColor: "#f0f0f0" }}>
      <TopBar setTopBarOn={toggleTopBar} />
      {topBarOn && (
        <div style={{ display: "flex", flexGrow: 1 }}>
          {isResponsiveSize ? (
            <div>
              <Slide in={topBarOn} timeout={1200} direction="down">
                <div style={{ backgroundColor: "#406885", paddingBottom: "20pt" }}>
                  <SideBar setTopBarOn={toggleTopBar} />
                </div>
              </Slide>
              <ScreenLayoutInner />
            </div>
          ) : (
            <>
              <Slide in={topBarOn} timeout={1200} direction="right">
                <div
                  style={{
                    position: "fixed",
                    top: "1rem",
                    left: 0,
                    width: "200px",
                    backgroundColor: "#406885",
                    height: "calc(100vh - 1rem)",
                    overflowY: "auto",
                  }}
                >
                  <SideBar setTopBarOn={toggleTopBar} />
                </div>
              </Slide>
              <div style={{ marginLeft: "200px", flex: "1", height: "100%", overflowY: "auto" }}>
                <ScreenLayoutInner />
              </div>
            </>
          )}
        </div>
      )}
      {!topBarOn && <ScreenLayoutInner />}
    </div>
  );
};
