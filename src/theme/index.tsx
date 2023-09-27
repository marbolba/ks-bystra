import { ReactNode } from "react";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from "@mui/material/styles";
import typography from "./typography";

type Props = {
  children: ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#052D75",
      },
      text: {
        primary: "#fff",
        secondary: "#000",
        disabled: "#f0f",
      },

      // ...{ gradient: "linear-gradient(180deg, #1648A3 0%, #052D75 100%)" },
      // activeBlue: "linear-gradient(180deg, #2B65CC 0%, #133C86 100%)",
    },
    typography,
  });

  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
}
