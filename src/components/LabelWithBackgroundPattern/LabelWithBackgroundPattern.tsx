import TextBackgroundPattern from "@/assets/icons/TextBackgroundPattern";
import S from "./LabelWithBackgroundPattern.styled";

type Props = { label: string };

const LabelWithBackgroundPattern = ({ label }: Props) => {
  return (
    <S.ContentWrapper>
      <S.TextBackgroundPatternWrapper>
        <TextBackgroundPattern />
      </S.TextBackgroundPatternWrapper>
      <S.Label>{label}</S.Label>
    </S.ContentWrapper>
  );
};

export default LabelWithBackgroundPattern;
