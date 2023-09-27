import { styled } from "@mui/material/styles";

type Props = {
  alignItems?: string;
  fullWidth?: boolean;
};

const MediumGapSection = styled("div")<Props>`
  display: flex;
  flex-direction: column;
  gap: 80px;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  align-items: ${(props) => props.alignItems || "flex-start"};
`;

export default { MediumGapSection };
