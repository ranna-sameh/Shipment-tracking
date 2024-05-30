import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Context } from "../../../../../../Context";
import { formattedDate, formattedTime } from "../../../../../../utils";

const CustomTableCell = ({ text }) => {
  return (
    <TableCell style={{ fontFamily: "Cairo", fontSize: 18, color: "#999999" }}>
      {text}
    </TableCell>
  );
};
const TransitTable = () => {
  const { data: rows } = React.useContext(Context);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{ backgroundColor: "#F4F4F4" }}>
            <CustomTableCell text="Branch" />
            <CustomTableCell text="Date" />
            <CustomTableCell text="Time" />
            <CustomTableCell text="Details" />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.TransitEvents?.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                style={{ fontFamily: "Cairo" }}
              >
                {row.hub || "Hub"}
              </TableCell>
              <TableCell style={{ fontFamily: "Cairo" }}>
                {formattedDate(row.timestamp).formattedDate}
              </TableCell>
              <TableCell style={{ fontFamily: "Cairo" }}>
                {" "}
                {formattedTime(row.timestamp)}
              </TableCell>
              <TableCell style={{ fontFamily: "Cairo" }}>
                {row.state}{" "}
                <span style={{ color: "red", display: "block" }}>
                  {row?.reason}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default TransitTable;
