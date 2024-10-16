import React, { useState, useEffect, useCallback } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Fade from "@mui/material/Fade";

const pages = ["HOME", "REPORT", "QOL"];

export const TopBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [TopBarOn, setTopBarOn] = useState(false);
  const [TopBarOff, setTopBarOff] = useState(false);
  const [y, setY] = useState(window.scrollY);

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setTopBarOn(false);
        setTopBarOff(true);
      } else if (y < window.scrollY) {
        setTopBarOn(true);
        setTopBarOff(false);
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      {TopBarOn ? (
        <div>
          <AppBar
            position="fixed"
            elevation={1}
            sx={{
              backgroundColor: "#1f1e1b",
              opacity: "100%",
              maxHeight: "5rem",
            }}
          >
            <Container maxWidth="false">
              <Toolbar disableGutters>
                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    <div className="grid grid-flow-rown gap-3">
                      {pages.map((page) => (
                        <a className="p-2" href={page}>
                          <div className="text-center justify-center">
                            {page}
                          </div>
                        </a>
                      ))}
                    </div>
                  </Menu>
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  <div className="grid grid-flow-col gap-1 mx-auto">
                    {pages.map((page) => (
                      <Fade in={true} timeout={1200}>
                        <a
                          className="p-2"
                          maxHeight="30pt"
                          sx={{ my: 2, color: "black", display: "block" }}
                          href={page}
                        >
                          <div className="text-center justify-center">
                            {page}
                          </div>
                        </a>
                      </Fade>
                    ))}
                  </div>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </div>
      ) : (
        <Fade in={true} timeout={1200}>
          <AppBar
            position="fixed"
            elevation={1}
            sx={{
              backgroundColor: "#969693",
              opacity: "100%",
              maxHeight: "5rem",
            }}
          >
            <Container>
              <Toolbar disableGutters>
                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    <div className="grid grid-flow-row gap-1 w-28">
                      {pages.map((page) => (
                        <a
                          className="p-2"
                          sx={{ my: 2, color: "black", display: "block" }}
                          href={page}
                        >
                          <div className="text-center justify-center">
                            {page}
                          </div>
                        </a>
                      ))}
                    </div>
                  </Menu>
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  <div className="grid grid-flow-col gap-3 mx-auto">
                    {pages.map((page) => (
                      <Fade in={true} timeout={1200}>
                        <a
                          className="p-2"
                          maxHeight="30pt"
                          sx={{ my: 2, color: "black", display: "block" }}
                          href={page}
                        >
                          <div className="text-center justify-center">
                            {page}
                          </div>
                        </a>
                      </Fade>
                    ))}
                  </div>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </Fade>
      )}
    </>
  );
};
