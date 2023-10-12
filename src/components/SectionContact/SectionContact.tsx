import { Typography } from "@mui/material";
import S from "./SectionContact.styled";
import IconWithText from "../IconWithText/IconWithText";
import TelephoneIcon from "@/assets/icons/TelephoneIcon";
import EmailIcon from "@/assets/icons/EmailIcon";
import { useTheme } from "@mui/material/styles";

export type SectionContactLabels = {
  name: string;
  address: string;
  phone: string;
  email: string;
};

type Props = {
  labels: SectionContactLabels;
};

const SectionContact = ({ labels }: Props) => {
  const theme = useTheme();
  return (
    <S.ContactDetailsWrapper>
      <S.AddressAndContactWrapper>
        <Typography variant="h4" color={theme.palette.primary.dark}>
          {labels.name}
        </Typography>
        <Typography variant="body1" color={theme.palette.primary.dark}>
          {labels.address}
        </Typography>
        <IconWithText
          icon={<TelephoneIcon fill={theme.palette.primary.dark} />}
          text={labels.phone}
          color={theme.palette.primary.dark}
        />
        <IconWithText
          icon={<EmailIcon fill={theme.palette.primary.dark} />}
          text={labels.email}
          color={theme.palette.primary.dark}
        />
      </S.AddressAndContactWrapper>
      <S.CoachContainer>
        <img src="images/coach1.png" />
        <Typography variant="body1" color={theme.palette.primary.dark}>
          Imię i nazwisko trenera
        </Typography>
      </S.CoachContainer>
    </S.ContactDetailsWrapper>
  );
};

export default SectionContact;
