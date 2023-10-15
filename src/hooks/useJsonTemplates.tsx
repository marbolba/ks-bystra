import { FooterData } from "@/components/Footer/Footer";
import { LandingData } from "@/pages/Landing/Landing";
import { SectionData } from "@/pages/Section/Section";
import { useCallback } from "react";

const LABELS_HOST_URL =
  "https://raw.githubusercontent.com/marbolba/ks-bystra-templates/main/labels/";

const useJsonTemplates = () => {
  async function fetchData<T>(url: string): Promise<T> {
    const response = await fetch(`${LABELS_HOST_URL}${url}`);

    if (!response.ok) {
      throw new Error(`Error: HTTP status ${response.status}`);
    }

    const data: T = await response.json();
    return data;
  }

  // const loadJson = (path: string) =>
  //   JSON.parse(JSON.stringify(fetchData(path)));

  const fetchSectionsList = useCallback(
    () => fetchData<string[]>("sections.json"),
    []
  );

  const fetchLandingData = useCallback(
    () => fetchData<LandingData>("landing.json"),
    []
  );

  const fetchFooterData = useCallback(
    () => fetchData<FooterData>("footer.json"),
    []
  );

  const fetchAndParseSectionData = useCallback(async (sectionName: string) => {
    const data = await fetchData<SectionData>(`sections/${sectionName}.json`);
    return { ...data, id: sectionName };
  }, []);

  return {
    fetchSectionsList,
    fetchLandingData,
    fetchFooterData,
    fetchAndParseSectionData,
  };
};

export default useJsonTemplates;
