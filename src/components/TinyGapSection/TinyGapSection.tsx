import S from "./TinyGapSection.styled";

type Props = { children: React.ReactNode };

const TinyGapSection = ({ children }: Props) => (
  <S.TinyGapSection>{children}</S.TinyGapSection>
);

export default TinyGapSection;
