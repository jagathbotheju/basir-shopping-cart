import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h4">ShoppingCart</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
