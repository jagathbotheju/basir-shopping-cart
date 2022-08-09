import { Container, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";

const HomePage = () => {
  const { products } = useSelector((state) => state.product);

  return (
    <>
      <Container sx={{ mb: 10 }}>
        <Typography mt={4} variant="h5">
          Products
        </Typography>
        <Stack
          direction={{ xs: "column-reverse", sm: "row" }}
          width="100%"
          alignItems="space-between"
          gap={2}
          my={2}
        >
          <Stack bgcolor="grey.100">
            <Grid container gap={2}>
              {products.map((product) => (
                <ProductItem key={product._id} product={product} />
              ))}
            </Grid>
          </Stack>
          <Stack width="30%" bgcolor="grey.300">
            <Typography>CART</Typography>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default HomePage;
