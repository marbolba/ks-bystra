import { ThemeProvider } from "@emotion/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const LightTheme = ({ children }: Props) => {
  const theme = {
    palette: {
      primary: "blue",
    },
  };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default LightTheme;
