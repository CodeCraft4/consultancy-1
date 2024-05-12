import { Box, Button, Container, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box 
    id="about"
    height={{ md: "560px", sm: "500px", xs: "450px" }} position={"relative"}>
      <img
        src="https://images.pexels.com/photos/257636/pexels-photo-257636.jpeg?auto=compress&cs=tinysrgb&w=800"
        alt="Snow wall Paper"
        width={"100%"}
        style={{ position: "relative", height: "100%" }}
      />
      <Box position={{ md: "absolute", xs: "absolute" }} bottom={0} width={"100%"}>
        <Container maxWidth="md" sx={{ bgcolor: "white" }}>
          <Box textAlign={"center"} p={1} pt={4}>
            <Typography fontSize={"1.4em"}>
              Developing Innovative Strategies
            </Typography>

            <Typography
              fontSize={{ md: "4em", sm: "2em", xs: "1.3em" }}
              pb={4}
              fontWeight={100}
            >
              ACHIEVING GROWTH
            </Typography>
            <Button
              sx={{
                p: ".9em 2.5em",
                color: "black",
                border: "1px solid black",
                mb: 3,
                "&:hover": {
                  backgroundColor: "rgb(13, 56, 94)",
                  color: "white",
                },
              }}
            >
              Book A Consultation
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Header;
