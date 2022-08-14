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
import { motion } from "framer-motion";
import CartModal from "./CartModal";

const ProductItem = ({ product, index }) => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const { cartItems } = useSelector((state) => state.product);
  const [showModal, setShowModal] = useState(false);

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
      <CartModal
        showModal={showModal}
        setShowModal={setShowModal}
        product={product}
        handleAddToCart={handleAddToCart}
      />
      <Card
        component={motion.div}
        sx={{ maxWidth: { xs: "full", sm: 280 } }}
        initial="hidden"
        animate="visible"
        custom={index}
        variants={{
          hidden: {
            opacity: 0,
            y: 100,
          },
          visible: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
              delay: index * 0.25,
              ease: "easeInOut",
              type: "spring",
            },
          }),
        }}
      >
        {/* image */}
        <CardMedia
          component="img"
          image={product.image}
          alt={product.title}
          onClick={() => setShowModal(true)}
        />
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

            {/* button add to cart */}
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
