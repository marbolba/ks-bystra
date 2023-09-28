import S from "./SocialMedias.styled";
import SocialMediaTile from "../SocialMediaTile/SocialMediaTile";
import YouTubeIcon from "@/assets/images/YouTubeIcon";
import FacebookIcon from "@/assets/images/FacebookIcon";
import InstagramIcon from "@/assets/images/InstagramIcon";
import TikTokIcon from "@/assets/images/TikTokIcon";

const SocialMedias = () => (
  <S.SocialMediasWrapper>
    <SocialMediaTile icon={<InstagramIcon />} />
    <SocialMediaTile icon={<TikTokIcon />} />
    <SocialMediaTile icon={<YouTubeIcon />} />
    <SocialMediaTile icon={<FacebookIcon />} />
  </S.SocialMediasWrapper>
);

export default SocialMedias;
