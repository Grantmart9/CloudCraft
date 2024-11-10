import React, { useEffect } from "react";
import { Size } from "components/Display/media-query";
import { Routes } from "components/Routes";
import { RenderHeader } from "components/Display/PageHeader";
import { layoutbgcolor } from "components/Display/AppStyleControl";
import { PageFooter } from "components/Display/PageFooter";
import { AboutUsMain } from "./SubPages/AboutUs";

export const About = ({ topBarOn }) => {
  const size = Size();
  const isResponsiveSize = ["XS", "SM", "MD", "L"].includes(size);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div
      className="block"
      style={{
        width: topBarOn
          ? isResponsiveSize
            ? "calc(100vw)"
            : "calc(100vw - 200px)"
          : isResponsiveSize
          ? "calc(100vw)"
          : "calc(100vw)",
      }}
    >
      <div
        style={{
          backgroundColor: layoutbgcolor,
          margin: 0,
          padding: 0,
          overflowX: "hidden",
          overflowY: "hidden",
        }}
      >
        <RenderHeader
          pageHeader={Routes[1].pageHeader}
          topBarOn={topBarOn}
          isResponsiveSize={isResponsiveSize}
        />
        <div>
          <AboutUsMain
            topBarOn={topBarOn}
            isResponsiveSize={isResponsiveSize}
          />
        </div>
      </div>
      <div>
        <PageFooter />
      </div>
    </div>
  );
};
