import Button from "@mui/material/Button";
import { useState } from "react";
import { Step, StepLabel } from "@mui/material";
import FormStep1 from "./FormSteps/FormStep1";
import FormStep2 from "./FormSteps/FormStep2";
import S from "./SectionApplyForm.styled";
import MediumGapSection from "@/components/MediumGapSection/MediumGapSection";

const STEPS = ["Dane osobowe klubowicza", "Dane kontaktowe", "Wybór sekcji"];
const DEFAULT_FORM_DATA = {
  name: "",
  surname: "",
  birthDate: null,
  phoneNumber: "",
  email: "",
};

const SectionApplyForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  const handleSubmit = (event: any) => {
    event.preventDefault();

    // TODO validate form

    console.log(formData);
  };

  return (
    <MediumGapSection alignItems="center" fullWidth>
      <S.Stepper activeStep={activeStep} alternativeLabel>
        {STEPS.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </S.Stepper>
      <S.Form>
        {activeStep === 0 && (
          <FormStep1
            name={formData.name}
            surname={formData.surname}
            birthDate={formData.birthDate}
            onChangeHandler={handleChange}
          />
        )}
        {activeStep === 1 && (
          <FormStep2
            phoneNumber={formData.phoneNumber}
            email={formData.email}
            onChangeHandler={handleChange}
          />
        )}
      </S.Form>

      {activeStep < STEPS.length ? (
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => setActiveStep((prevActiveStep) => prevActiveStep + 1)}
        >
          DALEJ
        </Button>
      ) : (
        <Button variant="outlined" color="secondary" onClick={handleSubmit}>
          SUBMIT
        </Button>
      )}
    </MediumGapSection>
  );
};

export default SectionApplyForm;
