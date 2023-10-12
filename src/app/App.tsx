import GlobalStyles from "./GlobalStyles/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home/Home";
import ThemeProvider from "@/theme";
import { CssBaseline } from "@mui/material";
import Section from "@/pages/Section/Section";

function App() {
  const SECTIONS = [
    {
      path: "/handball",
      title: "PILKA RECZNA",
    },
    {
      path: "/girls-academy",
      title: "Girls Academy",
    },
  ];

  return (
    <>
      <GlobalStyles />
      <ThemeProvider>
        <CssBaseline>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />

              {SECTIONS.map(({ path, title }, idx) => (
                <Route
                  key={idx}
                  path={path}
                  element={<Section name={title} />}
                />
              ))}
            </Routes>
          </BrowserRouter>
        </CssBaseline>
      </ThemeProvider>
    </>
  );
}

export default App;
