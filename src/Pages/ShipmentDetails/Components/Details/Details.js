import { Typography } from "@mui/material";
import Table from "./Components/Table";

const Details = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: 15 }}>
      <Typography
        style={{ fontFamily: "Cairo", fontSize: 24, fontWeight: "bold" }}
      >
        Shipment details
      </Typography>
      <Table />{" "}
    </div>
  );
};
export default Details;
