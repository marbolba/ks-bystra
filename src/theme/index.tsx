import { ReactNode } from "react";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from "@mui/material/styles";
import typography from "./typography";
import componentOverrides from "./componentOverrides";
import { plPL } from "@mui/x-date-pickers/locales";

type Props = {
  children: ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  const theme = createTheme(
    {
      palette: {
        primary: {
          dark: "#1E335E",
          main: "#052D75",
          light: "#EEF2F9",
        },
        secondary: {
          main: "#B79751",
        },
        text: {
          primary: "#031639",
          secondary: "#A3A8B0",
        },
        error: {
          main: "#EF1429",
        },
        background: {
          default: "linear-gradient(180deg, #FDFEFF 0%, #F6FAFF 100%)",
          paper: "#fff",
        },
        grey: {
          // 100: "#F6FAFF",
          200: "#EEF2F9",
          // 300: "#E3E8EF",
          // 400: "#D6DCE2",
          // 500: "#A3A8B0",
          // 600: "#8E939B",
          700: "#6E737C",
          // 800: "#4F5359",
          // 900: "#2F3236",
        },
        common: {
          white: "#fff",
          black: "#000",
        },
        action: {
          // active: "linear-gradient(180deg, #1648A3 0%, #052D75 100%)",
          // hover: "linear-gradient(180deg, #2B65CC 0%, #133C86 100%)",
          selected: "#052D75",
        },
      },

      typography,
      ...componentOverrides,
    },
    plPL
  );

  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
}
