import Section from "@/components/Sections/Section";
import S from "./TeamView.styled";

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
    <S.SectionsWrapper>
      {SECTIONS.map(({ title, description, action }) => (
        <Section title={title} description={description} action={action} />
      ))}
    </S.SectionsWrapper>
  );
};

export default TeamView;
