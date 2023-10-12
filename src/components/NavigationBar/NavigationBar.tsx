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
    link: "/handball#JoinUs",
  },
  {
    label: "zostań patronem",
    link: "/handball",
  },
  {
    label: "kontakt",
    link: "/handball",
  },
  {
    label: "lokalizacja",
    link: "/handball",
  },
  {
    label: "sklep",
    link: "/handball",
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
