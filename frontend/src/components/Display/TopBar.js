import React, { useState, useEffect, useCallback } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import { topbarbgcolor } from "./feutures";

export const TopBar = ({ setTopBarOn }) => {
  const [y, setY] = useState(window.scrollY);

  const handleNavigation = useCallback(
    (e) => {
      const newY = window.scrollY;
      setTopBarOn(newY < y);
      setY(newY);
    },
    [y]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleNavigation);
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

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
          <div className="text-gray-light text-center font-bold text-3xl">CloudCraft</div>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
