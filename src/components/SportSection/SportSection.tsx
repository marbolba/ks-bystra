import { useState } from "react";
import S from "./SportSection.styled";

type Props = {
  title: string;
  description: string;
  action: string;
};

const SportSection = ({ title, description, action }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  isHovered;
  return (
    <S.SportSectionWrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
          <S.ActionButtonWrapper>
            <S.ActionButton>{action}</S.ActionButton>
          </S.ActionButtonWrapper>
        </>
      ) : (
        <S.Title>{title}</S.Title>
      )}
    </S.SportSectionWrapper>
  );
};

export default SportSection;
