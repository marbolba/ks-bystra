import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    font: {
      color: string;
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
    };
    palette: {
      primary: string;
      textBlack: string;
      contrastText: string;
    };
    gradient: {
      blue: string;
      activeBlue: string;
    };
  }
}
