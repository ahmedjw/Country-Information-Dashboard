import { makeStyles } from "@material-ui/core/styles";
import COLORS from "../../../theme/colors";

const useStyles = makeStyles({
  button: {
    "&:hover": {
      backgroundColor: COLORS.DCBlue,
    },
    color: COLORS.papayaWhip,
    fontFamily: "Avenir",
    textTransform: "none",
    backgroundColor: COLORS.DCBlue,
    marginTop: "0.8rem",
  },
  xl: {
    height: 52,
    maxWidth: 335,
    fontSize: "0.9375rem", // 15px
  },
  lg: {
    height: 42,
    maxWidth: 246,
    fontSize: "0.875rem", // 14px
  },
  md: {
    height: 42,
    maxWidth: 163,
    fontSize: "0.875rem", // 14px
  },
  sm: {
    height: 32,
    maxWidth: 82,
    fontSize: "0.8125rem", // 13px
  },
  icon: {
    height: 32,
    maxWidth: 25,
  },
});

export default useStyles;
