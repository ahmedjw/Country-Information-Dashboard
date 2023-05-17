import { Box, Typography } from "@material-ui/core";
import React from "react";
import { CountryFieldProps } from "./interface";

const CountryField: React.FC<CountryFieldProps> = ({
  Styles,
  fieldName,
  fieldValue,
}) => {
  return (
    <Box className={Styles}>
      <Typography variant="body2">{fieldName}:</Typography>
      <Typography variant="body2" color="textSecondary">
        {fieldValue}
      </Typography>
    </Box>
  );
};
export default CountryField;
