import SmallGapSection from "@/components/SmallGapSection/SmallGapSection";
import { TextField } from "@mui/material";

type Props = {
  phoneNumber: string;
  email: string;
  onChangeHandler: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

const FormStep2 = ({ phoneNumber, email, onChangeHandler }: Props) => (
  <SmallGapSection>
    <TextField
      label="Numer telefonu"
      name="phoneNumber"
      onChange={(e) => onChangeHandler(e)}
      required
      variant="outlined"
      color="secondary"
      type="tel"
      fullWidth
      value={phoneNumber}
    />
    <TextField
      label="E-mail"
      name="email"
      onChange={(e) => onChangeHandler(e)}
      required
      variant="outlined"
      color="secondary"
      type="email"
      value={email}
      fullWidth
    />
  </SmallGapSection>
);

export default FormStep2;
