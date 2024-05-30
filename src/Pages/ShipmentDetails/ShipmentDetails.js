import { Box, Grid } from "@mui/material";
import axios from "axios";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../Context";
import { mapSteps } from "../../utils";
import Brief from "./Components/Brief";
import DeliveryAddress from "./Components/DeliveryAddress/DeliveryAddress";
import Details from "./Components/Details";
import Help from "./Components/Help";

const ShipmentDetails = () => {
  const { trackingNo } = useParams();
  const { data, setData, setState } = useContext(Context);

  useEffect(() => {
    !data &&
      axios
        .get(`https://tracking.bosta.co/shipments/track/${trackingNo}`)
        .then((response) => {
          const data = response.data;
          setData(data);
          setState(mapSteps[data.CurrentStatus.state]);
        })
        .catch();
  }, [trackingNo, data]);
  
  return (
    <Box
      style={{
        marginTop: 30,
        display: "flex",
        flexDirection: "column",
        rowGap: 20,
      }}
      sx={{ pl: { xs: 2, md: 10 }, pr: { xs: 2, md: 10 } }}
    >
      <Brief />
      <Grid container columnSpacing={3}>
        <Grid item xs={12} md={8}>
          <Details />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{ display: "flex", flexDirection: "column", rowGap: 15 }}
        >
          <DeliveryAddress />
          <Help />
        </Grid>
      </Grid>
    </Box>
  );
};
export default ShipmentDetails;