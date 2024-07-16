import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./store";
import { Provider } from "react-redux";
import App from "./App.tsx";
import "./i18n.js";
import "./index.css";
import { ThemeWrapper } from "./components/themeWrapper/ThemeWrapper.tsx";
import { CssBaseline } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeWrapper>
        <CssBaseline>
          <App />
        </CssBaseline>
      </ThemeWrapper>
    </Provider>
  </React.StrictMode>
)
