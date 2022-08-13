import React, { useState } from "react";
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
  Button,
  TextField,
} from "@mui/material";
import Image from "mui-image";
import { FaTrashAlt } from "react-icons/fa";
import { removeFromCart } from "../redux/features/productSlice";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.product);
  const [showForm, setShowForm] = useState(false);
  let totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const validationSchema = Yup.object({
    name: Yup.string("Enter Name").required("Name is required"),
    email: Yup.string("Enter email")
      .required("Email is required")
      .email("Email is invalid"),
    address: Yup.string("Enter address").required("Address is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  const onSubmit = (formData) => {
    console.log(formData);
    //dispatch(userRegister(formData));
  };

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
            <Box display="flex" justifyContent="space-between">
              <Button variant="contained" onClick={() => setShowForm(true)}>
                <Typography variant="h6" fontWeight="bold">
                  Proceed
                </Typography>
              </Button>
              <Box p={1} bgcolor="primary.main">
                <Typography
                  color="#fff"
                  mx={3}
                  variant="h6"
                  fontWeight="bold"
                  textAlign="right"
                >{`Total : $${totalPrice}`}</Typography>
              </Box>
            </Box>
          </>
        )}

        {/* form */}
        {showForm && (
          <Stack mt={5} gap={2} width="full">
            {/* email input */}
            <TextField
              id="email"
              variant="outlined"
              required
              type="email"
              name="email"
              label="Email"
              size="small"
              {...register("email")}
              error={errors.email ? true : false}
              helperText={errors.email?.message}
            />

            {/* name input */}
            <TextField
              id="name"
              variant="outlined"
              required
              type="name"
              name="name"
              label="Name"
              size="small"
              {...register("name")}
              error={errors.name ? true : false}
              helperText={errors.name?.message}
            />

            {/* email input */}
            <TextField
              id="address"
              variant="outlined"
              required
              type="address"
              name="address"
              label="Address"
              size="small"
              {...register("address")}
              error={errors.address ? true : false}
              helperText={errors.address?.message}
            />

            {/* submit button */}
            <Button
              fullWidth
              sx={{ fontWeight: "bold" }}
              variant="contained"
              onClick={handleSubmit(onSubmit)}
              disabled={!isValid}
            >
              Checkout
            </Button>
          </Stack>
        )}
      </Stack>
    </>
  );
};

export default Cart;
