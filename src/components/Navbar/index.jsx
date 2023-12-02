import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import {
  Button,
  Container,
  ListItemText,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  //   const handleDrawerToggle = _ => setMobileOpen((prevState) => !prevState);
  function handleDrawerToggle() {
    setMobileOpen((prevState) => !prevState);
  }

  const drawer = (
    // toggle for small screen
    <Box
      onClick={() => handleDrawerToggle()}
      sx={{ textAlign: "center" }}
      // px={3}
    >
      <List>
        <ListItem>
          <ListItemText
            href="/Home"
            sx={{ color: "black", textDecoration: "none" }}
          >
            Home
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText
            href="/About"
            sx={{ color: "black", textDecoration: "none" }}
          >
            About
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText
            href="/Trails"
            sx={{ color: "black", textDecoration: "none" }}
          >
            Trails
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText
            href="/News"
            sx={{ color: "black", textDecoration: "none" }}
          >
            News
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText
            href="/Contact"
            sx={{ color: "black", textDecoration: "none" }}
          >
            Home
          </ListItemText>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
    <Box >
      <AppBar
        component="nav"
        sx={{ bgcolor: "rgb(13, 56, 94)", px: { md: "3em" } }}
      >
        
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <ListItemText
              variant="h6"
              component="div"
              sx={{
                display: { xs: "none", sm: "none", md: "block" },
                fontSize:'112px'

              }}
              href="/Home"
            >
                <ListItemText
                  href="/Home"
                  sx={{
                    display: { xs: "none", sm: "none", md: "block" },

                    textDecoration: "none",
                  }}
                >
                  JAMES'S CONSULTANCY
                </ListItemText>
            </ListItemText>
            <List
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "flex",
                  justifyContent: "space-between",
                  color: "white",
                },
              }}
            >
              <ListItem>
                  About
              </ListItem>
              <ListItem>
                <ListItemText href="/Trails" sx={{ textDecoration: "none" }}>
                  Projects
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText href="/News" sx={{ textDecoration: "none" }}>
                  Services
                </ListItemText>
              </ListItem>

              <ListItem>
                <ListItemText href="/News" sx={{ textDecoration: "none" }}>
                  Plans&Pricings
                </ListItemText>
              </ListItem>

              <ListItem>
                <ListItemText href="/News" sx={{ textDecoration: "none" }}>
                  Tools&Tips
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText href="/Contact" sx={{ textDecoration: "none" }}>
                  Contact
                </ListItemText>
              </ListItem>
            </List>
            <Button sx={{ display: "flex", color: "white", ml: "20px" }}>
              <AccountCircle sx={{ mr: 0.8, fontSize: "2.3em" }} /> LogIn
            </Button>
          </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box" },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Toolbar />
      </Box>
    </>
  );
};
export default Navbar;
