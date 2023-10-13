import GlobalStyles from "./GlobalStyles/GlobalStyles";
import ThemeProvider from "@/theme";
import { CssBaseline } from "@mui/material";
import Routes from "./Routes";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider>
        <CssBaseline>
          <Routes />
        </CssBaseline>
      </ThemeProvider>
    </>
  );
}

export default App;
