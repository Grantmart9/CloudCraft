import React, { useState, useEffect, useCallback } from "react";
import Fade from "@mui/material/Fade";
import { Size } from "media-query";
import {
  cardbgcolor,
  textcolor,
  pagetitlecolor,
  cardtitlecolor,
  pagebgcolor,
  fontType,
} from "components/Display/feutures";

const topPageMax = 100;

export const Landing = () => {
  const [y, setY] = useState(window.scrollY);
  var size = Size();

  useEffect(() => {
    const handleScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="block h-auto">
      <Fade in={y < topPageMax} timeout={1000}>
        <h1
          style={{ color: pagetitlecolor, fontFamily: fontType }}
          className="text-center font-bold text-3xl mt-16 pt-2"
        >
          Home
        </h1>
      </Fade>
      <div className="flex text-center justify-center p-2">
        At CloudCraft, we are dedicated to delivering comprehensive web
        solutions that drive business success. Whether you’re looking to develop
        a new application, enhance an existing one, or migrate to the cloud, our
        skilled team is here to support you every step of the way. Let us help
        you transform your vision into reality and create digital experiences
        that resonate with your audience.
      </div>
    </div>
  );
};
