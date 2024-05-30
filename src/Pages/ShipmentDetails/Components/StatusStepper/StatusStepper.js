import StepIcon from "./Components/StepIcon";
import React, { useContext } from "react";
import { Stepper, Step, Typography } from "@mui/material";
import CustomStepLabel from "./Components/StepLabel/StepLabel";
import Connector from "./Components/Connector/Connector";
import { Context } from "../../../../Context";
import { useTranslation } from "react-i18next";

const steps = [
  "TICKET_CREATED",
  "PACKAGE_RECEIVED",
  "OUT_FOR_DELIVERY",
  "DELIVERED",
];

const StatusStepper = () => {
  const language = localStorage.getItem("language");

  const {
    state: { step },
  } = useContext(Context);
  const { t } = useTranslation();

  return (
    <Stepper
      activeStep={step}
      sx={{
        alignItems: "flex-start",
        mb: 4,
        p: { xs: 2, md: 4 },
        pr: { md: 7 },
        flexDirection: language === "ar" ? "row-reverse" : "row",
      }}
      connector={<Connector />}
    >
      {steps.map((label) => (
        <Step key={label}>
          <CustomStepLabel>
            <Typography style={{ fontFamily: "Cairo", fontWeight: 700 }}>
              {t(label)}
            </Typography>
          </CustomStepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default StatusStepper;
