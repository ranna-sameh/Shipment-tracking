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
import { useTranslation } from "react-i18next";

const CustomTableCell = ({ text, language }) => {
  return (
    <TableCell
      style={{ fontFamily: "Cairo", fontSize: 18, color: "#999999" }}
      align={language === "ar" ? "right" : "left"}
    >
      {text}
    </TableCell>
  );
};
const TransitTable = () => {
  const { data: rows } = React.useContext(Context);
  const { t } = useTranslation();
  const language = localStorage.getItem("language");

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{ backgroundColor: "#F4F4F4" }}>
            <CustomTableCell text={t("Branch")} language={language} />
            <CustomTableCell text={t("Date")} language={language} />
            <CustomTableCell text={t("Time")} language={language} />
            <CustomTableCell text={t("Details")} language={language} />
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
                align={language === "ar" ? "right" : "left"}
              >
                {row.hub || "Hub"}
              </TableCell>
              <TableCell
                style={{ fontFamily: "Cairo" }}
                align={language === "ar" ? "right" : "left"}
              >
                {formattedDate(row.timestamp).formattedDate}
              </TableCell>
              <TableCell
                style={{ fontFamily: "Cairo" }}
                align={language === "ar" ? "right" : "left"}
              >
                {" "}
                {formattedTime(row.timestamp)}
              </TableCell>
              <TableCell
                style={{ fontFamily: "Cairo" }}
                align={language === "ar" ? "right" : "left"}
              >
                {t(row.state)}{" "}
                <span style={{ color: "red", display: "block" }}>
                  {t(row?.reason)}
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
