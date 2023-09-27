import SmallGapSection from "@/components/SmallGapSection/SmallGapSection";
import { TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

type Props = {
  name: string;
  surname: string;
  birthDate: Date | null;
  onChangeHandler: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

const FormStep1 = ({ name, surname, birthDate, onChangeHandler }: Props) => (
  <SmallGapSection>
    <TextField
      label="Imię"
      name="name"
      onChange={(e) => onChangeHandler(e)}
      required
      variant="outlined"
      color="secondary"
      type="text"
      value={name}
    />
    <TextField
      label="Nazwisko"
      name="surname"
      onChange={(e) => onChangeHandler(e)}
      required
      variant="outlined"
      color="secondary"
      type="text"
      value={surname}
      fullWidth
    />
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Data urodzenia"
        value={birthDate}
        onChange={(selectedDate) =>
          onChangeHandler({
            target: {
              name: "birthDate",
              value: selectedDate?.toISOString(),
            },
          } as unknown as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)
        }
      />
    </LocalizationProvider>
  </SmallGapSection>
);

export default FormStep1;
