import S from "./MediumGapSection.styled";

type Props = { children: React.ReactNode };

const MediumGapSection = ({ children }: Props) => (
  <S.MediumGapSection>{children}</S.MediumGapSection>
);

export default MediumGapSection;
