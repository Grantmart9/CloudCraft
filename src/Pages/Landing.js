import React, { useEffect } from "react";
import { Size } from "components/Display/media-query";
import Rigging from "Videos/Rigging.mp4";
import {
  AppFont,
  ButtonStyle,
  CompanyName,
  layoutbgcolor,
  textcolor,
} from "components/Display/AppControl";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { PageFooter } from "components/Display/PageFooter";
import { ServicesSub } from "Pages/SubPages/ServicesSub";
import { Enquire } from "./SubPages/Enquire";
import { TypeAnimation } from "react-type-animation";

const LandingContext = () => {
  const TextAnimation = () => {
    const size = Size();
    const isResponsiveSize = ["XS", "SM", "MD"].includes(size);
    return (
      <>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Welcome ",
            200, // wait 1s before replacing "Mice" with "Hamsters"
            "Welcome to ",
            300,
            "Welcome to Cloudcraft - ",
            300,
            "Welcome to Cloudcraft - Innovating ",
            400,
            "Welcome to Cloudcraft - Innovating the ",
            30,
            "Welcome to Cloudcraft - Innovating the Future",
            400,
            "Welcome to Cloudcraft - Innovating the Future of",
            300,
            "Welcome to Cloudcraft - Innovating the Future of Development",
            400,
          ]}
          wrapper="span"
          speed={50}
          style={{
            fontSize: isResponsiveSize ? "1rem" : "1.5rem",
            display: "inline-block",
          }}
          repeat={Infinity}
        />
      </>
    );
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: layoutbgcolor,
          color: textcolor,
        }}
        className="text-lg text-center justify-center pt-3"
      >
        <TextAnimation />
      </div>
      <CardContent
        style={{
          fontFamily: AppFont,
          color: textcolor,
          backgroundColor: layoutbgcolor,
          border: "none",
        }}
      >
        <div className="text-center justify-center">
          At Cloudcraft, we are dedicated to transforming ideas into reality
          through cutting-edge technology and innovative development solutions.
          With a team of experienced professionals, we specialize in delivering
          tailored software applications and web solutions that drive growth and
          enhance user experiences.
        </div>
        <div className="text-center justify-center mt-3">
          Our commitment to quality, creativity, and collaboration ensures that
          each project is handled with the utmost care, resulting in products
          that not only meet but exceed your expectations. Whether you are a
          startup looking to establish your online presence or an established
          enterprise seeking to modernize your systems, we are here to partner
          with you every step of the way.
        </div>
        <div className="text-center justify-center mt-3">
          Explore our services, view our portfolio, and discover how Cloudcraft
          can help you achieve your goals and stay ahead in today’s fast-paced
          digital world.
        </div>
      </CardContent>
      <CardActions
        className="flex align-center justify-center"
        style={{
          fontFamily: AppFont,
          color: textcolor,
          backgroundColor: layoutbgcolor,
          border: "none",
        }}
      >
        <Button href="/AboutUs" sx={ButtonStyle}>
          Read more about {CompanyName}
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
