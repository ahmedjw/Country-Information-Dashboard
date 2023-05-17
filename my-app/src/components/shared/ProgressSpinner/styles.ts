import { makeStyles } from "@material-ui/core/styles";
import COLORS from "../../../theme/colors";

const useStyles = makeStyles((theme) => ({
  spinnersContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  isFullPageSpinner: {
    height: "70vh",
  },
  bottom: {
    color: theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
    position: "absolute",
  },
  top: {
    animationDuration: "550ms",
    position: "absolute",
  },
  circle: {
    strokeLinecap: "round",
  },
  primary: {
    color: theme.palette.primary.main,
  },
  secondary: {
    color: COLORS.arsenic,
  },
}));

export default useStyles;
