import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { SortSelectProps, sortValues } from "./interfaces";
import { useStyles } from "./styles";
import CustomContainer from "../Container";
import { SelectChangeEvent } from "@mui/material";

const SortSelect: React.FC<SortSelectProps> = ({
  value,
  options,
  onChange,
}) => {
  const classes = useStyles();

  const handleSortChange = (event: SelectChangeEvent<string>) => {
    onChange(event.target.value as sortValues);
  };

  return (
    <CustomContainer>
      <FormControl className={classes.form}>
        <InputLabel id="sort-label">Sort By</InputLabel>
        <Select
          labelId="sort-label"
          id="sort-select"
          value={value}
          onChange={handleSortChange}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </CustomContainer>
  );
};

export default SortSelect;
