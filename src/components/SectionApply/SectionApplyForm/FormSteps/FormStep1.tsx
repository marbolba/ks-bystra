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
  <>
    <TextField
      label="Imię"
      name="name"
      onChange={(e) => onChangeHandler(e)}
      required
      variant="outlined"
      color="secondary"
      type="text"
      fullWidth
      value={name}
      //   error={emailError}
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
      // error={passwordError}
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
              value: selectedDate,
            },
          } as unknown as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)
        }
      />
    </LocalizationProvider>
  </>
);

export default FormStep1;
