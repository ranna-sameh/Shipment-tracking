import { Box, Divider, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../../../Context";
import { formattedDate, formattedTime } from "../../../../utils";
import StatusStepper from "../StatusStepper";
import GridItem from "./Components/GridItem";

const Brief = () => {
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
      >
        <GridItem
          title={`Shipment Number #${data?.TrackingNumber}`}
          text={data?.CurrentStatus.state}
          color={color}
        />{" "}
        <GridItem
          title="Latest update"
          text={
            <span style={{ fontSize: 16 }}>
              {data?.CurrentStatus &&
                formattedDate(data?.CurrentStatus?.timestamp).formattedDay +
                  " " +
                  formattedDate(data?.CurrentStatus?.timestamp).formattedDate +
                  " at " +
                  formattedTime(data?.CurrentStatus?.timestamp)}
            </span>
          }
        />
        <GridItem title="Seller name" text="NOON" />
        <GridItem
          title="To be delivered at"
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
