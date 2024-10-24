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
      <div className="flex text-center justify-center p-2">
        Environmental security focuses on safeguarding the natural environment
        to ensure a healthy, sustainable quality of life for current and future
        generations. It involves protecting ecosystems, ensuring access to clean
        air, water, and soil, and mitigating the impacts of climate change and
        pollution. By promoting sustainable practices, effective waste
        management, and conservation efforts, environmental security aims to
        prevent environmental degradation and enhance resilience against natural
        disasters. This holistic approach ensures that communities can thrive in
        a safe and stable environment, supporting both ecological balance and
        human well-being.
      </div>
    </div>
  );
};
