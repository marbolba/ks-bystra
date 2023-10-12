import S from "./SocialMedias.styled";
import SocialMediaTile from "../SocialMediaTile/SocialMediaTile";
import YouTubeIcon from "@/assets/icons/YouTubeIcon";
import FacebookIcon from "@/assets/icons/FacebookIcon";
import InstagramIcon from "@/assets/icons/InstagramIcon";
import TikTokIcon from "@/assets/icons/TikTokIcon";

const SocialMedias = () => (
  <S.SocialMediasWrapper>
    <SocialMediaTile icon={<InstagramIcon />} />
    <SocialMediaTile icon={<TikTokIcon />} />
    <SocialMediaTile icon={<YouTubeIcon />} />
    <SocialMediaTile icon={<FacebookIcon />} />
  </S.SocialMediasWrapper>
);

export default SocialMedias;
