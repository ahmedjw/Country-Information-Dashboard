import { Theme } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import COLORS from "../../../theme/colors";

const useStyles = makeStyles({
  appBar: {
    width: "100%",
    paddingLeft: "3rem",
    paddingRight: "3rem",
  },
  title: {
    flexGrow: 1,
    display: "none",
    "@media (min-width: 960px)": {
      display: "flex",
      flex: "flex-1",
    },
  },

  textField: {
    // flexGrow: 1,
    display: "flex",
    flex: "flex-1",
    color: COLORS.whiteSmoke,
    borderColor: COLORS.whiteSmoke,
  },
});
export default useStyles;
