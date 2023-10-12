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

export type SectionLabels = {
  title: string;
  contact: SectionContactLabels;
  aboutUs: string;
  becomePatron: string;
};

type Props = {
  labels: SectionLabels;
};
const Section = ({ labels }: Props) => {
  const theme = useTheme();

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
          <Typography variant="body1">{LOREM_IPSUM}</Typography>
          <PatronsSlider />
        </SmallGapSection>
      </LargeGapSection>
    </S.ViewWrapper>
  );
};

export default Section;
