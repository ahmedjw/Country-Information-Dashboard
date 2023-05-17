import { Theme, makeStyles } from "@material-ui/core";
import COLORS from "../../../theme/colors";

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    width: "100%",
    marginBottom: "20px",

    [theme.breakpoints.up("md")]: {
      width: "29%",
      boxSizing: "border-box",
      marginBottom: "5px",
      marginLeft: "5px",
      border: "1px solid ",
      borderColor: COLORS.DCBlue,
    },
  },
  cardContent: {
    flexGrow: 1,
  },
  Box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));
export default useStyles;
