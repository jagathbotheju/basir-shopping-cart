import React from "react";
import { useSelector } from "react-redux";
import {
  Stack,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  IconButton,
} from "@mui/material";
import Image from "mui-image";
import { FaTrashAlt } from "react-icons/fa";
import { removeFromCart } from "../redux/features/productSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.product);
  let totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  console.log(cartItems);

  return (
    <>
      <Stack>
        <Box bgcolor="grey.200">
          <Typography m={2} variant="h5">
            My Cart, {cartItems.length} items
          </Typography>
        </Box>
        {cartItems.length === 0 ? (
          <Typography m={2} variant="h5">
            No Items
          </Typography>
        ) : (
          <>
            <List>
              {cartItems.map((item) => (
                <ListItem
                  key={item._id}
                  alignItems="flex-start"
                  secondaryAction={
                    <IconButton
                      color="warning"
                      size="small"
                      onClick={() => dispatch(removeFromCart(item._id))}
                    >
                      <FaTrashAlt />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Image src={item.image} width={50} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.title}
                    secondary={`$${item.price} x ${item.qty}`}
                  />
                </ListItem>
              ))}
            </List>
            <Box p={1} bgcolor="secondary.main">
              <Typography
                mx={3}
                variant="h6"
                fontWeight="bold"
                textAlign="right"
              >{`Total : $${totalPrice}`}</Typography>
            </Box>
          </>
        )}
      </Stack>
    </>
  );
};

export default Cart;
