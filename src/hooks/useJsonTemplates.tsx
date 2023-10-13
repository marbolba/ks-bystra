import { useCallback, useMemo } from "react";
import sectionsFile from "@/assets/templates/sections.json";
import { SectionData } from "@/pages/Section/Section";

const useJsonTemplates = () => {
  const loadJson = (obj: any) => JSON.parse(JSON.stringify(obj));

  const fetchSectionsList = useMemo(
    () => loadJson(sectionsFile) as string[],
    []
  );

  const fetchLandingData = useMemo(
    async () =>
      (await loadJson(await import("@/assets/templates/landing.json"))).default,
    []
  );
  //   add later react-hooks/exhaustive-deps

  const fetchAndParseSectionData = useCallback(
    async (sectionName: string): Promise<SectionData> => {
      const data = await loadJson(
        await import(`@/assets/templates/sections/${sectionName}.json`)
      ).default;
      return { ...data, id: sectionName };
    },
    []
  );

  return { fetchSectionsList, fetchLandingData, fetchAndParseSectionData };
};

export default useJsonTemplates;
