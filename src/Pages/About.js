import React, { useEffect } from "react";
import Fade from "@mui/material/Fade";
import { Size } from "components/Display/media-query";
import I1 from "Images/I2.jpg";
import I2 from "Images/I2.jpg";
import I3 from "Images/I3.jpeg";
import I4 from "Images/I4.jpg";
import I5 from "Images/I5.jpg";
import I6 from "Images/I6.jpg";
import I7 from "Images/I7.jpg";
import I8 from "Images/I8.jpg";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Routes } from "components/Routes";
import { RenderHeader } from "components/Display/PageHeader";
import { AppFont, contentbgcolor } from "components/Display/feutures";
import { PageFooter } from "components/Display/PageFooter";
import { AboutUsMain } from "./SubPages/AboutUs";

const itemData = [
  {
    img: I1,
    title: "Kitchen",
  },
  {
    img: I2,
    title: "Blinds",
  },
  {
    img: I3,
    title: "Laptop",
  },
  {
    img: I4,
    title: "Doors",
  },
  {
    img: I5,
    title: "Storage",
  },
  {
    img: I6,
    title: "Candle",
  },
  {
    img: I7,
    title: "Coffee table",
  },
  {
    img: I8,
    title: "Coffee table",
  },
];

const GalleryContext = () => {
  var size = Size();
  const isResponsiveSize = ["XS", "SM", "MD"].includes(size);
  return (
    <Box>
      <ImageList variant="masonry" cols={isResponsiveSize ? 2 : 3} gap={2}>
        {itemData.map((item) => (
          <ImageListItem
            style={{ backgroundColor: contentbgcolor }}
            className="p-1"
            key={item.img}
          >
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="eager"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export const About = ({ topBarOn }) => {
  const size = Size();
  const isResponsiveSize = ["XS", "SM", "MD", "L"].includes(size);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const RenderGallery = () => (
    <Fade in={true} timeout={2500}>
      <div>
        {topBarOn ? (
          <div>
            {isResponsiveSize ? (
              <div
                style={{
                  opacity: "100%",
                }}
              >
                <GalleryContext />
              </div>
            ) : (
              <div
                style={{
                  opacity: "100%",
                  margin: "0",
                }}
              >
                <GalleryContext />
              </div>
            )}
          </div>
        ) : (
          <div>
            {isResponsiveSize ? (
              <div
                style={{
                  opacity: "100%",
                  margin: "0",
                }}
              >
                <GalleryContext />
              </div>
            ) : (
              <div
                style={{
                  opacity: "100%",
                  margin: "0",
                }}
              >
                <GalleryContext />
              </div>
            )}
          </div>
        )}
      </div>
    </Fade>
  );

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
          backgroundColor: "black",
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
