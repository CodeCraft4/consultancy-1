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

  Link,
  ListItemText,
} from "@mui/material";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  //   const handleDrawerToggle = _ => setMobileOpen((prevState) => !prevState);
  function handleDrawerToggle() {
    setMobileOpen((prevState) => !prevState);
  }

  const drawerWidth = 200;

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
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <ListItemText
              variant="h6"
              component="div"
              sx={{
                display: { xs: "none", sm: "none", md: "block" },
                fontSize: '112px'

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
                <img width={100} height={50} src="https://sourcefellow.com/wp-content/uploads/2021/12/FinalSFLogo-removebg-preview.png" alt="Brand Logo" />
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
                <Link href="#about" sx={{ textDecoration: "none", color: "white", fontFamily: "sans-serif" }}>
                  About
                </Link>
              </ListItem>
             
              <ListItem>

                <Link href="#services" sx={{ textDecoration: "none", color: "white", fontFamily: "sans-serif" }}>
                  Services
                </Link>
              </ListItem>

              <ListItem>
                <ListItemText href="/News" sx={{ textDecoration: "none" }}>
                  Plans&Pricings
                </ListItemText>
              </ListItem>

              <ListItem>
              <Link href="#work" sx={{ textDecoration: "none", color: "white", fontFamily: "sans-serif" }}>
                  OurWork
                </Link>
              </ListItem>
              <ListItem>
                <ListItemText href="/Contact" sx={{ textDecoration: "none" }}>
                  Contact
                </ListItemText>
              </ListItem>
            </List>

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
              display: { xs: "block", sm: "block" },

              "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
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
