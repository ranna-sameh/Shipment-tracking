import { Box, Button, Grid, Typography } from "@mui/material";
import help from "../../../../assets/bostaHelper.png";
import { useTranslation } from "react-i18next";

const Help = () => {
  const { t } = useTranslation();

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      style={{ border: "1.4px solid #ECECEC", borderRadius: "4px" }}
    >
      <Grid
        item
        xs={6}
        style={{ display: "flex", flexDirection: "column", rowGap: 10 }}
      >
        <Typography
          style={{ fontFamily: "Cairo", fontSize: 14, fontWeight: "bold" }}
        >
          {t("Is there a problem with your shipment?!")}
        </Typography>
        <Button
          style={{
            backgroundColor: "#e30613",
            color: "white",
            fontFamily: "Cairo",
          }}
        >
          {t("Report an issue")}
        </Button>
      </Grid>
      <Grid item xs={4}>
        <img src={help} style={{ width: "100%" }} />
      </Grid>
    </Grid>
  );
};
export default Help;
