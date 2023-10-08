import { styled } from "@mui/material";

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

const CoachContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 24px;
  text-align: center;
`;

export default {
  ContactDetailsWrapper,
  AddressAndContactWrapper,
  CoachContainer,
};
