import { Stack, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <Stack bgcolor="primary.main">
        <Typography textAlign="center" variant="body2" color="#fff" my={3}>
          &copy;ShoppingCart All Rights Reserved
        </Typography>
      </Stack>
    </>
  );
};

export default Footer;
