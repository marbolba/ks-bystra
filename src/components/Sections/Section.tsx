import S from "./Section.styled";

type Props = {
  title: string;
  description: string;
  action: string;
};

const Section = ({ title, description, action }: Props) => {
  return (
    <S.SectionWrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.ActionButton>{action}</S.ActionButton>
    </S.SectionWrapper>
  );
};

export default Section;
