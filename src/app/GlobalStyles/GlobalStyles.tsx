import { Global, css } from "@emotion/react";

// fonts
import MontserratRegularTtf from "@/assets/fonts/Montserrat-Regular.ttf";
import MontserratMediumTtf from "@/assets/fonts/Montserrat-Medium.ttf";

const globalCss = css`
  html {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
  }

  p {
    margin: 0;
  }

  #root {
    width: 100%;
    height: 100vh;
  }

  @font-face {
    font-family: "Montserrat";
    src: url(${MontserratRegularTtf}) format("truetype");
    font-weight: 400;
  }

  @font-face {
    font-family: "Montserrat";
    src: url(${MontserratMediumTtf}) format("woff2");
    font-weight: 500;
  }
`;

const GlobalStyles = () => <Global styles={globalCss} />;

export default GlobalStyles;
