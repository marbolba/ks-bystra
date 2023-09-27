import Button from "@mui/material/Button";
import { useState } from "react";
import { Step, StepLabel, Stepper } from "@mui/material";
import FormStep1 from "./FormSteps/FormStep1";

const STEPS = ["Dane osobowe klubowicza", "Dane kontaktowe", "Wybór sekcji"];

const SectionApplyForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    birthDate: null,
  });

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

    // setEmailError(false);
    // setPasswordError(false);

    // if (formData.name == "") {
    //   setEmailError(true);
    // }
    // if (formData.surname == "") {
    //   setPasswordError(true);
    // }

    console.log(formData);
  };

  return (
    <>
      <Stepper activeStep={activeStep}>
        {STEPS.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <form>
        {activeStep === 0 && (
          <FormStep1
            name={formData.name}
            surname={formData.surname}
            birthDate={formData.birthDate}
            onChangeHandler={handleChange}
          />
        )}
      </form>

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
    </>
  );
};

export default SectionApplyForm;
