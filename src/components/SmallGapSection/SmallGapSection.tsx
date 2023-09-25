import S from "./SmallGapSection.styled";

type Props = { children: React.ReactNode };

const SmallGapSection = ({ children }: Props) => (
  <S.SmallGapSection>{children}</S.SmallGapSection>
);

export default SmallGapSection;
