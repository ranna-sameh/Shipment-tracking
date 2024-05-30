import React from "react";
import StepLabel from "@mui/material/StepLabel";
import { stepLabelClasses } from "@mui/material/StepLabel";
import { styled } from "@mui/system";
import StepIcon from "../StepIcon";

const CustomStepLabel = ({ children }) => {
  return (
    <StepLabel
      sx={{
        [`& .${stepLabelClasses.iconContainer}`]: {
          padding: 0,
        },
        [`& .${stepLabelClasses.labelContainer}`]: {
          position: "absolute",
          width: "auto",
          transform: "translateY(200%) translateX(-30%)",
        },
      }}
      StepIconComponent={StepIcon}
    >
      {children}
    </StepLabel>
  );
};

export default CustomStepLabel;
