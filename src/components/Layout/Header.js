import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Logo from "../../images/namdevlogo2.png";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import Tooltip from "@mui/material/Tooltip";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";
import "../../styles/HeaderStyles.css";
import TemporaryDrawer from "./TemporaryDrawer"; 
import LoginDialog from "./LoginDialog";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  // hndle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleCartDrawerToggle = () => {
    setMobileOpen(false);
    setCartDrawerOpen(!cartDrawerOpen);
  };
  
  const handleLoginDialogOpen = () => {
    console.log("Yha tak aaya ya nhi pahle")
    setLoginDialogOpen(true);
    console.log("Yha tak aaya ya nhi")
  };

  const handleLoginDialogClose = () => {
    setLoginDialogOpen(false);
  };
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        <img src={Logo} alt="logo" height={"70"} width="200" />
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <NavLink activeClassName="active" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/menu"}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
      <PersonIcon
        sx={{
          color: "white",
          marginLeft: 2,
          "&:hover": {
            backgroundColor: "goldenrod",
            cursor: "pointer",
          },
        }}
        onClick={handleLoginDialogOpen}
      />
      <ShoppingCartIcon
        sx={{ color: "white", marginLeft: 2 }}
      />
    </Box>
  );
  return (
    <div>
      <Box>
        <AppBar
          component={"nav"}
          sx={{
            bgcolor: "black",
            display: "flex",
            justifyContent: "center",
            height: "100px",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: -16 }}
            >
              <img src={Logo} alt="logo" class="object-cover h-24 w-56 " />
            </Typography>
            <div className="flex justify-center" style={{ flex: 32 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                  <ul className="navigation-menu">
                    <li>
                      <NavLink activeClassName="active" to={"/"}>
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/menu"}>Menu</NavLink>
                    </li>
                    <li>
                      <NavLink to={"/about"}>About</NavLink>
                    </li>
                    <li>
                      <NavLink to={"/contact"}>Contact</NavLink>
                    </li>
                  </ul>
                </Box>
              </Box>
            </div>
            <Tooltip title="Sign in">
              <PersonIcon className="person-icon"   onClick={handleLoginDialogOpen} />
            </Tooltip>
            <Tooltip title="Cart">
              <ShoppingCartIcon
                sx={{ color: "white", marginLeft: 2 }}
                className="person-icon"
                onClick={handleCartDrawerToggle}
              />
            </Tooltip>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          {/* Conditionally render the LoginDialog */}
          {loginDialogOpen && (
            <LoginDialog
              selectedValue={false}
              open={loginDialogOpen}
              onClose={handleLoginDialogClose}
            />
          )}
        </Box>
        <Box component="nav">
          {/* Render the TemporaryDrawer component */}
          <TemporaryDrawer
            anchor="right"
            open={cartDrawerOpen}
            onClose={() => setCartDrawerOpen(false)}
            setCartDrawerOpen={setCartDrawerOpen}
          />
        </Box>
        <Box component="nav">
          {/* Render the TemporaryDrawer component */}
          
        </Box>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </div>
  );
};

export default Header;
