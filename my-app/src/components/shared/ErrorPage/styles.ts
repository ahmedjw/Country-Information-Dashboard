import { makeStyles } from "@material-ui/core";
import COLORS from "../../../theme/colors";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  lg: {
    width: 300,
    height: 300,
  },
  sm: {
    width: 150,
    height: 150,
  },
  imgContainer: {
    position: "relative",
  },
  title: {
    color: COLORS.arsenic,
    marginTop: 30,
  },
  paragraph: {
    color: COLORS.dimGray,
    maxWidth: 300,
    marginTop: 30,
    marginBottom: 100,
    textAlign: "center",
  },
});

export default useStyles;
