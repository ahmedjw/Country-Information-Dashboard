import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import useStyles from "./styles";
import { TextField } from "@material-ui/core";
import { NavBarProps } from "./interfaces";

const NavBar: React.FC<NavBarProps> = ({ searchValue, setSearchValue }) => {
  const classes = useStyles();
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography className={classes.title} variant="h6">
          Country Information Dashboard
        </Typography>
        <TextField
          className={classes.textField}
          variant="standard"
          type="search"
          id="search"
          label="Search"
          onChange={handleOnchange}
          value={searchValue}
        />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
