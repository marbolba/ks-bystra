import KsBystraLogo from "@/assets/icons/KsBystraLogo";
import S from "./Header.styled";
import MainSponsor from "@/assets/icons/MainSponsor";
import { LABELS } from "@/assets/labels/labels";
import SocialMedias from "../SocialMedias/SocialMedias";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";

const Header = () => {
  const theme = useTheme();

  return (
    <S.Header>
      <S.BrandingWrapper>
        <KsBystraLogo />
        <S.PageTitleWrapper>
          <Typography variant="h3" color={theme.palette.common.white}>
            {LABELS.pageTitleLine1}
          </Typography>
          <Typography variant="h3" color={theme.palette.common.white}>
            {LABELS.pageTitleLine2}
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
