import styled from "@emotion/styled";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 48px;
  background: ${({ theme }) => theme.gradient.blue};
  gap: 120px;
`;

const BrandingWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const PageTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PageTitle = styled.span`
  font-size: 34px;
  font-weight: 400;
  line-height: 48px;
  letter-spacing: 0.085px;
  color: ${({ theme }) => theme.palette.contrastText};
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
`;
const SocialMediaHorizontalWrapper = styled.div`
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
