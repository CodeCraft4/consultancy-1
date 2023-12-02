import { Facebook, Twitter } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box bgcolor={"rgb(2, 39, 72)"} color={"white"} pb={{md:"4em",xs:"1em"}}>
      <Container maxWidth="lg">
        <Grid container py={6}  px={"1em"}>
          <Grid item md={6}>
            <Typography fontSize={"1.1em"} pb={2} mt={{md:0,xs:3}}>
              JAMES CONSULTING
            </Typography>
            <Typography width={"200px"} fontSize={"14px"} mt={2}>
              500 Terry Francine Street, San Francisco, CA 94158 Mail:
              info@mysite.com Tel: 123-456-7890
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Typography fontSize={"1.2em"} pb={2} ml={{md:2}} mt={{md:0,xs:3}}>
              MENU
            </Typography>
            <List>
              <ListItem>About</ListItem>
              <ListItem>Projects</ListItem>
              <ListItem>Services</ListItem>
              <ListItem>Plan & pricing</ListItem>
              <ListItem>Tools & Tips</ListItem>
              <ListItem>Contact</ListItem>
            </List>
          </Grid>
          <Grid item md={3} pr={{md:5}}>
            <Typography fontSize={"1.2em"} pb={2} mt={{md:0,xs:3}}>
              SOCIALS
            </Typography>
            <Box mt={2}>
              <Facebook sx={{ mr: 1 }} />
              <Twitter />
            </Box>
            <Typography  fontSize={"14px"} mt={6}>
              © 2035 by JAMES CONSULTING. Powered and secured by Wix
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
