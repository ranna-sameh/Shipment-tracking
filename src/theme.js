// src/theme.js

import { createTheme } from "@mui/material/styles";
import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@mui/styles";

// JSS configuration for RTL
export const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

export const rtlTheme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "Cairo, sans-serif",
  },
});

export const ltrTheme = createTheme({
  direction: "ltr",
  typography: {
    fontFamily: "Cairo, sans-serif",
  },
});
