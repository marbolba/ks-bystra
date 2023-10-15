import KsBystraLogo from "@/assets/icons/KsBystraLogo";
import S from "./Header.styled";
import MainSponsor from "@/assets/icons/MainSponsor";
import SocialMedias from "../SocialMedias/SocialMedias";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";

type HeaderLabels = {
  titleLine1: string;
  titleLine2: string;
};

const labels: HeaderLabels = {
  titleLine1: "Klub Sportowy",
  titleLine2: "Bystra",
};

const Header = () => {
  const theme = useTheme();

  return (
    <S.Header>
      <S.BrandingWrapper>
        <KsBystraLogo />
        <S.PageTitleWrapper>
          <Typography variant="h3" color={theme.palette.common.white}>
            {labels.titleLine1}
          </Typography>
          <Typography variant="h3" color={theme.palette.common.white}>
            {labels.titleLine2}
          </Typography>
        </S.PageTitleWrapper>
      </S.BrandingWrapper>
      <MainSponsor />
      <S.SocialMediasContainer>
        <SocialMedias />
      </S.SocialMediasContainer>
    </S.Header>
  );
};

export default Header;
