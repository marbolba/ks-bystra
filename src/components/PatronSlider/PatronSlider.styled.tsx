import { styled } from "@mui/material/styles";

const SliderContainer = styled("div")`
  width: 100%;
  overflow: hidden;
`;

const SliderContent = styled("div")<{ tickTimeMs: number }>`
  display: flex;
  gap: 80px;
  margin-right: 80px;
  align-items: center;
  transition: transform ${(props) => props.tickTimeMs}ms linear;
`;

const SlideItem = styled("div")`
  max-width: 300px;
  max-height: 150px;
`;

export default { SliderContainer, SliderContent, SlideItem };
