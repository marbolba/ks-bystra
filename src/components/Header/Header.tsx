// home aka landing page
import KsBystraLogo from "@/assets/images/KsBystraLogo";
import S from "./Header.styled";
import MainSponsor from "@/assets/images/MainSponsor";
import SocialMediaTile from "@/components/SocialMediaTile/SocialMediaTile";
import FacebookIcon from "@/assets/images/FacebookIcon";
import InstagramIcon from "@/assets/images/InstagramIcon";
import TikTokIcon from "@/assets/images/TikTokIcon";
import YouTubeIcon from "@/assets/images/YouTubeIcon";
import { LABELS } from "@/assets/labels/labels";

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
      <S.SocialMediaWrapper>
        <S.SocialMediaHorizontalWrapper>
          <SocialMediaTile icon={<InstagramIcon />} />
          <SocialMediaTile icon={<TikTokIcon />} />
        </S.SocialMediaHorizontalWrapper>
        <S.SocialMediaHorizontalWrapper>
          <SocialMediaTile icon={<YouTubeIcon />} />
          <SocialMediaTile icon={<FacebookIcon />} />
        </S.SocialMediaHorizontalWrapper>
      </S.SocialMediaWrapper>
    </S.Header>
  );
};

export default Header;
