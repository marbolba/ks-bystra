import SportSection from "@/components/SportSection/SportSection";
import S from "./TeamView.styled";
import LargeGapSection from "@/components/LargeGapSection/LargeGapSection";
import LabelWithBackgroundPattern from "@/components/LabelWithBackgroundPattern/LabelWithBackgroundPattern";
import SmallGapSection from "@/components/SmallGapSection/SmallGapSection";
import SectionApplyForm from "@/components/SectionApplyForm/SectionApplyForm";

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
          <SectionApplyForm />
        </SmallGapSection>
      </LargeGapSection>
    </S.ViewWrapper>
  );
};

export default TeamView;
