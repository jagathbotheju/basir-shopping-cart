import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const ProductItem = ({ product }) => {
  return (
    <>
      <Card sx={{ maxWidth: { xs: "full", sm: 250 } }}>
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
            <Button
              sx={{ fontWeight: "bold" }}
              color="secondary"
              variant="contained"
              size="small"
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
