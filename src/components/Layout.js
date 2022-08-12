import { ToastContainer, Bounce } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";
import { Outlet } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Bounce}
      />
      <Stack minHeight="100vh">
        <Header />
        <Box flexGrow={1}>
          <Outlet />
        </Box>
        <Footer />
      </Stack>
    </>
  );
};

export default Layout;
