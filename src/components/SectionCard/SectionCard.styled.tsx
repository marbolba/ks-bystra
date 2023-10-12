import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const SportSectionWrapper = styled("div")`
  width: 399px;
  height: 282px;
  padding: 24px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  align-items: center;
  gap: 12px;
  border: 1px solid ${({ theme }) => theme.palette.primary.main};

  border-radius: 4px;
  box-shadow: 2px 4px 16px 0px rgba(5, 45, 117, 0.1);

  &:hover {
    box-shadow: 2px 4px 16px 0px rgba(5, 45, 117, 0.1);
  }

  &:before {
    content: "";
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    opacity: 0.25;

    background-image: url("images/Sections.png");
    background-position: center;
    position: absolute;
  }
`;

const Title = styled(Typography)`
  font-size: 34px;
  font-weight: 400;
  line-height: 48px;
  letter-spacing: 0.085px;
  background: ${({ theme }) => theme.palette.primary.main};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Description = styled(Typography)`
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.035px;
  color: ${({ theme }) => theme.palette.text.primary};
`;

const ActionButtonWrapper = styled("div")`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const ActionButton = styled(Typography)`
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  color: ${({ theme }) => theme.palette.text.primary};
`;

export default {
  SportSectionWrapper,
  Title,
  Description,
  ActionButtonWrapper,
  ActionButton,
};
