import { Typography } from "@mui/material";
import Table from "./Components/Table";
import { useTranslation } from "react-i18next";

const Details = () => {
  const { t } = useTranslation();
  const language = localStorage.getItem("language");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: 15,
        direction: language === "ar" ? "rtl" : "ltr",
      }}
    >
      <Typography
        style={{ fontFamily: "Cairo", fontSize: 24, fontWeight: "bold" }}
      >
        {t("Shipment Details")}
      </Typography>
      <Table />{" "}
    </div>
  );
};
export default Details;
