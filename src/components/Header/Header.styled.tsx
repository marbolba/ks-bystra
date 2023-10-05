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

const SocialMediasContainer = styled("div")`
  width: 130px;
`;

export default {
  Header,
  BrandingWrapper,
  PageTitleWrapper,
  SocialMediasContainer,
};
