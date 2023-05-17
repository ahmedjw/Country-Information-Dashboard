import CircularProgress from "@material-ui/core/CircularProgress";
import clsx from "clsx";
import ProgressSpinnerProps from "./interfaces";
import useStyles from "./styles";
const spinnerSize = {
  xs: 25,
  sm: 35,
  md: 45,
  lg: 65,
  xl: 75,
};

const ProgressSpinner: React.FC<ProgressSpinnerProps> = ({
  size,
  color,
  isButtonSpinner,
  ...props
}) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(
        classes.spinnersContainer,
        !isButtonSpinner && classes.isFullPageSpinner
      )}
    >
      <CircularProgress
        variant="determinate"
        className={classes.bottom}
        size={spinnerSize[size]}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        className={`${classes.top} ${classes[color]}`}
        classes={{
          circle: classes.circle,
        }}
        size={spinnerSize[size]}
        thickness={4}
        {...props}
      />
    </div>
  );
};

export default ProgressSpinner;
