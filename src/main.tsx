import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./store";
import { Provider } from "react-redux";
import App from "./App.tsx";
import "./i18n.js";
import "./index.css";
import { ThemeWrapper } from "./components/themeWrapper/ThemeWrapper.tsx";
import { CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeWrapper>
        <CssBaseline>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </CssBaseline>
      </ThemeWrapper>
    </Provider>
  </React.StrictMode>
)
