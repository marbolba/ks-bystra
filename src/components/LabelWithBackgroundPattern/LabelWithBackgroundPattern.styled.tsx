import { styled } from "@mui/material/styles";

const ContentWrapper = styled("div")`
  position: relative;
  z-index: 1;
`;

const TextBackgroundPatternWrapper = styled("div")`
  position: absolute;
  height: max-content;
  top: 0;
  bottom: 0;
  left: -82px;
  margin: auto 0;
  z-index: 0;
`;

const Label = styled("div")`
  position: relative;
  color: #b79751;
  font-size: 48px;
  font-weight: 400;
  line-height: 64px;
  z-index: 1;
`;

export default {
  ContentWrapper,
  TextBackgroundPatternWrapper,
  Label,
};
