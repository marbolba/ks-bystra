import S from "./MediumGapSection.styled";

type Props = {
  alignItems?: string;
  fullWidth?: boolean;
  children: React.ReactNode;
};

const MediumGapSection = ({ children, alignItems, fullWidth }: Props) => (
  <S.MediumGapSection alignItems={alignItems} fullWidth={fullWidth}>
    {children}
  </S.MediumGapSection>
);

export default MediumGapSection;
