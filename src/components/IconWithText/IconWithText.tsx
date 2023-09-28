import { Typography } from "@mui/material";
import S from "./IconWithText.styled";

type Props = {
  icon: React.ReactNode;
  text: string;
};

const IconWithText = ({ icon, text }: Props) => (
  <S.IconWithTextWrapper>
    {icon}
    <Typography variant="body1">{text}</Typography>
  </S.IconWithTextWrapper>
);

export default IconWithText;
