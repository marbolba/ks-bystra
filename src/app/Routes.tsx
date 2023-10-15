import Section from "@/pages/Section/Section";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Landing from "@/pages/Landing/Landing";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import { useCallback, useEffect, useState } from "react";
import useJsonTemplates from "@/hooks/useJsonTemplates";
import {
  Outlet,
  Route,
  Routes as ReactRoutes,
  BrowserRouter,
} from "react-router-dom";
import { styled } from "@mui/material";

const Routes = () => {
  const [sectionsList, setSectionsList] = useState<string[] | null>(null);
  const { fetchSectionsList } = useJsonTemplates();

  const initializeRouter = useCallback(async () => {
    const sectionData = await fetchSectionsList();
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
    if (!sectionsList) {
      initializeRouter();
    }
  });

  if (!sectionsList) {
    return null;
  }

  const LayoutWrapper = styled("div")`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    max-width: 1440px;
  `;

  const Layout = () => (
    <LayoutWrapper>
      <Header />
      <NavigationBar />
      <Outlet />
      <Footer />
    </LayoutWrapper>
  );

  const sectionsTemplate = getSectionsTemplate(sectionsList);
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Landing />} />
          {sectionsTemplate}
        </Route>
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;
