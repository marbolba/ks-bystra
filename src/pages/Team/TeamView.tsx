/* eslint-disable react/jsx-key */
import SportSection from "@/components/SportSection/SportSection";
import S from "./TeamView.styled";
import LargeGapSection from "@/components/LargeGapSection/LargeGapSection";
import LabelWithBackgroundPattern from "@/components/LabelWithBackgroundPattern/LabelWithBackgroundPattern";
import SmallGapSection from "@/components/SmallGapSection/SmallGapSection";
import SectionApply from "@/components/SectionApply/SectionApply";
import { Typography } from "@mui/material";
import { LOREM_IPSUM } from "@/assets/labels/loremIpsum";
import PatronSlider from "@/components/PatronSlider/PatronSlider";

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

const TeamView = () => {
  return (
    <S.ViewWrapper>
      <LargeGapSection>
        <S.SectionsWrapper>
          {SECTIONS.map(({ title, description, action }, idx) => (
            <SportSection
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
          <PatronSlider
            patronsImages={[
              <img src="src/assets/images/sponsor1.png"></img>,
              <img src="src/assets/images/sponsor2.png"></img>,
              <img src="src/assets/images/sponsor3.png"></img>,
              <img src="src/assets/images/sponsor4.png"></img>,
              <img src="src/assets/images/sponsor5.png"></img>,
            ]}
          ></PatronSlider>
        </SmallGapSection>
      </LargeGapSection>
    </S.ViewWrapper>
  );
};

export default TeamView;
