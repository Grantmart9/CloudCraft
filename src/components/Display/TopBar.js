import React, { useState, useEffect, useCallback } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { Size } from "./media-query";
import Container from "@mui/material/Container";
import Logo from "Images/capepointrigging.png";
import {
  layoutbgcolor,
  CompanyName,
  topbartextcolor,
  AppFont,
} from "./feutures";

export const TopBar = ({ setTopBarOn }) => {
  var size = Size();
  const isResponsiveSize = ["XS", "SM"].includes(size);
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "transparent",
      }}
    >
      {isResponsiveSize ? (
        <Toolbar disableGutters>
          <div style={{ marginLeft: "45px" }} className=" p-1">
            <img width={100} src={Logo} />
          </div>
          <Container></Container>
          <IconButton
            size="medium"
            style={{ marginRight: "45px" }}
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={setTopBarOn}
            color={topbartextcolor}
          >
            <MenuIcon
              style={{
                color: "whitesmoke",
              }}
            />
          </IconButton>
        </Toolbar>
      ) : (
        <Toolbar disableGutters>
          <IconButton
            size="medium"
            style={{ marginLeft: "80px" }}
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={setTopBarOn}
            color={topbartextcolor}
          >
            <MenuIcon
              style={{
                color: "whitesmoke",
              }}
            />
          </IconButton>
          <Container></Container>
          <div style={{ marginRight: "45px" }} className="p-1">
            <img width={150} src={Logo} />
          </div>
        </Toolbar>
      )}
    </AppBar>
  );
};
