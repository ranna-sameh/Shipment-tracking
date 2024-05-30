import Navbar from "../Navbar";
import { Outlet } from "react-router";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <div style={{ flex: 1 }}>
        <Navbar />
        <Box>
          <Outlet />
        </Box>
      </div>
    </div>
  );
};

export default Layout;
