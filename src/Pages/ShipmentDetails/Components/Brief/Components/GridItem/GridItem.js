import { Grid, Typography } from "@mui/material";

const GridItem = ({ title, text, color = "" }) => {
  return (
    <Grid item xs={12} md={3}>
      <Typography style={{ color: "grey", fontFamily: "Cairo" }}>
        {title}
      </Typography>
      <Typography
        style={{
          fontSize: 22,
          fontWeight: "bold",
          fontFamily: "Cairo",
          color: color,
        }}
      >
        {text}
      </Typography>
    </Grid>
  );
};
export default GridItem;
