import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { addToCart } from "../redux/features/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "material-react-toastify";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const { cartItems } = useSelector((state) => state.product);

  const handleAddToCart = () => {
    const newItem = {
      ...product,
      qty,
    };
    const oldItem = cartItems.find((item) => item._id === newItem._id);
    if (oldItem) toast.error("Item alreay Exist");
    else dispatch(addToCart(newItem));
  };

  return (
    <>
      <Card sx={{ maxWidth: { xs: "full", sm: 280 } }}>
        <CardMedia component="img" image={product.image} alt={product.title} />
        <CardContent
          sx={{
            "&:last-child": {
              pb: 1,
            },
          }}
        >
          <Typography noWrap fontWeight="bold" variant="body2">
            {product.title}
          </Typography>
          <Box
            my={1}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography>${product.price}</Typography>
            <Box display="flex" justifyContent="center" alignItems="center">
              {qty > 1 && (
                <IconButton size="small" onClick={() => setQty(qty - 1)}>
                  <FaArrowDown />
                </IconButton>
              )}
              <IconButton size="small" onClick={() => setQty(qty + 1)}>
                <FaArrowUp />
              </IconButton>

              <Typography ml={1} fontWeight="bold">
                {qty}
              </Typography>
            </Box>
            <Button
              sx={{ fontWeight: "bold" }}
              color="secondary"
              variant="contained"
              size="small"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductItem;
