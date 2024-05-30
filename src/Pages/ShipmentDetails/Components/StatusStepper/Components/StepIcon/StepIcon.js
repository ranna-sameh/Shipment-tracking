import { Box, styled } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import FactCheckRoundedIcon from "@mui/icons-material/FactCheckRounded";
import RedeemRoundedIcon from "@mui/icons-material/RedeemRounded";
import { Context } from "../../../../../../Context";
import { useContext } from "react";

const StepIcon = ({ active, completed, icon }) => {
  const {
    state: { color },
  } = useContext(Context);

  const icons = {
    1: <CreateRoundedIcon />,
    2: <RedeemRoundedIcon />,
    3: <LocalShippingIcon />,
    4: <FactCheckRoundedIcon />,
  };

  return (
    <Box
      style={{
        backgroundColor: "#ccc",
        zIndex: 1,
        color: "#fff",
        display: "flex",
        borderRadius: "50%",
        justifyContent: "center",
        alignItems: "center",
        width: 45,
        height: 45,
        ...(active && {
          backgroundColor: color,
        }),
        ...(completed && {
          color: color,
          backgroundColor: "transparent",
          width: 20,
        }),
      }}
    >
      {completed ? <CheckCircleIcon /> : icons[String(icon)]}
    </Box>
  );
};
export default StepIcon;
