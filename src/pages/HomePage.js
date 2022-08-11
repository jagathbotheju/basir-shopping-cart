import { Container, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Filter from "../components/Filter";
import ProductItem from "../components/ProductItem";

const HomePage = () => {
  const { products, sizeFilter, sortFilter } = useSelector(
    (state) => state.product
  );
  const [filteredProducts, setFilteredProducts] = useState([]);

  //console.log(sizeFilter, sortFilter);

  useEffect(() => {
    let fproducts;
    if (!filteredProducts.length === 0) {
      fproducts = filteredProducts.filter((product) => {
        if (sizeFilter === "ALL") return products;
        else return product.availableSizes.includes(sizeFilter);
      });
    } else {
      fproducts = products.filter((product) => {
        if (sizeFilter === "ALL") return products;
        else return product.availableSizes.includes(sizeFilter);
      });
    }
    setFilteredProducts(fproducts);
  }, [sizeFilter]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    let sproducts;
    console.log(filteredProducts);
    if (filteredProducts.length === 0) {
      sproducts = products.slice().sort((a, b) => {
        return sortFilter === "lowest"
          ? a.price > b.price
            ? 1
            : -1
          : sortFilter === "highest"
          ? a.price < b.price
            ? 1
            : -1
          : a._id > b._id
          ? 1
          : -1;
      });
    } else {
      sproducts = filteredProducts.slice().sort((a, b) => {
        return sortFilter === "lowest"
          ? a.price > b.price
            ? 1
            : -1
          : sortFilter === "highest"
          ? a.price < b.price
            ? 1
            : -1
          : a._id > b._id
          ? 1
          : -1;
      });
    }
    console.log(sproducts);
    setFilteredProducts(sproducts);
  }, [sortFilter]); // eslint-disable-line react-hooks/exhaustive-deps

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
          <Stack width="70%">
            <Filter productsCount={filteredProducts.length} />
            {filteredProducts.length === 0 ? (
              <Container sx={{ mt: 20 }}>
                <Typography textAlign="center" variant="h4">
                  No Products Found
                </Typography>
              </Container>
            ) : (
              <Grid container gap={2}>
                {filteredProducts.map((product) => (
                  <ProductItem key={product._id} product={product} />
                ))}
              </Grid>
            )}
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
