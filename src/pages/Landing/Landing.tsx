/* eslint-disable react/jsx-key */
import SectionCard from "@/components/SectionCard/SectionCard";
import S from "./Landing.styled";
import LargeGapSection from "@/components/LargeGapSection/LargeGapSection";
import LabelWithBackgroundPattern from "@/components/LabelWithBackgroundPattern/LabelWithBackgroundPattern";
import SmallGapSection from "@/components/SmallGapSection/SmallGapSection";
import SectionApply from "@/components/SectionApply/SectionApply";
import { Typography } from "@mui/material";
import { LOREM_IPSUM } from "@/assets/labels/loremIpsum";
import PatronsSlider from "@/features/PatronsSlider/PatronsSlider";

const SECTIONS = [
  {
    title: "PILKA RECZNA",
    description:
      "Jesteśmy najsilniejszym ośrodkiem piłki ręcznej w regionie, a nasza praca poparta została licznymi sukcesami – z zaszczytem powołań do kadr narodowych w piłce ręcznej dla zawodniczek sesji na czele.",
    action: "czytaj dalej>",
  },
  {
    title: "PILKA RECZNA",
    description:
      "Jesteśmy najsilniejszym ośrodkiem piłki ręcznej w regionie, a nasza praca poparta została licznymi sukcesami – z zaszczytem powołań do kadr narodowych w piłce ręcznej dla zawodniczek sesji na czele.",
    action: "czytaj dalej>",
  },
  {
    title: "PILKA RECZNA",
    description:
      "Jesteśmy najsilniejszym ośrodkiem piłki ręcznej w regionie, a nasza praca poparta została licznymi sukcesami – z zaszczytem powołań do kadr narodowych w piłce ręcznej dla zawodniczek sesji na czele.",
    action: "czytaj dalej>",
  },
  {
    title: "PILKA RECZNA",
    description:
      "Jesteśmy najsilniejszym ośrodkiem piłki ręcznej w regionie, a nasza praca poparta została licznymi sukcesami – z zaszczytem powołań do kadr narodowych w piłce ręcznej dla zawodniczek sesji na czele.",
    action: "czytaj dalej>",
  },
  {
    title: "PILKA RECZNA",
    description:
      "Jesteśmy najsilniejszym ośrodkiem piłki ręcznej w regionie, a nasza praca poparta została licznymi sukcesami – z zaszczytem powołań do kadr narodowych w piłce ręcznej dla zawodniczek sesji na czele.",
    action: "czytaj dalej>",
  },
  {
    title: "PILKA RECZNA",
    description:
      "Jesteśmy najsilniejszym ośrodkiem piłki ręcznej w regionie, a nasza praca poparta została licznymi sukcesami – z zaszczytem powołań do kadr narodowych w piłce ręcznej dla zawodniczek sesji na czele.",
    action: "czytaj dalej>",
  },
];

const Landing = () => {
  return (
    <S.ViewWrapper>
      <LargeGapSection>
        <S.SectionsWrapper>
          {SECTIONS.map(({ title, description, action }, idx) => (
            <SectionCard
              title={title}
              description={description}
              action={action}
              key={idx}
            />
          ))}
        </S.SectionsWrapper>

        <SmallGapSection>
          <LabelWithBackgroundPattern label="Dołącz do nas" />
          <Typography variant="body1">{LOREM_IPSUM}</Typography>
          <SectionApply />
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

export default Landing;
