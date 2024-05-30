import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const DeliveryAddress = () => {
  const { t } = useTranslation();
  const language = localStorage.getItem("language");
  return (
    <div
      style={{
        direction: language === "ar" ? "rtl" : "ltr",
        display: "flex",
        flexDirection: "column",
        rowGap: 15,
      }}
    >
      <Typography
        style={{ fontFamily: "Cairo", fontSize: 24, fontWeight: "bold" }}
      >
        {t("Delivery Address")}
      </Typography>{" "}
      <Box
        sx={{
          backgroundColor: "#F4F4F4",
          borderRadius: 2,
          padding: 4,
        }}
      >
        <Typography style={{ fontFamily: "Cairo", color: "grey" }}>
          {t("temp-address")}
        </Typography>
      </Box>{" "}
    </div>
  );
};
export default DeliveryAddress;
