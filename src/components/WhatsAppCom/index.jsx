import { WhatsApp } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import React from "react";

const WhatsAppCom = () => {
  return (
    <Box sx={{ position: "sticky", width: "100px", bottom: 20, left:"100%"  }}>
      <Button >
        <WhatsApp sx={{ color: "#00a152", fontSize: "4em" }} />
      </Button>
    </Box>
  );
};

export default WhatsAppCom;
