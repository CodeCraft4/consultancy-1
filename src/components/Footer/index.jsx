import { ArrowRightAlt, Facebook, Instagram, Twitter, WhatsApp } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
 
  Typography,
} from "@mui/material";
import WhatsAppCom from "components/WhatsAppCom";
import React from "react";

const Footer = () => {
  return (
    <Box
      bgcolor={"rgb(2, 39, 72)"}
      color={"white"}
      pb={{ md: "4em", xs: "1em" }}
    >
      <Container maxWidth="lg">
        <Grid container py={6} px={"1em"}>
          <Grid item md={3} sm={6}>
            <Typography fontSize={"1.1em"} pb={2} mt={{ md: 0, xs: 3 }}>
              ABOUT US
            </Typography>
            <Typography>__</Typography>
            <Typography width={"200px"} fontSize={"14px"} mt={2}>
              Source Fellow Is A China Based Sourcing Company Providing Various
              Efficient Services For Elevating Your Sell And Purchase Margins.
            </Typography>
          </Grid>
          <Grid item md={3} sm={6}>
            <Typography
              fontSize={"1.2em"}
              pb={2}
              // ml={{ md: 2 }}
              mt={{ md: 0, xs: 3 }}
            >
              SERVICES
            </Typography>
            <Typography>__</Typography>

            <List sx={{ ml: -2 }}>
              <ListItem>
                <ArrowRightAlt sx={{mr:1}} /> Product Sourcing
              </ListItem>
              <ListItem>
                <ArrowRightAlt sx={{mr:1}} />
                Price Negotiation
              </ListItem>
              <ListItem>
                <ArrowRightAlt sx={{mr:1}} />
                Sample Evaluation
              </ListItem>
              <ListItem>
                <ArrowRightAlt sx={{mr:1}} />
                Sample Consolidation
              </ListItem>
              <ListItem>
                <ArrowRightAlt sx={{mr:1}} />
                Product Inspection
              </ListItem>
              <ListItem>
                <ArrowRightAlt sx={{mr:1}} />
                Supply Chain Management
              </ListItem>
              <ListItem>
                <ArrowRightAlt sx={{mr:1}} />
                Freight Forwarding
              </ListItem>
              <ListItem>
                <ArrowRightAlt sx={{mr:1}} />
                Trademark in China
              </ListItem>
            </List>
          </Grid>
          <Grid item md={3} sm={6}>
            <Typography
              fontSize={"1.2em"}
              pb={2}
              ml={{ md: 2 }}
              mt={{ md: 0, xs: 3 }}
            >
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
          <Grid item md={3} sm={6} pr={{ md: 5 }}>
            <Typography fontSize={"1.2em"} pb={2} mt={{ md: 0, xs: 3 }}>
              CONNECT
            </Typography>
            <Typography>__</Typography>

            <Box mt={2}>
              <Facebook sx={{ mr: 1 }} />
              <Twitter sx={{ mr: 1 }}/>
              <Instagram sx={{ mr: 1 }}/>
            </Box>
            <Typography fontSize={"14px"} mt={6}>
              © 2035 by Shah Faisal. Powered and secured by Wix
            </Typography>
          </Grid>
        </Grid>
      </Container>
      {/* <WhatsAppCom/> */}
    </Box>
  );
};

export default Footer;
