import { Radio, Typography } from "@mui/material";
import React from "react";
import S from "./RadioButtons.styled";
import SmallGapSection from "../SmallGapSection/SmallGapSection";

type Option = {
  label: string;
  value: string;
};

type Props = {
  name: string;
  value: string;
  options: Option[];
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

const RadioButtons = ({ name, value, options, onChange }: Props) => (
  <SmallGapSection>
    {options.map((option, idx) => (
      <S.OptionWrapper key={idx}>
        <Radio
          checked={value === option.value}
          onChange={onChange}
          value={option.value}
          name={name}
        />
        <Typography>{option.label}</Typography>
      </S.OptionWrapper>
    ))}
  </SmallGapSection>
);

export default RadioButtons;
