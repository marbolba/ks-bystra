import { ThemeProvider } from "@emotion/react";
import { ReactNode } from "react";
import { COLOR } from "./colors";

type Props = {
  children: ReactNode;
};

const defaultTheme = {
  font: {
    color: COLOR.BLACK,
    fontFamily: "Montserrat",
    fontSize: "14px",
    fontWeight: 400,
  },
};

const LightTheme = ({ children }: Props) => {
  const theme = {
    ...defaultTheme,
    palette: {
      primary: "#052D75",
    },
    gradient: {
      blue: "linear-gradient(180deg, #1648A3 0%, #052D75 100%)",
      activeBlue: "linear-gradient(180deg, #2B65CC 0%, #133C86 100%)",
    },
  };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default LightTheme;
