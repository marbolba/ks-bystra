import GlobalStyles from "./GlobalStyles/GlobalStyles";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import ThemeProvider from "@/theme";
import { CssBaseline } from "@mui/material";
import Section from "@/pages/Section/Section";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Landing from "@/pages/Landing/Landing";
import NavigationBar from "@/components/NavigationBar/NavigationBar";

function App() {
  const SECTIONS = [
    {
      path: "/handball",
      child: <Section name={"PILKA RECZNA"} />,
    },
    {
      path: "/girls-academy",
      child: <Section name={"Girls Academy"} />,
    },
  ];

  const Layout = () => (
    <>
      <Header />
      <NavigationBar />
      <Outlet />
      <Footer />
    </>
  );

  return (
    <>
      <GlobalStyles />
      <ThemeProvider>
        <CssBaseline>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="/" element={<Landing />} />
                {SECTIONS.map(({ path, child }, idx) => (
                  <Route key={idx} path={path} element={child} />
                ))}
              </Route>
            </Routes>
          </BrowserRouter>
        </CssBaseline>
      </ThemeProvider>
    </>
  );
}

export default App;
