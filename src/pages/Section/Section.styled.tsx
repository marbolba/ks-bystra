import { styled } from "@mui/material/styles";

const ViewWrapper = styled("div")`
  padding: 120px 80px;
`;

const BackToHomeWrapper = styled("div")`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const SectionsWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;

export default { ViewWrapper, BackToHomeWrapper, SectionsWrapper };
