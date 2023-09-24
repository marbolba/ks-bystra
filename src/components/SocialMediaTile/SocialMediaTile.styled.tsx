import { COLOR } from "@/theme/colors";
import styled from "@emotion/styled";

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  width: 43px;
  height: 43px;

  line-height: 0;
  border: 1px solid ${COLOR.WHITE};
  border-radius: 4px;
  background: none;

  transition: all 0.01s linear;
  &:hover {
    border: 2px solid ${COLOR.WHITE};
    background: "linear-gradient(180deg, #2B65CC 0%, #133C86 100%)";
  }
  &:active {
    border: none;
    background: "linear-gradient(180deg, #1648A3 0%, #052D75 100%)";
  }
`;

export default { IconWrapper };
