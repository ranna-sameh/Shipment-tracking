import React from "react";
import { Grid, Typography } from "@mui/material";

const GridItem = ({ title, text, color = "" }) => {
  const lang = localStorage.getItem("language");
  const isArabic = lang === "ar";

  return (
    <Grid item xs={12} md={3} dir={isArabic ? "rtl" : "ltr"}>
      <Typography
        style={{
          color: "grey",
          fontFamily: "Cairo",
          textAlign: isArabic ? "right" : "left",
        }}
      >
        {title}
      </Typography>
      <Typography
        style={{
          fontSize: 22,
          fontWeight: "bold",
          fontFamily: "Cairo",
          color: color,
          textAlign: isArabic ? "right" : "left",
        }}
      >
        {text}
      </Typography>
    </Grid>
  );
};

export default GridItem;
