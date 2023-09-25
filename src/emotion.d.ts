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

      others1: string;
      others2: string;
      neutrals1: string;
      neutrals2: string;
    };
    gradient: {
      blue: string;
      activeBlue: string;
    };
  }
}
