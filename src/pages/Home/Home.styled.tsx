import { COLOR } from "@/theme/colors";
import styled from "@emotion/styled";
const GlobalBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${COLOR.WHITE};
  display: flex;
  justify-content: center;
`;

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  background-color: ${COLOR.WHITE};
`;

export default { GlobalBackground, PageWrapper };
