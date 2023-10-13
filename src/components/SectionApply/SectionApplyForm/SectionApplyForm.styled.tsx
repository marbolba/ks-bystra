import { styled } from "@mui/material/styles";
import { Stepper } from "@mui/material";

const StyledStepper = styled(Stepper)`
  .MuiSvgIcon-root.Mui-active {
    padding: 3px;
    border-radius: 50%;
    border: 1px solid #1976d2;
    font-size: 31px;
    margin-block: -4px;
  }
`;

const StyledForm = styled("form")`
  width: 224px;
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
