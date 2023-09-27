import GlobalStyles from "./GlobalStyles/GlobalStyles";
import Home from "@/pages/Home/Home";
import ThemeProvider from "@/theme";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
