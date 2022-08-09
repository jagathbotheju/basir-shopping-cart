import { ToastContainer, Bounce } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";
import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <ToastContainer
        position="bottom-center"
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
      <Stack height="100%">
        <Header />
        <Outlet />
        <Footer />
      </Stack>
    </>
  );
};

export default Layout;
