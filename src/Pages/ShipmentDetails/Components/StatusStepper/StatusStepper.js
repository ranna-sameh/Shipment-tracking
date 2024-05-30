import StepIcon from "./Components/StepIcon";
import React, { useContext } from "react";
import { Stepper, Step, Typography } from "@mui/material";
import CustomStepLabel from "./Components/StepLabel/StepLabel";
import Connector from "./Components/Connector/Connector";
import { Context } from "../../../../Context";

const steps = [
  "Shipment created",
  "Package received",
  "Out for delivery",
  "Delivered",
];

const StatusStepper = () => {
  const {
    state: { step },
  } = useContext(Context);
  return (
    <Stepper
      activeStep={step}
      sx={{
        alignItems: "flex-start",
        mb: 4,
        p: { xs: 2, md: 4 },
        pr:{md:7}
      }}
      connector={<Connector />}
    >
      {steps.map((label) => (
        <Step key={label}>
          <CustomStepLabel>
            <Typography style={{ fontFamily: "Cairo", fontWeight: 700 }}>
              {label}
            </Typography>
          </CustomStepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default StatusStepper;
