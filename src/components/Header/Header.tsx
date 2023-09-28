import KsBystraLogo from "@/assets/images/KsBystraLogo";
import S from "./Header.styled";
import MainSponsor from "@/assets/images/MainSponsor";
import { LABELS } from "@/assets/labels/labels";
import SocialMedias from "../SocialMedias/SocialMedias";

const Header = () => {
  return (
    <S.Header>
      <S.BrandingWrapper>
        <KsBystraLogo />
        <S.PageTitleWrapper>
          <S.PageTitle>{LABELS.pageTitleLine1}</S.PageTitle>
          <S.PageTitle>{LABELS.pageTitleLine2}</S.PageTitle>
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
