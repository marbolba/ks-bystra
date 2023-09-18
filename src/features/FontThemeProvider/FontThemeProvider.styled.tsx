import styled from "@emotion/styled";

const FontTheme = styled.div`
  color: ${({ theme }) => theme.font.color};
  font-family: ${({ theme }) => theme.font.fontFamily};
  font-size: ${({ theme }) => theme.font.fontSize};
  font-weight: ${({ theme }) => theme.font.fontWeight};
`;

export default { FontTheme };
