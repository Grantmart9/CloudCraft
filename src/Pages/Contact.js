import React, { useEffect } from "react";
import { Size } from "components/Display/media-query";
import { ContactUsMain } from "./SubPages/ContactUs";
import { Enquire } from "./SubPages/Enquire";
import { layoutbgcolor } from "components/Display/AppStyleControl";
import Rigging from "Videos/Rigging.mp4";
import ContactImage from "Images/icon.png";
import { SocialMediaIcons } from "components/Display/SocialMedia";

export const Contact = ({ topBarOn }) => {
  const size = Size();
  const isResponsiveSize = ["XS", "SM", "MD", "L"].includes(size);
  // const [y, setY] = useState(window.scrollY);

  // useEffect(() => {
  //   const handleScroll = () => setY(window.scrollY);
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventLitener("scroll", handleScroll);
  // }, []);

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
        paddingTop: topBarOn
          ? isResponsiveSize
            ? "10pt"
            : "0pt"
          : isResponsiveSize
          ? "0pt"
          : "0pt",
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
          zIndex: 3,
          width: "100%",
        }}
        className="grid md:grid-cols-2 gap-0"
      >
        <div>
          <Enquire />
        </div>
        <div
          className="grid grid-flow-row gap-0"
          style={{ backgroundColor: layoutbgcolor }}
        >
          <ContactUsMain
            topBarOn={topBarOn}
            isResponsiveSize={isResponsiveSize}
          />
          <div className="flex align-center justify-center">
            <img src={ContactImage} width={"45%"} />
          </div>
          <div className="py-4">
            <SocialMediaIcons />
          </div>
        </div>
      </div>
    </div>
  );
};
