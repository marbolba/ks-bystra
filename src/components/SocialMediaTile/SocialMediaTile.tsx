import S from "./SocialMediaTile.styled";

type Props = {
  icon: React.ReactNode;
};

const SocialMediaTile = ({ icon }: Props) => (
  <S.IconWrapper>{icon}</S.IconWrapper>
);

export default SocialMediaTile;
