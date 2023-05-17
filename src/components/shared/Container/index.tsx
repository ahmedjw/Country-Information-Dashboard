import React from "react";
import { Container } from "@mui/material";
import useStyles from "./styles";
import { CustomContainerProps } from "./interfaces";

const CustomContainer: React.FC<CustomContainerProps> = ({ children }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      {children}
    </Container>
  );
};

export default CustomContainer;
