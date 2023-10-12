import { styled } from "@mui/material";

const NavBarWrapper = styled("div")`
  width: 100%;
  padding: 20px 48px;

  display: flex;
  gap: 40px;

  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

type ItemContainerProps = { isActive: boolean };
const ItemContainer = styled("div")<ItemContainerProps>`
  display: flex;
  padding: ${(props) => (props.isActive ? "8px 16px" : "28px 16px")};
  justify-content: center;
  flex-grow: 1;
  cursor: pointer;
  height: fit-content;

  ${(props) =>
    props.isActive
      ? {
          padding: "8px 16px",
          color: props.theme.palette.common.white,
          background: props.theme.palette.primary.main,
          boxShadow: "2px 4px 8px 0px rgba(6, 47, 121, 0.15)",
          borderRadius: "4px",
        }
      : null}
`;

export default { NavBarWrapper, ItemContainer };
