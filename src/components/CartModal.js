import {
  Modal,
  Backdrop,
  Zoom,
  Stack,
  Typography,
  Button,
  Grid,
  Chip,
  Box,
} from "@mui/material";
import React from "react";
import Image from "mui-image";

const CartModal = ({ showModal, setShowModal, product, handleAddToCart }) => {
  const handleModalAddToCart = () => {
    handleAddToCart();
    setShowModal(false);
  };

  return (
    <>
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "50%",
          mx: "auto",
        }}
      >
        <Zoom in={showModal}>
          <Stack
            sx={{
              bgcolor: "background.paper",
              zIndex: 2500,
              boxShadow: 24,
              p: 2,
            }}
          >
            <Grid container direction="row">
              <Grid item xs={12} sm={6}>
                <Image src={product.image} alt={product.title} />
              </Grid>
              <Grid item xs={12} sm={5}>
                <Stack ml={2} gap={2}>
                  <Typography mb={2} variant="h5">
                    {product.title}
                  </Typography>
                  <Typography noWrap={false} variant="body2">
                    {product.description}
                  </Typography>
                  <Typography variant="h4">{`Price : $${product.price}`}</Typography>
                  <Box display="flex" gap={2}>
                    {product.availableSizes.map((size, index) => (
                      <Chip key={index} label={size} color="secondary" />
                    ))}
                  </Box>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleModalAddToCart}
                  >
                    Add to Cart
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Zoom>
      </Modal>
    </>
  );
};

export default CartModal;
