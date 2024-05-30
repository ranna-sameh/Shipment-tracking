import { Box, Typography } from "@mui/material";

const DeliveryAddress = () => {
  return (
    <>
      <Typography
        style={{ fontFamily: "Cairo", fontSize: 24, fontWeight: "bold" }}
      >
        Delivery address
      </Typography>{" "}
      <Box
        sx={{
          backgroundColor: "#F4F4F4",
          borderRadius: 2,
          padding: 4,
        }}
      >
        <Typography style={{ fontFamily: "Cairo", color: "grey" }}>
          106 Street, region , Cairo details 106 Street, region , Cairo details
        </Typography>
      </Box>{" "}
    </>
  );
};
export default DeliveryAddress;
