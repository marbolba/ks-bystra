import S from "./LargeGapSection.styled";

type Props = { children: React.ReactNode };

const LargeGapSection = ({ children }: Props) => (
  <S.LargeGapSection>{children}</S.LargeGapSection>
);

export default LargeGapSection;
