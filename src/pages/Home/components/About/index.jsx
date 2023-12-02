import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box
   position={"relative"}
    >
      <img
        src="https://c4.wallpaperflare.com/wallpaper/953/464/984/winter-snow-house-trees-nature-forest-mountains-sky-white-wallpaper-preview.jpg"
        alt=""
        style={{position:"relative",width:"100%",opacity:".3",height:"780px"}}
      />
        <Box
          textAlign={"center"}
          width={"100%"}
          margin={"auto"}
          py={{md:"4em",xs:"10px"}}
          position={"absolute"}
          top={40}

        >
      <Container maxWidth="md">
        <Box width={{md:"70%",xs:"100%"}} margin={"auto"}>
          <Typography py={{md:3}} fontSize={30}>
            ABOUT US
          </Typography>
          <Typography py={{md:5,xs:3}}>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. Feel free to drag and drop me
            anywhere you like on your page. I’m a great place for you to tell a
            story and let your users know a little more about you.
          </Typography>
          <Typography>
            This is a great space to write a long text about your company and
            your services. You can use this space to go into a little more
            detail about your company. Talk about your team and what services
            you provide. Tell your visitors the story of how you came up with
            the idea for your business and what makes you different from your
            competitors. Make your company stand out and show your visitors who
            you are.
          </Typography>
          <Button
            sx={{
              p: "1em 3em",
              color: "black",
              border: "1px solid black",
              mt: {md:"5em",xs:"3em"},

              "&:hover": {
                backgroundColor: "rgb(13, 56, 94)",
                color: "white",
              },
            }}
          >
            Learn More
          </Button>
          </Box>
      </Container>
        </Box>
    </Box>
  );
};

export default About;
