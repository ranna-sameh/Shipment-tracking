import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { Provider } from "./Context";
import { jss, rtlTheme, ltrTheme } from "./theme"; // Importing JSS, RTL Theme, and LTR Theme
import { StylesProvider, ThemeProvider, jssPreset } from "@mui/styles"; // Importing StylesProvider, ThemeProvider, and jssPreset
import { create } from "jss"; // Importing create function from JSS
import rtl from "jss-rtl"; // Importing rtl from jss-rtl
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
// Enable RTL support in JSS
const jssWithRtl = create({ plugins: [...jssPreset().plugins, rtl()] });

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={rtlTheme}>
        <StylesProvider jss={jssWithRtl}>
          <Provider>
            <App />
          </Provider>
        </StylesProvider>
      </ThemeProvider>
    </I18nextProvider>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
