import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Grid,
  Input,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const Contact = () => {
  return (
    <Box bgcolor={"rgb(13, 56, 94)"} color={"white"} py={{md:"4em",xs:"2em"}}>
      <Typography
        textAlign={"center"}
        fontSize={{ md: "3em",xs:"2em" }}
        fontWeight={300}
        m
      >
        Contact
      </Typography>
      <Container maxWidth={"md"}>
        <Grid container spacing={5} py={{md:8,xs:5}}>
          <Grid item md={6}>
            <FormControl sx={{ width: "100%" }}>
              <FormLabel sx={{ color: "white" }}>First Name</FormLabel>
              <Input fullWidth sx={{ borderBottom: "1px solid White" }} />
            </FormControl>
          </Grid>
          <Grid item md={6}>
            <FormControl sx={{ width: "100%" }}>
              <FormLabel sx={{ color: "white" }}>First Name</FormLabel>
              <Input fullWidth sx={{ borderBottom: "1px solid White" }} />
            </FormControl>
          </Grid>
          <Grid item md={6}>
            <FormControl sx={{ width: "100%" }}>
              <FormLabel sx={{ color: "white" }}>First Name</FormLabel>
              <Input fullWidth sx={{ borderBottom: "1px solid White" }} />
            </FormControl>
          </Grid>
          <Grid item md={6}>
            <FormControl sx={{ width: "100%" }}>
              <FormLabel sx={{ color: "white" }}>First Name</FormLabel>
              <Input fullWidth sx={{ borderBottom: "1px solid White" }} />
            </FormControl>
          </Grid>
          <Grid item md={9} xs={12}>
            <Box>
              <InputLabel sx={{ color: "white", fontSize: "12px" }}>
                {" "}
                Message*
              </InputLabel>
              <Input
                multiline
                fullWidth
                sx={{
                  borderBottom: "1px solid White",
                  mt: "9px",
                  color: "white",
                }}
              />
            </Box>
          </Grid>

          <Grid item md={3} xs={12}>
            <Input
              type="submit"
              fullWidth
              sx={{
                borderBottom: "none",

                p: ".8em",
                bgcolor: "white",
                color: "black",
                border: "1px solid white",
                "&:Hover": {
                  color: "white",
                  bgcolor: "rgb(13, 56, 94)",
                },
              }}
            />
          </Grid>
        </Grid>
      
      </Container>
    </Box>
  );
};

export default Contact;
