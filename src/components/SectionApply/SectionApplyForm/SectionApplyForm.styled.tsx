import { styled } from "@mui/material/styles";
import { Stepper } from "@mui/material";

const StyledStepper = styled(Stepper)`
  width: 600px;
`;

const StyledForm = styled("form")`
  width: 408px;
`;

export default {
  Stepper: StyledStepper,
  Form: StyledForm,
};
