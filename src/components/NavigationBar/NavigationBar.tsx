import { Typography } from "@mui/material";
import S from "./NavigationBar.styled";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const NAV_ITEMS = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Dołącz do nas ",
    link: "#JoinUs",
  },
  {
    label: "zostań patronem",
    link: "#patron",
  },
  {
    label: "kontakt",
    link: "#contact",
  },
  {
    label: "lokalizacja",
    link: "#location",
  },
  {
    label: "sklep",
    link: "/shop",
  },
];

const NavigationBar = () => {
  const navigate = useNavigate();

  const activeIdx = 1;

  const onClickHandler = useCallback(
    (idx: number) => navigate(NAV_ITEMS[idx].link),
    []
  );

  return (
    <S.NavBarWrapper>
      {NAV_ITEMS.map((item, idx) => (
        <S.ItemContainer
          isActive={idx === activeIdx}
          onClick={() => onClickHandler(idx)}
          key={idx}
        >
          <Typography variant="button" paragraph marginBottom={0}>
            {item.label}
          </Typography>
        </S.ItemContainer>
      ))}
    </S.NavBarWrapper>
  );
};

export default NavigationBar;
