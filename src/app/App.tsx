import GlobalStyles from "./GlobalStyles/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home/Home";
import ThemeProvider from "@/theme";
import { CssBaseline } from "@mui/material";
import Section from "@/pages/Section/Section";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider>
        <CssBaseline>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/handball"
                element={<Section name="Pilka reczna dziewczyn" />}
              />
              <Route
                path="/girls-academy"
                element={<Section name="Girls Academy" />}
              />
            </Routes>
          </BrowserRouter>
        </CssBaseline>

        {/* <Home /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
