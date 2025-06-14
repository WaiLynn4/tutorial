// app/components/DrawerNav.js
"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

const navItems = [
  { text: "Dashboard", href: "/dashboard" },
  { text: "Profile", href: "/profile" },
  { text: "Settings", href: "/setting" },
  { text: "Blog", href: "/blog" },
];

export default function DrawerNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const toggleDrawer = () => setOpen(!open);
  console.log("pathname", pathname);
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" onClick={toggleDrawer} color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">My App</Typography>
        </Toolbar>
      </AppBar>

      <Drawer open={open} onClose={toggleDrawer}>
        <List sx={{ width: 250 }}>
          {navItems.map(({ text, href }) => (
            <Link key={href} href={href} passHref>
              <ListItemButton
                selected={pathname === href}
                onClick={toggleDrawer}
              >
                <ListItemText primary={text} />
              </ListItemButton>
            </Link>
          ))}
        </List>
      </Drawer>
    </>
  );
}