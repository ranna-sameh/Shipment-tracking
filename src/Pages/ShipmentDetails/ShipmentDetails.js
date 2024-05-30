import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
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
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const lang = localStorage.getItem("language");

  useEffect(() => {
    setLoading(true);
    !data &&
      axios
        .get(`https://tracking.bosta.co/shipments/track/${trackingNo}`)
        .then((response) => {
          setLoading(false);
          const data = response.data;
          setData(data);
          setState(mapSteps[data.CurrentStatus.state]);
        })
        .catch((er) => {
          setLoading(false);
          setErr("Inavlid shipment no.");
        });
  }, [trackingNo, data, setData, setState, setLoading, setErr]);

  return data ? (
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
      <Grid
        container
        columnSpacing={3}
        rowSpacing={3}
        direction={lang === "ar" ? "row-reverse" : "row"}
      >
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
  ) : loading ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <CircularProgress style={{ color: "black" }} />
    </div>
  ) : (
    err && (
      <Typography style={{ fontFamily: "Cairo", color: "red" }}>
        {err}
      </Typography>
    )
  );
};
export default ShipmentDetails;
