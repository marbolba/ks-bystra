import { Checkbox, Typography } from "@mui/material";
import React from "react";
import S from "./Checkboxes.styled";
import SmallGapSection from "../SmallGapSection/SmallGapSection";

type Option = {
  label: string;
  value: string;
};

type Props = {
  name: string;
  values: string[];
  options: Option[];
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

const Checkboxes = ({ name, values, options, onChange }: Props) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentlySelected = values;
    const index = currentlySelected.findIndex(
      (value) => value === e.target.value
    );
    if (index === -1) {
      currentlySelected.push(e.target.value);
    } else {
      currentlySelected.splice(index, 1);
    }

    onChange({
      target: {
        name,
        value: currentlySelected,
      },
    } as unknown as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>);
  };
  return (
    <SmallGapSection>
      {options.map((option, idx) => (
        <S.OptionWrapper key={idx}>
          <Checkbox
            checked={values.some((value) => value === option.value)}
            onChange={onChangeHandler}
            value={option.value}
            name={name}
          />
          <Typography>{option.label}</Typography>
        </S.OptionWrapper>
      ))}
    </SmallGapSection>
  );
};

export default Checkboxes;
