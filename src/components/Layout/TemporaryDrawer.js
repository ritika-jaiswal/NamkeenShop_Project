// TemporaryDrawer.js
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function TemporaryDrawer({
  anchor,
  open,
  onClose,
  setCartDrawerOpen,
}) {
  const list = () => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 350 }}
      role="presentation"
      onClick={() => {
        setCartDrawerOpen(false);
        onClose();
      }}
      onKeyDown={() => {
        setCartDrawerOpen(false);
        onClose();
      }}
    >
       <List>
        <div className="flex justify-between items-center">
          <div className="flex justify-start">Your Cart</div>
          <div className="cursor-pointer" onClick={() => {setCartDrawerOpen(false); onClose();}}><CloseIcon /></div>
        </div>
      </List>
      <Divider />
      <List>
        <div className="flex justify-center items-center mt-20">
          <ShoppingCartIcon />
        </div>
        <div className="flex justify-center items-center">Your Cart is empty!</div>
        <div className="flex justify-center items-center">It looks like you haven't added any items to </div>
        <div className="flex justify-center items-center">your cart yet.</div>
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer anchor={anchor} open={open} onClose={onClose}>
        {list()}
      </Drawer>
    </div>
  );
}
