import { Typography } from "@mui/material";
import S from "./IconWithText.styled";

type Props = {
  icon: React.ReactNode;
  text: string;
  color: string;
};

const IconWithText = ({ icon, text, color }: Props) => (
  <S.IconWithTextWrapper>
    {icon}
    <Typography variant="body1" color={color}>
      {text}
    </Typography>
  </S.IconWithTextWrapper>
);

export default IconWithText;
