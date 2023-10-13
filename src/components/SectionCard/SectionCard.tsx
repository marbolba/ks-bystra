import { useState } from "react";
import S from "./SectionCard.styled";
import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
  description: string;
  action: string;
  href: string;
};

const SectionCard = ({ title, description, action, href }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(href);
  };

  isHovered;
  return (
    <S.SportSectionWrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleOnClick}
    >
      {isHovered ? (
        <>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
          <S.ActionButtonWrapper>
            <S.ActionButton onClick={handleOnClick}>{action}</S.ActionButton>
          </S.ActionButtonWrapper>
        </>
      ) : (
        <S.Title>{title}</S.Title>
      )}
    </S.SportSectionWrapper>
  );
};

export default SectionCard;
