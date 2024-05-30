import { Box, Divider, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../../../Context";
import { formattedDate, formattedTime } from "../../../../utils";
import StatusStepper from "../StatusStepper";
import GridItem from "./Components/GridItem";
import { useTranslation } from "react-i18next";

const Brief = () => {
  const { t } = useTranslation();
  const lang = localStorage.getItem("language");

  const {
    state: { color },
    data,
  } = useContext(Context);

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1.4px solid #ECECEC",
        borderRadius: "8px",
      }}
    >
      <Grid
        container
        justifyContent="space-around"
        alignItems="center"
        sx={{ p: { xs: 2, md: 4 } }}
        direction={lang == "ar" ? "row-reverse" : "row"}
      >
        <GridItem
          title={`${t("Shipment Number")} #${data?.TrackingNumber}`}
          text={t(data?.CurrentStatus.state)}
          color={color}
        />{" "}
        <GridItem
          title={t("Latest Update")}
          text={
            <span style={{ fontSize: 16 }}>
              {data?.CurrentStatus &&
                t(formattedDate(data?.CurrentStatus?.timestamp).formattedDay) +
                  " " +
                  formattedDate(data?.CurrentStatus?.timestamp).formattedDate +
                  " at " +
                  formattedTime(data?.CurrentStatus?.timestamp)}
            </span>
          }
        />
        <GridItem title={t("Seller Name")} text="NOON" />
        <GridItem
          title={t("To be delivered at")}
          text={
            data?.PromisedDate &&
            formattedDate(data?.PromisedDate).formattedDate
          }
        />
      </Grid>
      <Divider />
      <StatusStepper />
    </Box>
  );
};
export default Brief;
