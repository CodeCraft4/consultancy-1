import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { SERVICES } from "constants/contents";
import React from "react";

const WorkingProcess = () => {
  return (
    <Box>
      <Typography
        textAlign={"center"}
        py={6}
        color={"rgb(98, 98, 98)"}
        fontSize={{ md: "2.6em" }}
      >
        REAL-TIME ACTIONABLE ANALYTICS
      </Typography>
      <Box position={"relative"} bgcolor={"rgb(2, 5, 20)"} color={"white"}>
        <img
          src="https://images.pexels.com/photos/449559/pexels-photo-449559.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
          style={{
            position: "relative",
            width: "100%",
            opacity: ".3",
            height: "960px",
          }}
        />
        <Box
          // textAlign={"center"}
          width={"100%"}
          margin={"auto"}
          py={{ md: "4em", xs: "10px" }}
          position={"absolute"}
          top={20}
        >
          <Container maxWidth="lg">
            <Box margin={"auto"}>
              <Typography
                pt={{ md: 2, xs: 3 }}
                fontSize={{ md: "1.4em" }}
                fontWeight={400}
              >
                OPTIMUM SOURCING SERVICES FOR YOUR BUSINESS
              </Typography>
              <Typography fontSize={{ md: "3em" }} fontWeight={300}>
                Our Working Process
              </Typography>

              <Grid container columnSpacing={3} sx={{ py: { md: 10 } }}>
                {SERVICES.map((item) => (
                  <Grid item md={3}>
                    <Box
                      borderRadius={3}
                      p={"15px 20px"}
                      bgcolor={"white"}
                      color={"black"}
                      display={"flex"}
                      flexDirection={"column"}
                      alignItems={"center"}
                      height={550}
                    >
                      <img
                        style={{
                          borderRadius: "10px",
                          opacity: ".9",
                          ":hover": { opacity: "1" },
                        }}
                        src={item.poster}
                        alt="Servise poster"
                        width={"100%"}
                        height={"180px"}
                      />
                      <Typography py={2} fontSize={"1.3em"} fontWeight={500}>
                        {item.title}
                      </Typography>
                      <Typography
                        py={2}
                        fontSize={"14px"}
                        color={"rgb(98, 98, 98)"}
                        borderBottom={"1px solid gray"}
                      >
                        {item.description}
                      </Typography>
                      <Button
                        sx={{
                          p: "1em 3em",
                          border: "1px solid black",
                          mt: { md: "3em", xs: "3em" },

                          "&:hover": {
                            backgroundColor: "rgb(13, 56, 94)",
                            color: "white",
                          },
                        }}
                      >
                        Learn More
                      </Button>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default WorkingProcess;
