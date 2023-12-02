import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { SUMMARY, SERVICES } from "constants/contents";
import React from "react";

const Summary = () => {
  return (
    <Box py={{ md: "6em" }}>
      <Typography textAlign={"center"} fontSize={{ md: "2.5em" }} pb={7}>
        SERVICES
      </Typography>
      <Container maxWidth="md">
        <Grid container spacing={6}>
          {SUMMARY.map((i) => (
            <Grid item md={4} sx={{ textAlign: "center" }}>
              <Typography fontSize={"1.5em"}>{i.title}</Typography>
              <Typography fontSize={"14px"} py={3}>
                {i.description}
              </Typography>
              <Button
                sx={{
                  p: ".9em 3em",
                  color: "black",
                  border: "1px solid black",
                  mt: "2em",

                  "&:hover": {
                    backgroundColor: "rgb(13, 56, 94)",
                    color: "white",
                  },
                }}
              >
                More Info
              </Button>
            </Grid>
          ))}
          <Grid container spacing={6} pt={"5em"}>
            {SERVICES.map((i) => (
              <Grid item md={6} sx={{ textAlign: "center" }}>
                <Typography fontSize={"1.5em"}>{i.title}</Typography>
                <Typography fontSize={"14px"} py={3}>
                  {i.description}
                </Typography>
                <Button
                  sx={{
                    p: ".9em 3em",
                    color: "black",
                    border: "1px solid black",
                    mt:{md: "2em"},
                    mb:{md:0,xs:"1em"},
                    "&:hover": {
                      backgroundColor: "rgb(13, 56, 94)",
                      color: "white",
                    },
                  }}
                >
                  More Info
                </Button>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Summary;
