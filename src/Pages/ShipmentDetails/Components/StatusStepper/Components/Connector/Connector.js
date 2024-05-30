import React, { useContext } from "react";
import { StepConnector, stepConnectorClasses } from "@mui/material";
import { Context } from "../../../../../../Context";

const Connector = () => {
  const {
    state: { color },
  } = useContext(Context);

  return (
    <StepConnector
      sx={{
        [`& .${stepConnectorClasses.line}`]: {
          position: "relative",
          top: 20,
          left: "-8px",
          width: "calc(100% + 16px)",
          height: 5,
          backgroundColor: "#ccc",
          borderTop: "none",
        },
        [`&.${stepConnectorClasses.active} .${stepConnectorClasses.line}`]: {
          backgroundColor: `${color} !important`,
        },
        [`&.${stepConnectorClasses.completed} .${stepConnectorClasses.line}`]: {
          backgroundColor: `${color} !important`,
        },
      }}
    />
  );
};

export default Connector;
