import { Typography } from "@mui/material";
import SmallGapSection from "../SmallGapSection/SmallGapSection";
import S from "./Footer.styled";
import IconWithText from "../IconWithText/IconWithText";
import TelephoneIcon from "@/assets/icons/TelephoneIcon";
import EmailIcon from "@/assets/icons/EmailIcon";
import SocialMedias from "../SocialMedias/SocialMedias";

const Footer = () => {
  return (
    <S.FooterWrapper>
      <SmallGapSection>
        <S.ContactDetailsWrapper>
          <S.AddressAndContactWrapper>
            <Typography variant="h6">Klub Sportowy Bystra</Typography>
            <Typography variant="body1">
              ul. Kowalska 1843-360 Bystra
            </Typography>
            <IconWithText icon={<TelephoneIcon />} text="+48 508 858 590" />
            <IconWithText icon={<EmailIcon />} text="biuro@ksbbystra.pl" />
          </S.AddressAndContactWrapper>
          <S.SocialMediasContainer>
            <Typography variant="h4">Znajdź nas na</Typography>
            <SocialMedias />
          </S.SocialMediasContainer>
        </S.ContactDetailsWrapper>

        <Typography variant="body1" align="center">
          Oficjalna strona internetowa Klubu Sportowego Bystra.© Wszelkie prawa
          zastrzeżone.
        </Typography>
      </SmallGapSection>
    </S.FooterWrapper>
  );
};

export default Footer;
