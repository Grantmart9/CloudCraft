import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Size } from "./media-query";

export const TextAnimation = () => {
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
          300,
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
