import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSizeFilter, setSortFilter } from "../redux/features/productSlice";

const Filter = ({ productsCount }) => {
  const dispatch = useDispatch();
  const [order, setOrder] = useState("");
  const [size, setSize] = useState("");

  const handleFilterBySize = (size) => {
    setSize(size);
    dispatch(setSizeFilter(size));
  };

  const handleSortOrder = (order) => {
    setOrder(order);
    dispatch(setSortFilter(order));
  };

  return (
    <>
      <Stack
        mb={3}
        p={1}
        direction="row"
        bgcolor="grey.200"
        //justifyContent="space-between"
        gap={5}
        alignItems="center"
      >
        <Typography variant="h6">Products {productsCount}</Typography>

        {/* order */}
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth variant="standard" size="small">
            <InputLabel id="order-select">Order</InputLabel>
            <Select
              labelId="order-select"
              value={order}
              label="Order"
              onChange={(e) => handleSortOrder(e.target.value)}
            >
              <MenuItem value="latest">Latest</MenuItem>
              <MenuItem value="lowest">Lowest</MenuItem>
              <MenuItem value="highest">Highest</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* size */}
        <Box sx={{ minWidth: 80 }}>
          <FormControl fullWidth variant="standard" size="small">
            <InputLabel id="size-select">Size</InputLabel>
            <Select
              labelId="size-select"
              value={size}
              label="Size"
              onChange={(e) => handleFilterBySize(e.target.value)}
            >
              <MenuItem value="ALL">ALL</MenuItem>
              <MenuItem value="XS">XS</MenuItem>
              <MenuItem value="S">S</MenuItem>
              <MenuItem value="M">M</MenuItem>
              <MenuItem value="L">L</MenuItem>
              <MenuItem value="XL">XL</MenuItem>
              <MenuItem value="XXL">XXL</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Stack>
    </>
  );
};

export default Filter;
