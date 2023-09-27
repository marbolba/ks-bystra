import { styled } from "@mui/material/styles";
import { Stepper } from "@mui/material";

const StyledStepper = styled(Stepper)`
  width: 600px;
`;

const StyledForm = styled("form")`
  width: 408px;
`;

const ConsentWrapper = styled("div")`
  display: flex;
  width: 100%;
  gap: 8px;
  align-items: center;
`;

export default {
  Stepper: StyledStepper,
  Form: StyledForm,
  ConsentWrapper,
};
