import Button from "@mui/material/Button";
import { useState } from "react";
import { Checkbox, Step, StepLabel, Typography } from "@mui/material";
import FormStep1 from "./FormSteps/FormStep1";
import FormStep2 from "./FormSteps/FormStep2";
import S from "./SectionApplyForm.styled";
import MediumGapSection from "@/components/MediumGapSection/MediumGapSection";
import FormStep3 from "./FormSteps/FormStep3";

const STEPS = ["Dane osobowe klubowicza", "Dane kontaktowe", "Wybór sekcji"];
const DEFAULT_FORM_DATA = {
  name: "",
  surname: "",
  birthDate: null,
  phoneNumber: "",
  email: "",
  sex: "",
  section: [],
  consent: false,
};

const SectionApplyForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log("set", { [event.target.name]: event.target.value });
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
        {activeStep === 2 && (
          <FormStep3
            sex={formData.sex}
            section={formData.section}
            onChangeHandler={handleChange}
          />
        )}
      </S.Form>

      {activeStep === 2 && (
        <S.ConsentWrapper>
          <Checkbox
            checked={formData.consent === true}
            onChange={() =>
              handleChange({
                target: {
                  name: "consent",
                  value: !formData.consent,
                },
              } as unknown as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)
            }
            value={formData.consent}
            name={"consent"}
          />
          <Typography variant="body1">
            Wyrażam zgodę na przetwarzanie moich danych osobowych podanych w
            powyższym formularzu w celu [CEL ZBIERANIA DANYCH] przez [DANE
            FIRMY] oraz przez podmioty trzecie.
          </Typography>
        </S.ConsentWrapper>
      )}

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
