import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Header = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 48px;
  background: ${({ theme }) => theme.palette.primary.main};
  gap: 120px;
`;

const BrandingWrapper = styled("div")`
  display: flex;
  align-items: center;
  flex: 1;
`;

const PageTitleWrapper = styled("div")`
  display: flex;
  flex-direction: column;
`;

const PageTitle = styled(Typography)`
  font-size: 34px;
  font-weight: 400;
  line-height: 48px;
  letter-spacing: 0.085px;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

const SocialMediaWrapper = styled("div")`
  display: flex;
  gap: 16px;
  flex-direction: column;
`;
const SocialMediaHorizontalWrapper = styled("div")`
  display: flex;
  gap: 16px;
`;

export default {
  Header,
  BrandingWrapper,
  PageTitleWrapper,
  PageTitle,
  SocialMediaWrapper,
  SocialMediaHorizontalWrapper,
};
