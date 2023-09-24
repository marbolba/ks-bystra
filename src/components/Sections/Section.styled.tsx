import styled from "@emotion/styled";

const SectionWrapper = styled.div`
  width: 400px;
  height: 290px;
  padding: 24px;

  display: flex;
  align-items: center;
  flex-direction: column;

  align-items: center;
  gap: 12px;
  border: 1px solid ${({ theme }) => theme.palette.primary};
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
const ActionButton = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  color: ${({ theme }) => theme.palette.primary};
`;

export default { SectionWrapper, Title, Description, ActionButton };
