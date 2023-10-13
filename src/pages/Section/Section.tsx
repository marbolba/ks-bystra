import S from "./Section.styled";
import LargeGapSection from "@/components/LargeGapSection/LargeGapSection";
import LabelWithBackgroundPattern from "@/components/LabelWithBackgroundPattern/LabelWithBackgroundPattern";
import SmallGapSection from "@/components/SmallGapSection/SmallGapSection";
import SectionApply from "@/components/SectionApply/SectionApply";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SectionContact, {
  SectionContactLabels,
} from "@/components/SectionContact/SectionContact";
import PatronsSlider from "@/features/PatronsSlider/PatronsSlider";
import { useCallback, useEffect, useState } from "react";
import useJsonTemplates from "@/hooks/useJsonTemplates";
import SpinnerScreen from "@/components/SpinnerScreen/SpinnerScreen";

export type SectionLabels = {
  title: string;
  contact: SectionContactLabels;
  aboutUs: string;
  becomePatron: string;
};

export type SectionData = {
  config: {};
  labels: SectionLabels;
  id: string;
};

type Props = {
  id: string;
};

const Section = ({ id }: Props) => {
  const theme = useTheme();
  const { fetchAndParseSectionData } = useJsonTemplates();
  const [sectionData, setSectionData] = useState<SectionData | null>(null);

  const initializeSection = useCallback(async () => {
    const sectionData = await fetchAndParseSectionData(id);
    setSectionData(sectionData);
  }, []);

  useEffect(() => {
    initializeSection();
  }, []);

  if (!sectionData) {
    return <SpinnerScreen />;
  }
  const { labels } = sectionData;

  return (
    <S.ViewWrapper>
      <LargeGapSection>
        <Typography variant="h2" color={theme.palette.secondary.main}>
          {labels.title}
        </Typography>

        <SmallGapSection>
          <LabelWithBackgroundPattern label="O nas" />
          <Typography variant="body1">{labels.aboutUs}</Typography>
        </SmallGapSection>

        <SmallGapSection>
          <LabelWithBackgroundPattern label="Dołącz do nas" />
          <SectionApply />
        </SmallGapSection>

        <SmallGapSection>
          <LabelWithBackgroundPattern label="Kontakt" />
          <SectionContact labels={labels.contact} />
        </SmallGapSection>

        <SmallGapSection>
          <LabelWithBackgroundPattern label="Zostań patronem" />
          <Typography variant="body1">{labels.becomePatron}</Typography>
          <PatronsSlider />
        </SmallGapSection>
      </LargeGapSection>
    </S.ViewWrapper>
  );
};

export default Section;
