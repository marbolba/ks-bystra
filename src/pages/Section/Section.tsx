import S from "./Section.styled";
import LargeGapSection from "@/components/LargeGapSection/LargeGapSection";
import LabelWithBackgroundPattern from "@/components/LabelWithBackgroundPattern/LabelWithBackgroundPattern";
import SmallGapSection from "@/components/SmallGapSection/SmallGapSection";
import SectionApply from "@/components/SectionApply/SectionApply";
import { Typography } from "@mui/material";
import { LOREM_IPSUM } from "@/assets/labels/loremIpsum";
import { useTheme } from "@mui/material/styles";
import SectionContact, {
  SectionContactLabels,
} from "@/components/SectionContact/SectionContact";
import PatronsSlider from "@/features/PatronsSlider/PatronsSlider";

type SectionLabels = {
  title: string;
  contact: SectionContactLabels;
};

const SECTION_LABELS: SectionLabels = {
  title: "Akademia Piłki Ręcznej",
  contact: {
    name: "Treningi Piłki ręcznej",
    address: "ul. Sportowa 1, 00-001 Warszawa",
    phone: "123 456 789",
    email: "biuro@ksbbystra.pl",
  },
};

const Section = () => {
  const theme = useTheme();

  return (
    <S.ViewWrapper>
      <LargeGapSection>
        <Typography variant="h2" color={theme.palette.secondary.main}>
          {SECTION_LABELS.title}
        </Typography>

        <SmallGapSection>
          <LabelWithBackgroundPattern label="O nas" />
          <Typography variant="body1">{LOREM_IPSUM}</Typography>
        </SmallGapSection>

        <SmallGapSection>
          <LabelWithBackgroundPattern label="Dołącz do nas" />
          <SectionApply />
        </SmallGapSection>

        <SmallGapSection>
          <LabelWithBackgroundPattern label="Kontakt" />
          <SectionContact labels={SECTION_LABELS.contact} />
        </SmallGapSection>

        <SmallGapSection>
          <LabelWithBackgroundPattern label="Zostań patronem" />
          <Typography variant="body1">{LOREM_IPSUM}</Typography>
          <PatronsSlider />
        </SmallGapSection>
      </LargeGapSection>
    </S.ViewWrapper>
  );
};

export default Section;
