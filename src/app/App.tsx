import GlobalStyles from "./GlobalStyles/GlobalStyles";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import ThemeProvider from "@/theme";
import { CssBaseline } from "@mui/material";
import Section from "@/pages/Section/Section";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Landing from "@/pages/Landing/Landing";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import { useCallback, useEffect, useState } from "react";
import useJsonTemplates from "@/hooks/useJsonTemplates";

function App() {
  const [sectionsList, setSectionsList] = useState<string[] | null>(null);
  const { fetchSectionsList } = useJsonTemplates();

  const initializeRouter = useCallback(async () => {
    const sectionData = fetchSectionsList;
    setSectionsList(sectionData);
  }, []);

  const getSectionsTemplate = useCallback(
    (sectionsList: string[]) =>
      sectionsList.map((sectionName: string, idx) => (
        <Route
          key={idx}
          path={sectionName}
          element={<Section id={sectionName} />}
        />
      )),
    []
  );

  useEffect(() => {
    initializeRouter();
  });

  if (!sectionsList) {
    return null;
  }

  const sectionsTemplate = getSectionsTemplate(sectionsList);

  // TODO Move away
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
                {sectionsTemplate}
              </Route>
            </Routes>
          </BrowserRouter>
        </CssBaseline>
      </ThemeProvider>
    </>
  );
}

export default App;
