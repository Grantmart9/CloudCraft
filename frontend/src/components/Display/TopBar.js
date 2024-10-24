import React, { useState, useEffect, useCallback } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import { topbarbgcolor } from "./feutures";

export const TopBar = ({ setTopBarOn }) => {
  return (
    <AppBar
      position="fixed"
      elevation={1}
      sx={{
        backgroundColor: topbarbgcolor,
        opacity: "100%",
        maxHeight: "5rem",
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          marginLeft: "20pt",
        }} // Align items to the left
      >
        <IconButton
          size="large"
          aria-label="menu"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={setTopBarOn}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Container>
          <div className="text-gray-light text-center font-bold text-3xl mr-20">
            CloudCraft
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
