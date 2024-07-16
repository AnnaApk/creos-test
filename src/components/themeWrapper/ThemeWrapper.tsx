import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { ThemeProvider, createTheme } from "@mui/material";

export function ThemeWrapper({ children }: { children: React.ReactNode })  {
  const currentTheme = useSelector((state: RootState) => state.theme.theme);

  const theme = createTheme({
    palette: {
      mode: currentTheme,
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
