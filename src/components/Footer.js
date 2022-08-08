import { Stack, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <Stack
        bgcolor="primary.main"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <Typography textAlign="center" variant="body2" color="#fff" my={3}>
          &copy;ShoppingCart All Rights Reserved
        </Typography>
      </Stack>
    </>
  );
};

export default Footer;