import styled from "@emotion/styled";

const SectionWrapper = styled.div`
  width: 400px;
  height: 290px;
  padding: 24px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  align-items: center;
  gap: 12px;
  border: 1px solid ${({ theme }) => theme.palette.primary};

  border-radius: 4px;
  box-shadow: 2px 4px 16px 0px rgba(5, 45, 117, 0.1);

  &:hover {
    box-shadow: 2px 4px 16px 0px rgba(5, 45, 117, 0.1);
  }

  &:before {
    content: "";
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    opacity: 0.25;

    background-image: url("src/assets/images/Sections.png");
    background-size: cover;
    background-position: center;
    position: absolute;
  }
`;

const Title = styled.p`
  font-size: 34px;
  font-weight: 400;
  line-height: 48px;
  letter-spacing: 0.085px;
  background: ${({ theme }) => theme.gradient.blue};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.035px;
  color: ${({ theme }) => theme.palette.textBlack};
`;

const ActionButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const ActionButton = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  color: ${({ theme }) => theme.palette.primary};
`;

export default {
  SectionWrapper,
  Title,
  Description,
  ActionButtonWrapper,
  ActionButton,
};
