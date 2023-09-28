import { styled } from "@mui/material";

const FooterWrapper = styled("div")`
  padding: 40px 80px;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

const ContactDetailsWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
`;

const AddressAndContactWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: start;
`;

const SocialMediasContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 275px;
`;

export default {
  FooterWrapper,
  ContactDetailsWrapper,
  AddressAndContactWrapper,
  SocialMediasContainer,
};
