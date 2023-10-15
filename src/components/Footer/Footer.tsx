import { Typography } from "@mui/material";
import SmallGapSection from "../SmallGapSection/SmallGapSection";
import S from "./Footer.styled";
import IconWithText from "../IconWithText/IconWithText";
import TelephoneIcon from "@/assets/icons/TelephoneIcon";
import EmailIcon from "@/assets/icons/EmailIcon";
import SocialMedias from "../SocialMedias/SocialMedias";
import { useTheme } from "@mui/material/styles";
import useJsonTemplates from "@/hooks/useJsonTemplates";
import { useCallback, useEffect, useState } from "react";
import SpinnerScreen from "../SpinnerScreen/SpinnerScreen";

type FooterLabels = {
  title: string;
  address: string;
  phone: string;
  email: string;
  copyrightNotice: string;
};

export type FooterData = {
  config: {};
  labels: FooterLabels;
};

const Footer = () => {
  const theme = useTheme();

  const { fetchFooterData } = useJsonTemplates();
  const [footerData, setFooterData] = useState<FooterData | null>(null);

  const initializeFooter = useCallback(async () => {
    const sectionData = await fetchFooterData();
    setFooterData(sectionData);
  }, []);

  useEffect(() => {
    if (!footerData) {
      initializeFooter();
    }
  }, []);

  if (!footerData) {
    return <SpinnerScreen />;
  }
  const { labels } = footerData;

  return (
    <S.FooterWrapper>
      <SmallGapSection>
        <S.ContactDetailsWrapper>
          <S.AddressAndContactWrapper>
            <Typography variant="h4" color={theme.palette.common.white}>
              {labels.title}
            </Typography>
            <Typography variant="body1" color={theme.palette.common.white}>
              {labels.address}
            </Typography>
            <IconWithText
              icon={<TelephoneIcon />}
              color={theme.palette.common.white}
              text={labels.phone}
            />
            <IconWithText
              icon={<EmailIcon />}
              color={theme.palette.common.white}
              text={labels.email}
            />
          </S.AddressAndContactWrapper>
          <S.SocialMediasContainer>
            <Typography variant="h4" color={theme.palette.common.white}>
              Znajdź nas na
            </Typography>
            <SocialMedias />
          </S.SocialMediasContainer>
        </S.ContactDetailsWrapper>

        <Typography
          variant="body1"
          color={theme.palette.common.white}
          align="center"
        >
          {labels.copyrightNotice}
        </Typography>
      </SmallGapSection>
    </S.FooterWrapper>
  );
};

export default Footer;
