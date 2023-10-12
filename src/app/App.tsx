import GlobalStyles from "./GlobalStyles/GlobalStyles";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import ThemeProvider from "@/theme";
import { CssBaseline } from "@mui/material";
import Section, { SectionLabels } from "@/pages/Section/Section";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Landing from "@/pages/Landing/Landing";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import sectionsFile from "@/assets/templates/sections.json";
import { useCallback, useEffect, useMemo, useState } from "react";

type SectionConfig = {
  theme: {};
};

type SectionData = { config: SectionConfig; labels: SectionLabels; id: string };

function App() {
  const [sectionData, setSectionData] = useState<SectionData[]>([]);
  const loadJson = (obj: any) => JSON.parse(JSON.stringify(obj));

  const rawSectionsList = useMemo(
    () => loadJson(sectionsFile) as string[],
    [loadJson]
  );

  const fetchSectionsData = useCallback(async () => {
    const buildSectionData = async (sectionName: string) => {
      const data = await loadJson(
        await import(`@/assets/templates/sections/${sectionName}.json`)
      ).default;
      return { ...data, id: sectionName };
    };

    try {
      const sectionData = (
        await Promise.allSettled<SectionLabels>(
          rawSectionsList.map(buildSectionData)
        )
      ).map((r: any) => r.value);
      setSectionData(sectionData);
    } catch (e) {
      console.error("Error reading from json", e);
    }
  }, [rawSectionsList, loadJson]);

  useEffect(() => {
    fetchSectionsData();
  }, []);

  if (sectionData.length == 0) {
    return null;
  }

  const sections = sectionData.map((sectionData: SectionData) => ({
    path: sectionData.id,
    child: <Section labels={sectionData.labels} />,
  }));

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
                {sections.map(({ path, child }, idx) => (
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
