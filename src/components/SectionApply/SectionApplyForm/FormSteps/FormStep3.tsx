import Checkboxes from "@/components/Checkboxes/Checkboxes";
import MediumGapSection from "@/components/MediumGapSection/MediumGapSection";
import RadioButtons from "@/components/RadioButtons/RadioButtons";
import SmallGapSection from "@/components/SmallGapSection/SmallGapSection";
import { Typography } from "@mui/material";

const AVAILABLE_SEX = [
  {
    label: "Kobieta",
    value: "woman",
  },
  {
    label: "Mężczyzna",
    value: "men",
  },
];

const AVAILABLE_SECTIONS = [
  {
    label: "Akademia piłki ręcznej",
    value: "Akademia piłki ręcznej",
  },
  {
    label: "Piłka nożna",
    value: "Piłka nożna",
  },
  {
    label: "Girls Academy",
    value: "Girls Academy",
  },
  {
    label: "Akademia Małego Bystrzaka",
    value: "Akademia Małego Bystrzaka",
  },
  {
    label: "Koszykówka",
    value: "Koszykówka",
  },
];

type Props = {
  sex: string;
  section: string[];
  onChangeHandler: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

const FormStep3 = ({ sex, section, onChangeHandler }: Props) => (
  <MediumGapSection>
    <SmallGapSection>
      <Typography variant="body1">Wybierz płeć</Typography>
      <RadioButtons
        name="sex"
        value={sex}
        options={AVAILABLE_SEX}
        onChange={onChangeHandler}
      />
    </SmallGapSection>
    <SmallGapSection>
      <Typography variant="body1">Wybierz sekcję</Typography>
      <Checkboxes
        name="section"
        values={section}
        options={AVAILABLE_SECTIONS}
        onChange={onChangeHandler}
      />
    </SmallGapSection>
  </MediumGapSection>
);

export default FormStep3;
