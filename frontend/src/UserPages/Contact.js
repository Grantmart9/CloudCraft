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

export const Contact = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [y, setY] = useState(window.scrollY);

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
          Contact
        </h1>
      </Fade>
      <div className="flex text-center justify-center p-2"> hello world</div>
    </div>
  );
};
