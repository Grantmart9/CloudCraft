import React, { useEffect } from "react";
import Fade from "@mui/material/Fade";
import { Size } from "components/Display/media-query";
import Rigging from "Videos/Rigging.mp4";
import { AppFont, layoutbgcolor } from "components/Display/feutures";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { PageFooter } from "components/Display/PageFooter";
import { ServicesSub } from "Pages/SubPages/ServicesSub";
import { Enquire } from "./SubPages/Enquire";

const LandingContext = () => {
  return (
    <div>
      <CardContent
        className="flex text-center justify-center"
        style={{
          fontFamily: AppFont,
          color: "white",
          backgroundColor: layoutbgcolor,
          border: "none",
        }}
      >
        At Cape Point Rigging, we are passionate about providing a complete
        suite of high-quality rigging services to our clients. With decades of
        experience in the industry and a passion for sailing, we have become a
        trusted name for boat owners and boat builders in need of rigging
        solutions.
      </CardContent>
      <CardActions
        className="flex align-center justify-center"
        style={{
          fontFamily: AppFont,
          color: "white",
          backgroundColor: layoutbgcolor,
          border: "none",
        }}
      >
        <Button href="/AboutUs" sx={{ bgcolor: "GrayText", color: "whitesmoke" }}>
          Read more about Cape Point Rigging
        </Button>
      </CardActions>
    </div>
  );
};

export const Landing = ({ topBarOn }) => {
  var size = Size();
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
      <div>
        <video
          autoPlay
          muted
          loop
          style={{
            zIndex: 1,
            width: "100%",
          }}
          src={Rigging}
        />
      </div>
      <div
        style={{
          zIndex: 2,
          width: "100%",
        }}
      >
        <LandingContext />
        <ServicesSub />
      </div>
      <div
        style={{
          zIndex: 3,
          width: "100%",
        }}
      >
        <Enquire />
      </div>
      <div
        style={{
          zIndex: 4,
          width: "100%",
        }}
      >
        <PageFooter />
      </div>
    </div>
  );
};
