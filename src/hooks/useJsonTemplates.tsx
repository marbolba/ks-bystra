import { useCallback, useMemo } from "react";
import sectionsFile from "@/assets/templates/sections.json";
import { SectionData } from "@/pages/Section/Section";
import { FooterData } from "@/components/Footer/Footer";
import { LandingData } from "@/pages/Landing/Landing";

const useJsonTemplates = () => {
  const loadJson = (obj: any) => JSON.parse(JSON.stringify(obj));

  const fetchSectionsList = useMemo(
    () => loadJson(sectionsFile) as string[],
    []
  );

  const fetchLandingData = useMemo(
    async (): Promise<LandingData> =>
      (await loadJson(await import("@/assets/templates/landing.json"))).default,
    []
  );

  const fetchFooterData = useMemo(
    async (): Promise<FooterData> =>
      (await loadJson(await import("@/assets/templates/footer.json"))).default,
    []
  );

  const fetchAndParseSectionData = useCallback(
    async (sectionName: string): Promise<SectionData> => {
      const data = await loadJson(
        await import(`@/assets/templates/sections/${sectionName}.json`)
      ).default;
      return { ...data, id: sectionName };
    },
    []
  );

  return {
    fetchSectionsList,
    fetchLandingData,
    fetchFooterData,
    fetchAndParseSectionData,
  };
};

export default useJsonTemplates;
